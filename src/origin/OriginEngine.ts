// ORIGIN — Root Engine

import { OriginConfig } from "./OriginConfig"
import { OriginDependencies } from "./OriginDependencies"
import { CycleController } from "../cycle/CycleController"

export class OriginEngine {
  private cycle: CycleController
  private running = false

  constructor(
    private config: OriginConfig,
    private deps: OriginDependencies
  ) {
    this.cycle = new CycleController(
      deps.awareness,
      deps.understanding,
      deps.reflection,
      deps.adaptation,
      deps.creation,
      deps.evaluation,
      deps.logger
    )
  }

  async start() {
    if (this.running) return
    this.running = true

    while (this.running) {
      await this.cycle.runCycle(this.config.metadata)
      await this.sleep(this.config.cycleIntervalMs)
    }
  }

  stop() {
    this.running = false
  }

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
