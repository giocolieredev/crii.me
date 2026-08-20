# crii.me — how to publish & maintain your sites

This folder contains **both** websites:| Site         | Where it lives        | URL              | Repo (on giocolieredev)  |
| ------------ | --------------------- | ---------------- | ------------------------ |
| Main website | root of this folder   | https://crii.me  | `crii.me`                |
| Blog         | `the-blog/` folder    | https://blog.crii.me | `the-blog`            |
| CDN          | `cdn/` folder         | https://cdn.crii.me  | `cdn`                 |
| Status       | `status/` folder      | https://status.crii.me | `status`            |
| Links        | `link/` folder        | https://link.crii.me   | `link`              |
| Bio          | `bio/` folder         | https://bio.crii.me    | `bio`               |

The blog page on the main site (`crii.me/blog/`) is a redirect to
`blog.crii.me`. Both sites are hosted **for free on GitHub Pages** — you only
pay for the domain (`crii.me`).

---

## 0. Things you need (once)

- A GitHub account (**giocolieredev**) — already have it.
- [Git](https://git-scm.com/download/win) installed on your PC.
- Optional but handy: the [GitHub CLI (`gh`)](https://cli.github.com/) — commands below use it. Without it, use GitHub Desktop or the github.com website instead (also explained).

---

## 1. Publish the blog for the first time

Open a terminal in the `the-blog` folder:

```bash
cd the-blog
```

**Step 1 — log in to GitHub** (first time only):

```bash
gh auth login
```

Choose *GitHub.com* → *HTTPS* → *Login with a web browser*, and log in as
**giocolieredev**.

**Step 2 — create the repo and push** (this uploads everything):

```bash
gh repo create the-blog --public --source . --push
```

> No `gh`? Create the repo on github.com (New repository → name `the-blog` →
> Public), then run:
> ```bash
> git remote add origin https://github.com/giocolieredev/the-blog.git
> git push -u origin main
> ```

**Step 3 — turn on GitHub Pages** (once):

1. Go to **github.com/giocolieredev/the-blog → Settings → Pages**.
2. Under *Build and deployment* → *Source*, pick **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.

GitHub now builds the site with Jekyll automatically on every push (takes
about 1 minute). The `CNAME` file in the repo already tells GitHub the domain
is `blog.crii.me`.

**Step 4 — point the domain at GitHub** (once, in Namecheap):

1. Namecheap → Domain List → **crii.me** → **Advanced DNS**.
2. Add a record:
   ```
   Type:  CNAME
   Host:  blog
   Value: giocolieredev.github.io
   ```
3. Wait a few minutes — GitHub automatically issues the HTTPS certificate.

🎉 **Done — `https://blog.crii.me` is live.**

---

## 2. Write a new post

A post is just a text file in `the-blog/_posts/`.

**Naming rule:** `YYYY-MM-DD-your-title.md` — the date in the filename is the
post's date, and the rest becomes the URL. For example:

```
_posts/2026-09-01-my-first-code-post.md
```

gives the URL `blog.crii.me/blog/my-first-code-post/`.

**File template** — copy any existing post and change the top part
(called *front matter*, between the `---` lines):

```markdown
---
layout: post
title: "My first code post"
description: "One line that shows up in previews and search results."
date: 2026-09-01 12:00:00 +0000
tags: [dev, meta]
---

Your post content here. Write in Markdown — it supports **bold**, *italics*,
[links](https://example.com), code blocks, images, lists, headings, quotes…

<!--more-->

Anything after this line is hidden from the post list on the blog home page
(but still shown when you open the full post).
```

**Cheat sheet for the front matter:**

| Field         | What it does                              | Required |
| ------------- | ----------------------------------------- | -------- |
| `layout`      | Always `post`                             | ✅ yes   |
| `title`       | Post title (shown everywhere)             | ✅ yes   |
| `description` | Short summary for search engines          | 👍 nice  |
| `date`        | Publication date                          | ✅ yes   |
| `tags`        | List like `[dev, music]` — shows as chips | optional |

Markdown quick reference:

| You type                        | You get                 |
| ------------------------------- | ----------------------- |
| `## Heading`                    | section heading         |
| `**bold**` / `*italic*`         | **bold** / *italic*     |
| `[link text](https://url)`      | clickable link          |
| `![alt text](/assets/images/x.png)` | image               |
| `> a quote`                     | quote block             |
| `- item` / `1. item`            | bullet / numbered list  |
| `` `inline code` ``             | inline code             |
| fenced block with ` ```js `     | highlighted code block  |

---

## 3. Publish the post (push to GitHub)

```bash
cd the-blog
git add _posts/
git commit -m "Add post: my first code post"
git push
```

That's it. GitHub Pages rebuilds automatically — wait ~1 minute and your post
is at `blog.crii.me/blog/my-first-code-post/`.

---

## 4. Edit or delete a post

- **Edit:** open the file, change it, then commit + push (same commands as
  step 3).
- **Delete:** `git rm _posts/2026-09-01-my-first-code-post.md`, commit, push.
  The post disappears from the site.

---

## 5. Add images to a post

1. Put the image in `the-blog/assets/images/` (create the folder if missing).
2. Reference it in your post with the full path from the site root:
   ```markdown
   ![My drawing](/assets/images/my-drawing.png)
   ```
3. Commit and push — the image is uploaded with the post.

---

## 6. Preview the blog on your PC (optional)

Works even before publishing — great for checking how a post looks.

**✅ Already done on this PC:** Ruby 3.3 and all gems are installed. Just open
**a new terminal** and run:

```bash
cd the-blog
bundle exec jekyll serve
```

Then open **http://localhost:4000** in your browser.

> If `bundle` isn't found (old terminal window), run this once first:
> ```bash
> export PATH="/c/Ruby33-x64/bin:$PATH"
> ```

Every file change shows up after a refresh. Press `Ctrl+C` in the terminal to
stop the server.

**First time on a new PC:**

1. Install Ruby: https://rubyinstaller.org/ (default options are fine).
2. In a terminal:

```bash
cd the-blog
gem install bundler
bundle install
bundle exec jekyll serve
```

3. Open **http://localhost:4000** in your browser.

---

## 7. Update the main website (crii.me)

The main site's files are the HTML pages at the **root of this folder**
(`index.html`, `about.html`, `discord.html`, `404.html`, …).

**What's already done for the blog move:**
- `blog/index.html` → instantly redirects to `blog.crii.me`.
- Every **BLOG** button/link (nav bar, mobile menu, home page, About, Discord)
  goes straight to `blog.crii.me`.

**To publish the main site** (same pattern as the blog):

```bash
# from the root of this folder
git init -b main
git add -A
git commit -m "crii.me website"
gh repo create crii.me --public --source . --push
```

Then enable Pages in Settings (branch `main`, `/ (root)`).

> ⚠️ **Important:** the `the-blog/` folder is its **own separate repo**, so the
> main site repo must not include it. Add a `.gitignore` file with one line:
> ```
> the-blog/
> ```
> so it stays out of the main site's commits.

> ℹ️ `crii.me` already points at GitHub Pages (A records) — so it was published
> from *some* repo before. If you publish it again from `giocolieredev/crii.me`,
> the new Pages site will take over. Remove the old repo's Pages setting if the
> domain starts fighting (you can only have one site on `crii.me`).

---

## 8. The CDN (cdn.crii.me)

The CDN repo (`cdn/` folder) hosts images, CSS, JS, and fonts that can be
referenced from the blog or main site.

**Upload a file:**

```bash
cp my-photo.png cdn/images/
cd cdn && git add -A && git commit -m "Add photo" && git push
```

**Reference it anywhere:**

```html
<img src="https://cdn.crii.me/images/my-photo.png" alt="Photo" loading="lazy">
<link rel="stylesheet" href="https://cdn.crii.me/css/style.css">
```

**DNS (once, in Namecheap):**

```
Type:  CNAME
Name:  cdn
Value: giocolieredev.github.io
```

---

## 9. The Status Page (status.crii.me)

The status page (`status/` folder) shows live system status for all services.

**It's fully automatic** — a GitHub Action checks every service every 10
minutes over HTTPS and updates `status.json` itself (free, public repo).
Nothing to do on your end: add a service to `status.json` (with a `url`)
and it gets monitored.

**Add an incident manually** (the Action won't remove these):

```bash
cd status
vim status.json  # add to the "incidents" array
git add status.json && git commit -m "Add incident" && git push
```

**Run a check on demand:** Actions tab → *Monitor services* → **Run workflow**.

**Report an incident:**

Add an entry to the `incidents` array in `status.json`. See the README for
the full format.

**DNS (once, in Namecheap):**

```
Type:  CNAME
Name:  status
Value: giocolieredev.github.io
```

---

## 10. URL Shortener (link.crii.me)

The link shortener (`link/` folder) provides short URLs at `link.crii.me/#<code>`.

**Add a short link:**

Edit `link/urls.json`:

```json
{
  "code": "mysite",
  "url": "https://example.com",
  "title": "My Site",
  "created": "2026-08-21",
  "clicks": 0
}
```

Then push:

```bash
cd link
git add urls.json && git commit -m "Add link: mysite" && git push
```

**Use the short link:**

```
https://link.crii.me/#mysite
```

---

## 11. Link-in-Bio (bio.crii.me)

The bio page (`bio/` folder) is a link-in-bio page with social links.

**Update the page:**

Edit `bio/index.html` to change links, bio text, or social accounts.

```bash
cd bio
vim index.html
git add index.html && git commit -m "Update bio" && git push
```

---

## 12. Troubleshooting

| Problem                                  | Fix |
| ---------------------------------------- | --- |
| Post doesn't appear after pushing        | Check the date in the filename isn't in the future (Jekyll hides future posts). Wait ~1 min for the build. |
| Page shows "Build failed"                | github.com/giocolieredev/the-blog → **Actions** tab → open the latest Pages workflow → read the error log. Usually a missing `layout: post` or a typo in the front matter. |
| `blog.crii.me` doesn't load              | DNS: is the CNAME record saved? It can take a few minutes (or up to an hour for the HTTPS cert). |
| `blog.crii.me` loads but shows the wrong site | The CNAME `Value` must be exactly `giocolieredev.github.io` (the account hosting the repo). |
| Edited a post but nothing changed        | Did you `git push`? The build only runs on new pushes to `main`. |
| Wrote in Markdown but no formatting      | Make sure there's a blank line between paragraphs, and the file is in `_posts/`. |

---

## Quick cheat sheet

```bash
# New post → add file to the-blog/_posts/, then:
cd the-blog
git add -A
git commit -m "Add post: <title>"
git push

# Preview locally:
cd the-blog
bundle exec jekyll serve        # → http://localhost:4000

# Publish the main site (root of this folder):
git add -A && git commit -m "update website" && git push
```

**Useful links**

- Blog repo: https://github.com/giocolieredev/the-blog
- Blog live: https://blog.crii.me — RSS: https://blog.crii.me/feed.xml
- Jekyll docs: https://jekyllrb.com/docs/
- Markdown guide: https://www.markdownguide.org/cheat-sheet/
