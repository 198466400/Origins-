// ORIGIN — Evaluation Engine

import {
  ExecutionResult,
  EvaluationReport
} from "./types"

import {
  OutcomeAnalyzer,
  SignalExtractor,
  FollowUpDecider,
  Reporter
} from "./interfaces"

export class EvaluationEngine {
  constructor(
    private analyzer: OutcomeAnalyzer,
    private extractor: SignalExtractor,
    private followUp: FollowUpDecider,
    private reporter: Reporter
  ) {}

  evaluate(execution: ExecutionResult): EvaluationReport {
    const { successRate, unintendedEffects } = this.analyzer.analyze(execution)
    const signals = this.extractor.extract(execution)
    const followUpRequired = this.followUp.requiresFollowUp(execution)

    return this.reporter.createReport(
      execution,
      successRate,
      unintendedEffects,
      followUpRequired,
      signals
    )
  }
}
