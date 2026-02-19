![Banner](https://raw.githubusercontent.com/ktmcp-cli/amentum/main/banner.svg)

> "Six months ago, everyone was talking about MCPs. And I was like, screw MCPs. Every MCP would be better as a CLI."
>
> — [Peter Steinberger](https://twitter.com/steipete), Founder of OpenClaw
> [Watch on YouTube (~2:39:00)](https://www.youtube.com/@lexfridman) | [Lex Fridman Podcast #491](https://lexfridman.com/peter-steinberger/)

# Atmosphere API CLI

> **⚠️ Unofficial CLI** - Not officially sponsored or affiliated with Atmosphere API.

A production-ready command-line interface for Atmosphere API — Instantly access empirical models of atmospheric density and  composition that are recommended by the Committee on Space Research (COSPAR) for  satellite drag calculations. <br><br>
API requests must 

## Features

- **Full API Access** — All endpoints accessible via CLI
- **JSON output** — All commands support `--json` for scripting
- **Colorized output** — Clean terminal output with chalk
- **Configuration management** — Store API keys securely

## Installation

```bash
npm install -g @ktmcp-cli/amentum
```

## Quick Start

```bash
# Configure API key
amentum config set --api-key YOUR_API_KEY

# Make an API call
amentum call

# Get help
amentum --help
```

## Commands

### Config

```bash
amentum config set --api-key <key>
amentum config set --base-url <url>
amentum config show
```

### API Calls

```bash
amentum call            # Make API call
amentum call --json     # JSON output
```

## JSON Output

All commands support `--json` for structured output.

## API Documentation

Base URL: ``

For full API documentation, visit the official docs.

## Why CLI > MCP?

No server to run. No protocol overhead. Just install and go.

- **Simpler** — Just a binary you call directly
- **Composable** — Pipe to `jq`, `grep`, `awk`
- **Scriptable** — Works in cron jobs, CI/CD, shell scripts

## License

MIT — Part of the [Kill The MCP](https://killthemcp.com) project.
