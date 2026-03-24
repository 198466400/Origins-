# ORIGIN — Bootstrap Layer

The Bootstrap Layer initializes the entire ORIGIN system.

It:
- builds dependencies
- wires subsystems together
- creates the OriginEngine
- exposes the Public API
- starts the introspection cycle

This is the system's entrypoint and the only file that should be executed directly.
