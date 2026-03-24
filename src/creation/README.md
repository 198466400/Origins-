# ORIGIN — Creation Subsystem

Creation executes adaptation plans.

It performs actions safely, reversibly, and transparently.

Creation does NOT generate plans.
It only executes them.

Components:
- Executor: performs actions
- ReversibilityManager: tracks and reverts changes
- SafetyGuard: enforces boundaries

Creation feeds into the next subsystem: Evaluation Loop.
