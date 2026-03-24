// ORIGIN — Public API Interfaces

import { ApiResponse, CycleSummary, StartRequest, StopRequest } from "./types"

export interface OriginAPI {
  start(request?: StartRequest): Promise<ApiResponse<null>>
  stop(request?: StopRequest): Promise<ApiResponse<null>>
  runOnce(metadata?: Record<string, any>): Promise<ApiResponse<CycleSummary>>
  getLastCycle(): Promise<ApiResponse<CycleSummary>>
  getStatus(): Promise<ApiResponse<{ running: boolean }>>
}
