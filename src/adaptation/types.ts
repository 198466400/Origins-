// ORIGIN — Adaptation Subsystem Types

export type ReflectionResult = {
  id: string
  insightId: string
  alignment: any
  drift: any
  impact: any
  confidence: any
  philosophy: any
  timestamp: number
}

export type AdaptationPlan = {
  id: string
  reflectionId: string
  actions: AdaptationAction[]
  priority: "low" | "medium" | "high" | "critical"
  rationale: string[]
  timestamp: number
}

export type AdaptationAction = {
  type: string                // e.g., "adjust_config", "notify_user", "reassess", "log"
  target: string              // subsystem or component
  parameters: Record<string, any>
  reversible: boolean
}
