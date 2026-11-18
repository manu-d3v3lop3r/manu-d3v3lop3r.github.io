# Security policy

This repository contains the source of a static personal portfolio published on
GitHub Pages. It has no backend, database, user accounts, forms or cookies.

## Reporting a vulnerability

Please **do not open a public issue**. Report it privately through
[GitHub's private vulnerability reporting](https://github.com/manu-d3v3lop3r/manu-d3v3lop3r.github.io/security/advisories/new)
(the **Security → Report a vulnerability** tab of this repository).

You will receive an answer as soon as possible. Thank you for helping keep the
site safe.

## Security measures in place

- Strict Content Security Policy with SHA-256 hashes for every inline script
  and style; no third-party scripts, fonts or trackers.
- Self-hosted fonts and assets only; HTTPS enforced by GitHub Pages (HSTS).
- Dependencies installed from the lockfile, monitored weekly by Dependabot.
- GitHub Actions pinned to full commit SHAs, with least-privilege permissions.
- No secrets are required to build or deploy the site.
