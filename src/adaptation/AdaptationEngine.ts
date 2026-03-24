// ORIGIN — Adaptation Engine

import {
  ReflectionResult,
  AdaptationPlan
} from "./types"

import {
  Planner,
  Prioritizer,
  ActionGenerator,
  SafetyValidator
} from "./interfaces"

export class AdaptationEngine {
  constructor(
    private planner: Planner,
    private prioritizer: Prioritizer,
    private actions: ActionGenerator,
    private safety: SafetyValidator
  ) {}

  adapt(reflection: ReflectionResult): AdaptationPlan {
    const plan: AdaptationPlan = this.planner.createPlan(reflection)

    plan.priority = this.prioritizer.determinePriority(reflection)
    plan.actions = this.actions.generateActions(reflection)

    const safe = this.safety.validate(plan)
    if (!safe) {
      throw new Error("Adaptation plan failed safety validation")
    }

    return plan
  }
}
