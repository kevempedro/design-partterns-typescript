import { DeviceImplementation } from "../device/device-implementation";
import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
    volumeUp(): void {
        const oldVolume = this.deivce.getVolume();

        this.deivce.setVolume(this.deivce.getVolume() + 10);

        console.log(`${this.deivce.getName()} tinha o volume ${oldVolume} agora tem ${this.deivce.getVolume()}`);
    }

    volumeDown(): void {
        const oldVolume = this.deivce.getVolume();

        this.deivce.setVolume(this.deivce.getVolume() - 10);

        console.log(`${this.deivce.getName()} tinha o volume ${oldVolume} agora tem ${this.deivce.getVolume()}`);
    }
}
