use tauri::AppHandle;
use tauri_plugin_dialog::{DialogExt, FilePath};

#[tauri::command]
pub async fn open_file(app: AppHandle) -> Option<FilePath> {
    app.dialog().file().blocking_pick_file()
}

#[tauri::command]
pub async fn open_folder(app: AppHandle) -> Option<FilePath> {
    app.dialog().file().blocking_pick_folder()
}