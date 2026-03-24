// ORIGIN — HTTP Adapter (Minimal)

import { OriginAPI } from "../../api/interfaces"

export class HTTPAdapter {
  constructor(private api: OriginAPI) {}

  async route(method: string, path: string, body: any = {}) {
    if (method === "POST" && path === "/start") return this.api.start(body)
    if (method === "POST" && path === "/stop") return this.api.stop(body)
    if (method === "POST" && path === "/run") return this.api.runOnce(body)
    if (method === "GET" && path === "/status") return this.api.getStatus()
    if (method === "GET" && path === "/last") return this.api.getLastCycle()

    return { success: false, error: "Unknown route" }
  }
}
