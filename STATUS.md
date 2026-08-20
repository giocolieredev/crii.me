# Status Page — status.crii.me

System status page for the crii.me ecosystem.

## 📝 Update Status

Edit `status/status.json` and push.

### Change Service Status

```json
{
  "name": "Website",
  "slug": "website",
  "status": "degraded"
}
```

Valid statuses: `operational`, `degraded`, `outage`, `maintenance`

### Report an Incident

Add to `incidents` array:

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

### Update Uptime Bars

The `uptime` object has 24-element arrays (one per hour):
- `1` = operational
- `0` = down
- `0.5` = degraded
- `2` = maintenance

Example: `[1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]` = 2h downtime

## 🚀 Quick Update

```bash
cd status
vim status.json
git add status.json
git commit -m "Update: website degraded"
git push
```

## 🔄 Auto-Refresh

The page auto-refreshes every 5 minutes. No rebuild needed.

## 📊 Features

- Live status banner (color-coded)
- Service cards with individual status
- Uptime bars with hour-by-hour tooltips
- Incident history timeline
- Dark theme matching crii.me
