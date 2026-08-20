# .webfinger/

This directory is part of crii.me's identity layer.

## What's here

| File | Purpose |
|------|---------|
| `identity.json` | Human-readable identity card for crii.me |
| `pgp.asc` | PGP public key for contact verification |
| `did.json` | Decentralized Identity Document (DID) stub |

## Notes

The canonical WebFinger endpoint is at:
  `https://crii.me/.well-known/webfinger`

These files are supplementary. They are not served by any dynamic API —
this is a static GitHub Pages site.

Queries like:
  `https://crii.me/.well-known/webfinger?resource=acct:criime@crii.me`
will return the JSON document at `.well-known/webfinger`.
