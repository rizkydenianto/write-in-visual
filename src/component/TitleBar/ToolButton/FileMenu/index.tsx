import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import MenuButton from "../MenuButton";
import MenuContainer from "../MenuContainer";

export default function FileMenu({
  parentHeight,
  setActiveTool
}: {
  parentHeight: Function;
  setActiveTool: Function;
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
        }}
      />
      <MenuButton
        name="Open Folder"
        onClick={async () => {
          setActiveTool(null);
          const path = await invoke("open_folder");
        }}
      />
      <MenuButton
        name="Save"
        onClick={() => { }}
      />
      <MenuButton
        name="Exit"
        onClick={() => appWindow.close()}
      />
    </MenuContainer>
  )
}