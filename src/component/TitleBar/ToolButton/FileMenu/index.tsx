import { getCurrentWindow } from "@tauri-apps/api/window";
import MenuButton from "../MenuButton";
import MenuContainer from "../MenuContainer";

export default function FileMenu({ parentHeight }: {
  parentHeight: Function;
}) {
  const appWindow = getCurrentWindow();

  return (
    <MenuContainer parentHeight={parentHeight}>
      <MenuButton
        name="New"
        onClick={() => { }}
      />
      <MenuButton
        name="Open"
        onClick={() => { }}
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