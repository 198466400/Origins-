// ORIGIN — Creation Engine

import {
  AdaptationPlan,
  ExecutionResult,
  ActionExecutionResult
} from "./types"

import {
  Executor,
  ReversibilityManager,
  SafetyGuard
} from "./interfaces"

export class CreationEngine {
  constructor(
    private executor: Executor,
    private reversibility: ReversibilityManager,
    private safety: SafetyGuard
  ) {}

  apply(plan: AdaptationPlan): ExecutionResult {
    const results: ActionExecutionResult[] = []

    for (const action of plan.actions) {
      // Safety first
      if (!this.safety.approve(action)) {
        results.push({
          action,
          success: false,
          details: "Action blocked by safety guard",
          reversible: false
        })
        continue
      }

      // Execute
      const result = this.executor.executeAction(action)
      results.push(result)

      // Track reversibility
      if (result.reversible) {
        this.reversibility.record(action, result)
      }
    }

    return {
      id: crypto.randomUUID(),
      planId: plan.id,
      results,
      timestamp: Date.now()
    }
  }
}
