// ORIGIN — Main Entrypoint

import { bootstrapOrigin } from "./Bootstrap"

const { api } = bootstrapOrigin({
  enableLogging: true,
  cycleIntervalMs: 2000,
  metadata: { source: "bootstrap" }
})

// Start ORIGIN automatically
api.start()
