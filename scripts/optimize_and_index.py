import os
import sys
from PIL import Image, ImageOps
import json

RAW_DIR = "public/memories_raw"
OPT_DIR = "public/memories/optimized"
THUMB_DIR = "public/memories/thumbnails"

os.makedirs(OPT_DIR, exist_ok=True)
os.makedirs(THUMB_DIR, exist_ok=True)

# Scan all image files
files_found = []
for root, dirs, files in os.walk(RAW_DIR):
    for f in sorted(files):
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            full_path = os.path.join(root, f)
            rel_path = os.path.relpath(full_path, RAW_DIR)
            files_found.append((full_path, f, rel_path))

print(f"Total images found: {len(files_found)}")

processed_records = []

for idx, (full_path, fname, rel_path) in enumerate(files_found):
    base_name, _ = os.path.splitext(fname)
    opt_filename = f"{base_name}.webp"
    thumb_filename = f"{base_name}_thumb.webp"
    
    opt_path = os.path.join(OPT_DIR, opt_filename)
    thumb_path = os.path.join(THUMB_DIR, thumb_filename)
    
    try:
        with Image.open(full_path) as im:
            im = ImageOps.exif_transpose(im)
            orig_w, orig_h = im.size
            
            # Optimized version (max width/height 1600px)
            if not os.path.exists(opt_path):
                im_opt = im.copy()
                im_opt.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
                if im_opt.mode in ("RGBA", "P"):
                    im_opt = im_opt.convert("RGB")
                im_opt.save(opt_path, "WEBP", quality=85)
            
            # Thumbnail version (max width/height 600px)
            if not os.path.exists(thumb_path):
                im_thumb = im.copy()
                im_thumb.thumbnail((600, 600), Image.Resampling.LANCZOS)
                if im_thumb.mode in ("RGBA", "P"):
                    im_thumb = im_thumb.convert("RGB")
                im_thumb.save(thumb_path, "WEBP", quality=80)
            
            # Compute aspect ratio category
            aspect_ratio = round(orig_w / orig_h, 2)
            
            processed_records.append({
                "id": idx + 1,
                "originalFilename": fname,
                "src": f"/memories/optimized/{opt_filename}",
                "thumbnail": f"/memories/thumbnails/{thumb_filename}",
                "rawSrc": f"/memories_raw/{rel_path.replace(os.sep, '/')}",
                "width": orig_w,
                "height": orig_h,
                "aspectRatio": aspect_ratio
            })
            print(f"Processed [{idx+1}/{len(files_found)}] {fname} -> {opt_filename}")
    except Exception as e:
        print(f"Error processing {fname}: {e}")

print(f"Successfully processed {len(processed_records)} images.")
