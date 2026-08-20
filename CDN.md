# CDN — cdn.crii.me

Static file CDN for images, CSS, JS, fonts, and assets.

## 📁 Folder Structure

```
cdn/
├── images/     ← photos, og-images, illustrations
├── css/        ← shared stylesheets
├── js/         ← shared scripts
├── fonts/      ← web fonts (woff2, etc.)
└── assets/     ← icons, favicons, misc
```

## 🚀 Upload a File

```bash
cd cdn
cp my-photo.png images/
git add -A
git commit -m "Add photo"
git push
```

Live in ~1 minute.

## 🔗 Reference Files

```html
<!-- Image -->
<img src="https://cdn.crii.me/images/photo.png" loading="lazy">

<!-- CSS -->
<link rel="stylesheet" href="https://cdn.crii.me/css/style.css">

<!-- JS -->
<script src="https://cdn.crii.me/js/app.js"></script>

<!-- Font -->
<style>
  @font-face {
    font-family: 'MyFont';
    src: url('https://cdn.crii.me/fonts/myfont.woff2') format('woff2');
  }
</style>
```

## 📋 File Explorer

Visit https://cdn.crii.me to browse all files with:
- File type icons
- Upload timestamps
- One-click copy CDN URL
- Download buttons

## ⚡ Caching

GitHub Pages uses `Cache-Control: max-age=300` (5 minutes).

For longer caching, use content-hash filenames:
```
style.abc123.css  ← browser caches until hash changes
```

## 🔒 CORS

GitHub Pages allows cross-origin loading for:
- Images, CSS, Scripts — no CORS needed
- Fonts — CORS headers included automatically
