// ORIGIN — Cycle Controller

import { CycleContext, CycleResult } from "./types"

import {
  AwarenessModule,
  UnderstandingModule,
  ReflectionModule,
  AdaptationModule,
  CreationModule,
  EvaluationModule,
  Logger
} from "./interfaces"

export class CycleController {
  constructor(
    private awareness: AwarenessModule,
    private understanding: UnderstandingModule,
    private reflection: ReflectionModule,
    private adaptation: AdaptationModule,
    private creation: CreationModule,
    private evaluation: EvaluationModule,
    private logger: Logger
  ) {}

  async runCycle(metadata: Record<string, any> = {}): Promise<CycleResult> {
    const context: CycleContext = {
      cycleId: crypto.randomUUID(),
      timestamp: Date.now(),
      metadata
    }

    const awareness = await this.awareness.observe(context)
    const understanding = await this.understanding.interpret(awareness)
    const reflection = await this.reflection.reflect(understanding)
    const adaptation = await this.adaptation.adapt(reflection)
    const creation = await this.creation.apply(adaptation)
    const evaluation = await this.evaluation.evaluate(creation)

    const result: CycleResult = {
      id: crypto.randomUUID(),
      cycleId: context.cycleId,
      awareness,
      understanding,
      reflection,
      adaptation,
      creation,
      evaluation,
      timestamp: Date.now()
    }

    this.logger.log(result)
    return result
  }
}
