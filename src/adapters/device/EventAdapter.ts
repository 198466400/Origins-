// ORIGIN — Event Adapter

import { OriginAPI } from "../../api/interfaces"

type Listener = (event: any) => void

export class EventAdapter {
  private listeners: Record<string, Listener[]> = {}

  constructor(private api: OriginAPI) {}

  on(event: string, listener: Listener) {
    if (!this.listeners[event]) this.listeners[event] = []
    this.listeners[event].push(listener)
  }

  emit(event: string, payload: any) {
    const group = this.listeners[event] || []
    for (const listener of group) listener(payload)
  }

  async triggerCycle(metadata: Record<string, any> = {}) {
    const result = await this.api.runOnce(metadata)
    this.emit("cycle", result)
    return result
  }
}
