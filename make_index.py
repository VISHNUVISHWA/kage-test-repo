"""Usage: python make_index.py https://raw.githubusercontent.com/<user>/<repo>/main
Writes index.json (version 1.1.0) with correct SHA-256 hashes, and pages/1-3.png test images."""
import hashlib, json, os, sys

base = sys.argv[1].rstrip("/")


def sha(path):
    return hashlib.sha256(open(path, "rb").read()).hexdigest()


def entry(id_, name, media, script, permissions):
    return {"id": id_, "name": name, "version": "1.1.0", "lang": "en", "media_type": media,
            "is_nsfw": False, "script_url": f"{base}/{script}", "script_sha256": sha(script),
            "permissions": permissions, "min_app_version": "0.1.0"}


os.makedirs("pages", exist_ok=True)
try:
    from PIL import Image, ImageDraw, ImageFont
    colors = [(190, 60, 60), (60, 140, 190), (70, 170, 90)]
    for i, color in enumerate(colors, start=1):
        image = Image.new("RGB", (800, 1200), color)
        draw = ImageDraw.Draw(image)
        try:
            font = ImageFont.truetype("arial.ttf", 400)
        except Exception:
            font = ImageFont.load_default()
        draw.text((260, 380), str(i), fill=(255, 255, 255), font=font)
        image.save(f"pages/{i}.png")
except ImportError:
    print("Pillow missing: add your own pages/1.png, 2.png and 3.png")

index = {
    "name": "Kage Test Repository",
    "url": f"{base}/index.json",
    "version": 2,
    "signing_key_fingerprint": "a8f5b4c3d2e1f0192837465bca9817263544ddeeaa5566778899001122334455",
    "signature": "ab" * 64,
    "extensions": [
        entry("test-manga", "Test Manga", "manga", "test-manga.js", ["raw.githubusercontent.com"]),
        entry("test-anime", "Test Anime", "anime", "test-anime.js", []),
    ],
}
json.dump(index, open("index.json", "w"), indent=2)
print("Wrote index.json; add this URL in the app:", f"{base}/index.json")
