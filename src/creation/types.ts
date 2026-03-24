// ORIGIN — Creation Subsystem Types

export type AdaptationPlan = {
  id: string
  reflectionId: string
  actions: AdaptationAction[]
  priority: "low" | "medium" | "high" | "critical"
  rationale: string[]
  timestamp: number
}

export type AdaptationAction = {
  type: string
  target: string
  parameters: Record<string, any>
  reversible: boolean
}

export type ExecutionResult = {
  id: string
  planId: string
  results: ActionExecutionResult[]
  timestamp: number
}

export type ActionExecutionResult = {
  action: AdaptationAction
  success: boolean
  details: string
  reversible: boolean
}
