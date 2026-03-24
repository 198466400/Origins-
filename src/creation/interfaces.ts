// ORIGIN — Creation Component Interfaces

import {
  AdaptationPlan,
  ExecutionResult,
  AdaptationAction,
  ActionExecutionResult
} from "./types"

export interface Executor {
  executeAction(action: AdaptationAction): ActionExecutionResult
}

export interface ReversibilityManager {
  record(action: AdaptationAction, result: ActionExecutionResult): void
  canRevert(action: AdaptationAction): boolean
  revert(action: AdaptationAction): ActionExecutionResult
}

export interface SafetyGuard {
  approve(action: AdaptationAction): boolean
}
