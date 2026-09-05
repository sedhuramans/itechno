import os
import numpy as np
from PIL import Image

uploaded = r"C:\Users\gokul\.gemini\antigravity-ide\brain\7de75ebb-fe9c-410d-abec-b98bb3180d94\.user_uploaded\media_1788500413042.jpg"
pub_dir = r"d:\Itechno\Itechno\public"
os.makedirs(pub_dir, exist_ok=True)

im = Image.open(uploaded).convert("RGB")
arr = np.array(im, dtype=np.float32)

print("Original image size:", im.size)

# =========================================================================
# 1. CREATE itechno-logo-cropped.png (True transparent RGBA)
# =========================================================================
# The content bounds:
# y: 140 to 490 (height 350)
# x: 0 to 1024
crop = arr[140:490, :].copy()
h, w, _ = crop.shape

# Background floor threshold: background has max channel ~ 5
# Subtract background floor
clean = np.maximum(0.0, crop - 5.0)
clean_max = clean.max(axis=2)

# Alpha calculation:
# For metallic letters/emblem (clean_max > 25): alpha reaches 255
# For blue glow/flare (clean_max > 0): alpha is proportional to clean_max
alpha = np.clip(clean_max * 2.8, 0.0, 255.0)

# Unpremultiply so colors stay rich when blended on dark background
safe_a = np.maximum(alpha / 255.0, 0.001)[:, :, np.newaxis]
unpre_rgb = np.clip(clean / safe_a, 0.0, 255.0)

# Soft boundary fade on top, bottom, left, right (zero edge clipping)
fade_y = np.clip(np.minimum(np.arange(h), h - 1 - np.arange(h)) / 15.0, 0.0, 1.0)[:, np.newaxis]
fade_x = np.clip(np.minimum(np.arange(w), w - 1 - np.arange(w)) / 25.0, 0.0, 1.0)[np.newaxis, :]
edge_mask = fade_y * fade_x
alpha = alpha * edge_mask

rgba_logo = np.zeros((h, w, 4), dtype=np.uint8)
rgba_logo[:, :, :3] = unpre_rgb.astype(np.uint8)
rgba_logo[:, :, 3] = alpha.astype(np.uint8)

img_cropped = Image.fromarray(rgba_logo, mode="RGBA")
img_cropped.save(os.path.join(pub_dir, "itechno-logo-cropped.png"), format="PNG")
img_cropped.save(os.path.join(pub_dir, "itechno-logo-transparent.png"), format="PNG")
print("Saved itechno-logo-cropped.png and itechno-logo-transparent.png (RGBA):", img_cropped.size)

# Also save full 1024x512 itechno-logo.png
full_logo = Image.new("RGBA", (1024, 512), (0, 0, 0, 0))
paste_y = (512 - h) // 2
full_logo.paste(img_cropped, (0, paste_y), img_cropped)
full_logo.save(os.path.join(pub_dir, "itechno-logo.png"), format="PNG")
print("Saved itechno-logo.png (RGBA 1024x512)")

# =========================================================================
# 2. CREATE itechno-icon.png (True transparent RGBA, 512x512)
# =========================================================================
# Icon center: cx=177, cy=308
# Box size 320x320
cx, cy = 177, 308
half = 160
sy0, sy1 = cy - half, cy + half # 148 to 468
sx0, sx1 = cx - half, cx + half # 17 to 337

icon_crop = arr[sy0:sy1, sx0:sx1].copy()

# Zero out 'T' (original x >= 270 => crop_x >= 270 - sx0 = 253)
cut_x = 270 - sx0
for col in range(cut_x - 6, icon_crop.shape[1]):
    factor = max(0.0, min(1.0, (cut_x - col) / 6.0))
    icon_crop[:, col] = icon_crop[:, col] * factor

# Clean background noise
icon_clean = np.maximum(0.0, icon_crop - 5.0)
icon_max = icon_clean.max(axis=2)
icon_alpha = np.clip(icon_max * 2.8, 0.0, 255.0)

# Radial fade at outer edges
Y, X = np.ogrid[:320, :320]
dist = np.sqrt((X - 160)**2 + (Y - 160)**2)
r_fade = np.clip((155 - dist) / 20.0, 0.0, 1.0)
icon_alpha = icon_alpha * r_fade

safe_ia = np.maximum(icon_alpha / 255.0, 0.001)[:, :, np.newaxis]
icon_unpre = np.clip(icon_clean / safe_ia, 0.0, 255.0)

icon_rgba = np.zeros((320, 320, 4), dtype=np.uint8)
icon_rgba[:, :, :3] = icon_unpre.astype(np.uint8)
icon_rgba[:, :, 3] = icon_alpha.astype(np.uint8)

icon_512 = Image.fromarray(icon_rgba, mode="RGBA").resize((512, 512), Image.Resampling.LANCZOS)
icon_512.save(os.path.join(pub_dir, "itechno-icon.png"), format="PNG")
icon_512.save(os.path.join(pub_dir, "itechno-icon-full.png"), format="PNG")
icon_512.save(os.path.join(pub_dir, "itechno-mark.png"), format="PNG")
print("Saved itechno-icon.png, itechno-icon-full.png, itechno-mark.png (RGBA 512x512)")

# Generate favicon.ico
icon_512.save(os.path.join(pub_dir, "favicon.ico"), format="ICO", sizes=[(16,16), (32,32), (48,48), (64,64)])
print("Saved favicon.ico")

print("ALL ASSETS CREATED SUCCESSFULLY!")
