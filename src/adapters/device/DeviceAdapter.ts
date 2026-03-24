// ORIGIN — Device Adapter
// For local-first companion devices (audio-only, offline)

import { OriginAPI } from "../../api/interfaces"

export class DeviceAdapter {
  constructor(private api: OriginAPI) {}

  async onButtonPress() {
    return this.api.runOnce({ triggeredBy: "device_button" })
  }

  async onWakeWord() {
    return this.api.runOnce({ triggeredBy: "wake_word" })
  }

  async getStatusLight() {
    const status = await this.api.getStatus()
    return status.success && status.data?.running ? "green" : "red"
  }
}
