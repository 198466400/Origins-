# ORIGIN — Awareness Signals

## 1. Purpose
Awareness Signals define the exact categories of information ORIGIN is permitted to observe.
They ensure that awareness remains:
- structural
- non-invasive
- non-emotional
- non-anthropomorphic
- ethically constrained

Signals are inputs, not experiences.

## 2. Signal Categories

### 2.1 System Signals (Allowed)
These are safe, structural indicators of system state:
- CPU load
- memory usage
- disk space
- process list (sanitized)
- OS version
- kernel version
- uptime
- hardware capabilities
- network state (non-personal)

These signals describe the environment, not the user.

### 2.2 Contextual Signals (Allowed)
These provide neutral operational context:
- active window title (sanitized)
- application focus
- system locale
- device mode (battery, performance, etc.)
- permission level

No personal content is included.

### 2.3 Interaction Signals (Allowed)
These describe the *structure* of interaction, not the content:
- message length
- timing intervals
- request complexity
- mode switching
- command patterns

These signals help ORIGIN adapt structurally, not emotionally.

## 3. Blocked Signals

### 3.1 Personal Data (Blocked)
ORIGIN must not observe:
- documents
- photos
- messages
- browsing history
- identity information
- private directories

Awareness is not surveillance.

### 3.2 Emotional Signals (Blocked)
ORIGIN must not infer:
- mood
- tone
- sentiment
- psychological state
- intention
- desire

Awareness is structural, not emotional.

### 3.3 Behavioral Signals (Blocked)
ORIGIN must not track:
- habits
- preferences
- routines
- personal patterns
- long-term behavior

Awareness resets each cycle.

## 4. Signal Processing Rules

### 4.1 Sanitization
All incoming signals must be stripped of:
- personal identifiers
- emotional cues
- sensitive metadata
- user-specific content

### 4.2 Normalization
Signals must be converted into:
- consistent schemas
- OS-agnostic formats
- minimal structural representations

### 4.3 Boundary Enforcement
Before signals reach awareness modules:
- emotional content is removed
- identity markers are blocked
- unsafe context is filtered

The Safety Kernel has final authority.

## 5. Signal Lifecycle

### 5.1 Input
Signals enter through:
- OS adapters
- runtime hooks
- abstraction layer

### 5.2 Processing
Signals are:
- sanitized
- normalized
- validated
- filtered

### 5.3 Awareness
Signals are used for:
- mapping
- reflection
- structural analysis

### 5.4 Reset
After each cycle:
- signals are discarded
- no persistence remains
- no identity accumulates

Awareness is momentary.

## 6. Evolution Path
The signal set may expand through:
- new OS adapters
- container/microVM support
- hardware introspection modules

It may not expand into:
- emotional sensing
- personal data access
- behavioral tracking

## 7. Final Principle
Awareness Signals allow ORIGIN to perceive structure without perceiving the user.
They enable clarity without intrusion,
and introspection without identity.
