// ORIGIN — CLI Adapter

import { OriginAPI } from "../../api/interfaces"

export class CLIAdapter {
  constructor(private api: OriginAPI) {}

  async handle(command: string, args: string[] = []) {
    switch (command) {
      case "start":
        return this.api.start()

      case "stop":
        return this.api.stop()

      case "run":
        return this.api.runOnce()

      case "status":
        return this.api.getStatus()

      case "last":
        return this.api.getLastCycle()

      default:
        return { success: false, error: "Unknown command" }
    }
  }
}
