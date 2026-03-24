// ORIGIN — Reflection Component Interfaces

import {
  Insight,
  AlignmentResult,
  DriftResult,
  ImpactResult,
  ConfidenceResult,
  PhilosophyResult
} from "./types"

export interface AlignmentChecker {
  evaluate(insight: Insight): AlignmentResult
}

export interface DriftDetector {
  evaluate(insight: Insight): DriftResult
}

export interface ImpactAssessor {
  evaluate(insight: Insight): ImpactResult
}

export interface ConfidenceEvaluator {
  evaluate(insight: Insight): ConfidenceResult
}

export interface PhilosophicalMirror {
  evaluate(insight: Insight): PhilosophyResult
}
