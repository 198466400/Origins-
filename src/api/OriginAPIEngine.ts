// ORIGIN — Public API Engine

import { OriginEngine } from "../origin/OriginEngine"
import { ApiResponse, CycleSummary } from "./types"
import { OriginAPI } from "./interfaces"

export class OriginAPIEngine implements OriginAPI {
  private lastCycle: CycleSummary | null = null

  constructor(private origin: OriginEngine) {}

  async start(): Promise<ApiResponse<null>> {
    try {
      this.origin.start()
      return { success: true }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  async stop(): Promise<ApiResponse<null>> {
    try {
      this.origin.stop()
      return { success: true }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  async runOnce(metadata?: Record<string, any>): Promise<ApiResponse<CycleSummary>> {
    try {
      const result = await this.origin["cycle"].runCycle(metadata)

      const summary: CycleSummary = {
        cycleId: result.cycleId,
        timestamp: result.timestamp,
        successRate: result.evaluation.successRate ?? 1,
        unintendedEffects: result.evaluation.unintendedEffects ?? []
      }

      this.lastCycle = summary
      return { success: true, data: summary }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  async getLastCycle(): Promise<ApiResponse<CycleSummary>> {
    if (!this.lastCycle) {
      return { success: false, error: "No cycles have been run yet" }
    }
    return { success: true, data: this.lastCycle }
  }

  async getStatus(): Promise<ApiResponse<{ running: boolean }>> {
    return { success: true, data: { running: (this.origin as any).running ?? false } }
  }
}
