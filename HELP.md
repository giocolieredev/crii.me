# Help Center — help.crii.me

Knowledge base + support for the crii.me ecosystem.

## Repo

`giocolieredev/help` — hosted at **https://help.crii.me**

## Features

| Feature | How it works |
|---------|--------------|
| Knowledge base | Markdown articles in `articles/<project>/`, indexed by `kb.json` |
| Search & filters | Client-side; filter by project and category |
| FAQ | Pre-made Q&A in `kb.json` (accordion on the home page) |
| Support tickets | GitHub Issues (form template at `issues/new/choose`); open tickets listed on the page |
| Discussions | GitHub Discussions enabled + giscus embedded under each article |

## Add a knowledge base article

1. Create the markdown file: `help/articles/<project>/my-article.md`
2. Add an entry to `help/kb.json`:

```json
{
  "id": "cdn-cache",
  "title": "How caching works on the CDN",
  "project": "cdn",
  "category": "Guides",
  "excerpt": "Why files are cached and how to bust the cache.",
  "path": "articles/cdn/caching.md",
  "tags": ["cdn", "cache"]
}
```

3. Commit and push:

```bash
cd help
git add articles/ kb.json
git commit -m "Add article: caching"
git push
```

## Add a FAQ entry

Add to the `faq` array in `kb.json`:

```json
{ "q": "Question?", "a": "Answer with **markdown**." }
```

## Categories / projects

- Projects: `website`, `blog`, `cdn`, `status`, `link`, `bio`
- Categories: `Getting Started`, `Guides`, `Troubleshooting`, `FAQ`

You can add new projects/categories to `kb.json` anytime.

## Support tickets

- Users open tickets via `https://github.com/giocolieredev/help/issues/new/choose`
- Open tickets appear automatically on the help home page
- Answer tickets in the Issues tab; closing the issue removes it from the page

## Discussions

- Public discussions: https://github.com/giocolieredev/help/discussions
- Every article has a giscus-powered discussion (Q&A category) at the bottom
- To change the discussion category, update `CATEGORY_ID` in `help/index.html`
