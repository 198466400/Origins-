// ORIGIN — Evaluation Loop Types

export type ExecutionResult = {
  id: string
  planId: string
  results: ActionExecutionResult[]
  timestamp: number
}

export type ActionExecutionResult = {
  action: {
    type: string
    target: string
    parameters: Record<string, any>
    reversible: boolean
  }
  success: boolean
  details: string
  reversible: boolean
}

export type EvaluationReport = {
  id: string
  executionId: string
  successRate: number
  unintendedEffects: string[]
  followUpRequired: boolean
  newSignals: Record<string, any>[]
  timestamp: number
}
