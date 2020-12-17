import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('bmp');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor); // jpg

backupManager.undo(); // bmp
console.log(imageEditor);

backupManager.undo(); // gif
console.log(imageEditor);

backupManager.undo(); // png
console.log(imageEditor);

backupManager.undo(); // no mementos
console.log(imageEditor);
