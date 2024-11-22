// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[cfg_attr(mobile, tauri::mobile_entry_point)]
use title_bar::file_menu::{open_file, open_folder};

mod title_bar;

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![open_file, open_folder])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
