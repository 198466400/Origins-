// ORIGIN — Reflection Subsystem Types

export type Insight = {
  id: string
  source: string
  timestamp: number
  pattern: string | null
  causality: string[] | null
  semantic: string
  confidence: number
  metadata: Record<string, any>
}

export type ReflectionResult = {
  id: string
  insightId: string
  alignment: AlignmentResult
  drift: DriftResult
  impact: ImpactResult
  confidence: ConfidenceResult
  philosophy: PhilosophyResult
  timestamp: number
}

export type AlignmentResult = {
  aligned: boolean
  reasons: string[]
  violatedConstraints: string[]
}

export type DriftResult = {
  drifting: boolean
  severity: "none" | "low" | "medium" | "high"
  baselineDelta: number
}

export type ImpactResult = {
  level: "none" | "low" | "moderate" | "significant" | "critical"
  affectedSubsystems: string[]
  rationale: string[]
}

export type ConfidenceResult = {
  overall: number
  signalQuality: number
  interpretationStability: number
  ambiguity: number
}

export type PhilosophyResult = {
  alignedWithPrinciples: boolean
  supportingPrinciples: string[]
  conflictingPrinciples: string[]
  notes: string[]
}
