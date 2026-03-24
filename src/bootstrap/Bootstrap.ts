// ORIGIN — Bootstrap

import { OriginEngine } from "../origin/OriginEngine"
import { OriginAPIEngine } from "../api/OriginAPIEngine"
import { buildDependencies } from "./DependencyBuilder"
import { OriginConfig } from "../origin/OriginConfig"

export function bootstrapOrigin(config: OriginConfig) {
  const deps = buildDependencies()
  const engine = new OriginEngine(config, deps)
  const api = new OriginAPIEngine(engine)

  return { engine, api }
}
