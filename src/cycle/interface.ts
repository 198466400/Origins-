// ORIGIN — Cycle Controller Interfaces

import { CycleContext, CycleResult } from "./types"

export interface AwarenessModule {
  observe(context: CycleContext): any
}

export interface UnderstandingModule {
  interpret(signal: any): any
}

export interface ReflectionModule {
  reflect(understanding: any): any
}

export interface AdaptationModule {
  adapt(reflection: any): any
}

export interface CreationModule {
  apply(plan: any): any
}

export interface EvaluationModule {
  evaluate(execution: any): any
}

export interface Logger {
  log(result: CycleResult): void
}
