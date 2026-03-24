// ORIGIN — Cycle Controller Types

export type CycleContext = {
  cycleId: string
  timestamp: number
  metadata: Record<string, any>
}

export type CycleResult = {
  id: string
  cycleId: string
  awareness: any
  understanding: any
  reflection: any
  adaptation: any
  creation: any
  evaluation: any
  timestamp: number
}
