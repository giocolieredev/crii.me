# crii.me — Complete Documentation

Everything you need to manage the crii.me ecosystem.

## 📁 Project Structure

```
crii.me - Blog Test/
├── index.html          ← Main website
├── about.html          ← About page
├── discord.html        ← Discord page
├── blog/               ← Redirect to blog.crii.me
├── the-blog/           ← Blog repo (blog.crii.me)
├── cdn/                ← CDN repo (cdn.crii.me)
├── status/             ← Status page (status.crii.me)
├── link/               ← URL shortener (link.crii.me)
├── bio/                ← Link-in-bio (bio.crii.me)
├── TUTORIAL.md         ← Main tutorial
└── DOCS.md             ← This file
```

## 🌐 All Subdomains

| Subdomain | Repo | Purpose |
|-----------|------|---------|
| crii.me | giocolieredev/crii.me | Main website |
| blog.crii.me | giocolieredev/the-blog | Jekyll blog |
| cdn.crii.me | giocolieredev/cdn | File CDN |
| status.crii.me | giocolieredev/status | System status |
| link.crii.me | giocolieredev/link | URL shortener |
| bio.crii.me | giocolieredev/bio | Link-in-bio |

## 📚 Documentation Files

| File | Description |
|------|-------------|
| [TUTORIAL.md](TUTORIAL.md) | Main tutorial — publishing, posting, DNS |
| [CDN.md](CDN.md) | CDN usage and file management |
| [STATUS.md](STATUS.md) | Status page updates and incidents |
| [LINK.md](LINK.md) | URL shortener management |
| [BIO.md](BIO.md) | Link-in-bio page updates |

## 🔧 DNS Records (Namecheap)

All subdomains use the same pattern:

```
Type:  CNAME
Name:  <subdomain>
Value: giocolieredev.github.io
```

Records needed:
- `blog` → giocolieredev.github.io
- `cdn` → giocolieredev.github.io
- `status` → giocolieredev.github.io
- `link` → giocolieredev.github.io
- `bio` → giocolieredev.github.io

The apex `crii.me` already has A records pointing to GitHub Pages IPs.

## 🚀 Quick Commands

```bash
# Update blog post
cd the-blog
vim _posts/YYYY-MM-DD-title.md
git add -A && git commit -m "Add post: title" && git push

# Update CDN
cd cdn
cp file.png cdn/images/
git add -A && git commit -m "Add file" && git push

# Update status
cd status
vim status.json
git add status.json && git commit -m "Status update" && git push

# Update short links
cd link
vim urls.json
git add urls.json && git commit -m "Update links" && git push

# Update bio
cd bio
vim index.html
git add index.html && git commit -m "Update bio" && git push
```

## 📋 GitHub Auth

All repos are under the `giocolieredev` org.
Your personal account `giocoliere` is an admin of the org.

No separate login needed — `gh` commands work with your current auth.
