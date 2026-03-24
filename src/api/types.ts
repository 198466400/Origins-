// ORIGIN — Public API Types

export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
}

export type CycleSummary = {
  cycleId: string
  timestamp: number
  successRate: number
  unintendedEffects: string[]
}

export type StartRequest = {
  metadata?: Record<string, any>
}

export type StopRequest = {
  reason?: string
}
