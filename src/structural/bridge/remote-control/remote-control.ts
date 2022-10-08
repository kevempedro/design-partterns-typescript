import { DeviceImplementation } from "../device/device-implementation";

export class RemoteControl {
    constructor(protected deivce: DeviceImplementation) {}

    togglePower(): void {
        this.deivce.setPower(!this.deivce.getPower());

        console.log(`${this.deivce.getName()} power status: ${this.deivce.getPower()}`);
    }
}
