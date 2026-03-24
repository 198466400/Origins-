// ORIGIN — Dependency Container

import { AwarenessModule } from "../cycle/interfaces"
import { UnderstandingModule } from "../cycle/interfaces"
import { ReflectionModule } from "../cycle/interfaces"
import { AdaptationModule } from "../cycle/interfaces"
import { CreationModule } from "../cycle/interfaces"
import { EvaluationModule } from "../cycle/interfaces"
import { Logger } from "../cycle/interfaces"

export type OriginDependencies = {
  awareness: AwarenessModule
  understanding: UnderstandingModule
  reflection: ReflectionModule
  adaptation: AdaptationModule
  creation: CreationModule
  evaluation: EvaluationModule
  logger: Logger
}
