# AGENT.md — Atmosphere API CLI for AI Agents

This document explains how to use the Atmosphere API CLI as an AI agent.

## Overview

The `amentum` CLI provides access to the Atmosphere API API.

## Prerequisites

```bash
amentum config set --api-key <key>
```

## All Commands

### Config

```bash
amentum config set --api-key <key>
amentum config set --base-url <url>
amentum config show
```

### API Calls

```bash
amentum call            # Make API call
amentum call --json     # JSON output for parsing
```

## Tips for Agents

1. Always use `--json` when parsing results programmatically
2. Check `amentum --help` for all available commands
3. Configure API key before making calls
