# Status Page — status.crii.me

System status page for the crii.me ecosystem.  
**Fully automatic** — a GitHub Action checks every service every 10 minutes
and updates `status.json` by itself. Free (public repo Actions minutes).

## How it works

1. `.github/workflows/monitor.yml` runs `monitor.py` every 10 minutes.
2. `monitor.py` does an HTTPS HEAD request to each service URL:
   - `2xx/3xx` → operational
   - `4xx` → degraded
   - `5xx` / timeout / connection error → outage
3. Results are written to `status.json` (status + 24h uptime history)
   and auto-committed by the Action.

No manual editing needed. The status page reflects what's actually live.

## Manual additions (still supported)

You can still edit `status.json` to add **incidents** (the Action won't
remove them) or to override a status temporarily.

### Add an incident

```json
{
  "id": "inc-2026-08-21-001",
  "title": "Website returning 502 errors",
  "status": "investigating",
  "severity": "major",
  "created": "2026-08-21T10:00:00Z",
  "resolved": null,
  "services": ["website"],
  "updates": [
    {
      "time": "2026-08-21T10:00:00Z",
      "status": "investigating",
      "message": "We are investigating reports of 502 errors."
    }
  ]
}
```

Incident statuses: `investigating`, `identified`, `monitoring`, `resolved`, `postmortem`

## Run a check manually

- GitHub: **Actions** tab → *Monitor services* → **Run workflow**
- Locally: `python3 monitor.py` (or `py monitor.py` on Windows)

## Configuration

Services to monitor are the entries with a `url` in `status.json`
(the `API` service without a URL is skipped — used for "coming soon").

## Page refresh

The page reloads `status.json` every 5 minutes.

## DNS

```
Type:  CNAME
Name:  status
Value: giocolieredev.github.io
```
