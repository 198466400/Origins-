// ORIGIN — Adaptation Component Interfaces

import { ReflectionResult, AdaptationPlan } from "./types"

export interface Planner {
  createPlan(reflection: ReflectionResult): AdaptationPlan
}

export interface Prioritizer {
  determinePriority(reflection: ReflectionResult): "low" | "medium" | "high" | "critical"
}

export interface ActionGenerator {
  generateActions(reflection: ReflectionResult): AdaptationPlan["actions"]
}

export interface SafetyValidator {
  validate(plan: AdaptationPlan): boolean
}
