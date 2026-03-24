# ORIGIN — Adapters Layer

Adapters expose ORIGIN to different environments without modifying its core.

Included adapters:
- CLIAdapter: command-line interface
- HTTPAdapter: REST-style interface
- DeviceAdapter: local-first companion device integration
- EventAdapter: event-driven integration

Adapters must:
- never contain logic
- never bypass the Public API
- never access internal subsystems directly

They are pure translation layers.
