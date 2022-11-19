import { ImageEditor } from "./image-editor";
import { ImageEditorBackupManager } from "./image-editor-backup-manager";

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

backupManager.backup();
imageEditor.convertFormatTo('svg');

console.log(imageEditor); // svg

backupManager.undo();
console.log(imageEditor); // jpg

backupManager.undo();
console.log(imageEditor); // gif

backupManager.undo();
console.log(imageEditor); // png

backupManager.undo(); // Nenhum backup restante
