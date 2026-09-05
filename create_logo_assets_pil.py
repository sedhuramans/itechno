import os
from PIL import Image, ImageOps, ImageEnhance

uploaded = r"C:\Users\gokul\.gemini\antigravity-ide\brain\7de75ebb-fe9c-410d-abec-b98bb3180d94\.user_uploaded\media_1788500413042.jpg"
pub_dir = r"d:\Itechno\Itechno\public"
os.makedirs(pub_dir, exist_ok=True)

im = Image.open(uploaded).convert("RGB")
print("Uploaded image loaded:", im.size)

# 1. CROPPED LOGO (width: 1024, y: 135 to 495, height: 360)
cropped = im.crop((0, 135, 1024, 495))
w, h = cropped.size

# Make transparent:
# Convert to RGBA
# For each pixel, alpha is computed from max(R, G, B)
# Low threshold <= 8 is 0, > 8 scales up to 255
r, g, b = cropped.split()
# Find max of channels:
max_rgb = ImageChops_max = ImageOps.invert(ImageOps.invert(r))
# Actually we can do it with point lookup or getdata/bytearray!
# A bytearray for 1024x360x4 is only 1.4 Megabytes!
raw_data = cropped.tobytes()
rgba_bytes = bytearray(w * h * 4)

for i in range(w * h):
    pr = raw_data[i * 3]
    pg = raw_data[i * 3 + 1]
    pb = raw_data[i * 3 + 2]
    
    # max channel
    m = pr if pr > pg else pg
    if pb > m:
        m = pb
        
    x = i % w
    y = i // w
    
    # Edge fade factor
    edge_factor = 1.0
    if y < 15:
        edge_factor *= (y / 15.0)
    elif y > h - 16:
        edge_factor *= ((h - 1 - y) / 15.0)
    if x < 25:
        edge_factor *= (x / 25.0)
    elif x > w - 26:
        edge_factor *= ((w - 1 - x) / 25.0)
        
    if m <= 6:
        alpha = 0
    else:
        # Scale alpha
        val = int((m - 6) * 2.8 * edge_factor)
        alpha = 255 if val > 255 else (0 if val < 0 else val)
        
    rgba_bytes[i * 4] = pr
    rgba_bytes[i * 4 + 1] = pg
    rgba_bytes[i * 4 + 2] = pb
    rgba_bytes[i * 4 + 3] = alpha

logo_rgba = Image.frombytes("RGBA", (w, h), bytes(rgba_bytes))
logo_rgba.save(os.path.join(pub_dir, "itechno-logo-cropped.png"), format="PNG")
logo_rgba.save(os.path.join(pub_dir, "itechno-logo-transparent.png"), format="PNG")
print("Saved itechno-logo-cropped.png and itechno-logo-transparent.png")

# Full 1024x512 itechno-logo.png
full_logo = Image.new("RGBA", (1024, 512), (0, 0, 0, 0))
full_logo.paste(logo_rgba, (0, (512 - h) // 2), logo_rgba)
full_logo.save(os.path.join(pub_dir, "itechno-logo.png"), format="PNG")
print("Saved itechno-logo.png")

# 2. ICON (512x512)
# Center: cx=177, cy=308, size 320x320
cx, cy = 177, 308
half = 160
icon_crop = im.crop((cx - half, cy - half, cx + half, cy + half)) # (17, 148, 337, 468)
iw, ih = icon_crop.size

icon_raw = icon_crop.tobytes()
icon_bytes = bytearray(iw * ih * 4)

for i in range(iw * ih):
    pr = icon_raw[i * 3]
    pg = icon_raw[i * 3 + 1]
    pb = icon_raw[i * 3 + 2]
    
    x = i % iw
    y = i // ih # wait, i // iw
    y = i // iw
    
    # Original image x = 17 + x
    orig_x = 17 + x
    # Cut off 'T' (orig_x >= 270 => x >= 253)
    t_factor = 1.0
    if x >= 253:
        t_factor = 0.0
    elif x >= 246:
        t_factor = (253 - x) / 7.0
        
    # Radial falloff from center (160, 160)
    dx = x - 160
    dy = y - 160
    dist = (dx * dx + dy * dy) ** 0.5
    r_factor = 1.0
    if dist > 155:
        r_factor = 0.0
    elif dist > 135:
        r_factor = (155 - dist) / 20.0
        
    m = pr if pr > pg else pg
    if pb > m:
        m = pb
        
    if m <= 6:
        alpha = 0
    else:
        val = int((m - 6) * 2.8 * t_factor * r_factor)
        alpha = 255 if val > 255 else (0 if val < 0 else val)
        
    icon_bytes[i * 4] = pr
    icon_bytes[i * 4 + 1] = pg
    icon_bytes[i * 4 + 2] = pb
    icon_bytes[i * 4 + 3] = alpha

icon_rgba = Image.frombytes("RGBA", (iw, ih), bytes(icon_bytes)).resize((512, 512), Image.Resampling.LANCZOS)
icon_rgba.save(os.path.join(pub_dir, "itechno-icon.png"), format="PNG")
icon_rgba.save(os.path.join(pub_dir, "itechno-icon-full.png"), format="PNG")
icon_rgba.save(os.path.join(pub_dir, "itechno-mark.png"), format="PNG")
print("Saved itechno-icon.png, itechno-icon-full.png, itechno-mark.png")

icon_rgba.save(os.path.join(pub_dir, "favicon.ico"), format="ICO", sizes=[(16,16), (32,32), (48,48), (64,64)])
print("Saved favicon.ico")

print("SUCCESSFULLY FINISHED ALL PIL ASSET CREATION!")
