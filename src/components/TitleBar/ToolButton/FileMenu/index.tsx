import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { Setter } from "solid-js";
import MenuButton from "../MenuButton";
import MenuContainer from "../MenuContainer";

export default function FileMenu({
  parentHeight,
  setNav,
  setActiveTool,
  setFolderPath,
  resetCanvas
}: {
  parentHeight: () => number;
  setNav: Setter<null | "canvas" | "code" | "profiler">;
  setActiveTool: Setter<null | "file" | "edit" | "run" | "help">;
  setFolderPath: Setter<null | string>;
  resetCanvas: () => () => void;
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
          const path = await invoke("open_file") as string;
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
          const path = await invoke("open_folder") as string;
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
          resetCanvas()();
        }}
      />
      <MenuButton
        name="Exit"
        onClick={() => appWindow.close()}
      />
    </MenuContainer>
  )
}