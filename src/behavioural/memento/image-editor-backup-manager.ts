import { Memento } from "./memento";
import { ImageEditor } from "./image-editor";

export class ImageEditorBackupManager {
    private mementos: Memento[] = [];

    constructor(private readonly imageEditor: ImageEditor) {}

    backup(): void {
        console.log('Backup: salvando o estado de ImageEditor...');
        this.mementos.push(this.imageEditor.save());
    }

    undo(): void {
        const memento = this.mementos.pop();

        if (!memento) {
            console.log('Nenhum backup a ser restaurado!');
            return;
        }

        this.imageEditor.restore(memento);

        console.log(`Backup: ${memento.getName()} foi restaurado com sucesso.`);
    }

    showMementos(): void {
        for (const memento of this.mementos) {
            console.log(memento);
        }
    }
}
