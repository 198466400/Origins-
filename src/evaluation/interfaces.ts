// ORIGIN — Evaluation Loop Interfaces

import { ExecutionResult, EvaluationReport } from "./types"

export interface OutcomeAnalyzer {
  analyze(result: ExecutionResult): {
    successRate: number
    unintendedEffects: string[]
  }
}

export interface SignalExtractor {
  extract(result: ExecutionResult): Record<string, any>[]
}

export interface FollowUpDecider {
  requiresFollowUp(result: ExecutionResult): boolean
}

export interface Reporter {
  createReport(
    execution: ExecutionResult,
    successRate: number,
    unintended: string[],
    followUp: boolean,
    signals: Record<string, any>[]
  ): EvaluationReport
}
