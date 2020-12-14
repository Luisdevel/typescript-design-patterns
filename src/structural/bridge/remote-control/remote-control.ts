import { DeviceImplementaion } from '../device/device-implementation';

export class RemoteControl {
  constructor(protected device: DeviceImplementaion) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`,
    );
  }
}
