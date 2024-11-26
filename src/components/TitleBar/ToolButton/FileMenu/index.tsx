import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import MenuButton from "../MenuButton";
import MenuContainer from "../MenuContainer";

export default function FileMenu({
  parentHeight,
  setNav,
  setActiveTool,
  setFolderPath
}: {
  parentHeight: Function;
  setNav: Function;
  setActiveTool: Function;
  setFolderPath: Function;
}) {
  const appWindow = getCurrentWindow();

  return (
    <MenuContainer parentHeight={parentHeight}>
      <MenuButton
        name="New"
        onClick={() => { }}
      />
      <MenuButton
        name="Open File"
        onClick={async () => {
          setActiveTool(null);
          const path = await invoke("open_file");
          if (path) {
            setFolderPath(path);
            setNav("code");
          }
        }}
      />
      <MenuButton
        name="Open Folder"
        onClick={async () => {
          setActiveTool(null);
          const path = await invoke("open_folder");
          if (path) {
            setFolderPath(path);
            setNav("code");
          }
        }}
      />
      <MenuButton
        name="Save"
        onClick={() => { }}
      />
      <MenuButton
        name="Save As"
        onClick={() => { }}
      />
      <MenuButton
        name="Close Folder"
        onClick={() => {
          setNav(null);
          setActiveTool(null);
          setFolderPath(null);
        }}
      />
      <MenuButton
        name="Exit"
        onClick={() => appWindow.close()}
      />
    </MenuContainer>
  )
}