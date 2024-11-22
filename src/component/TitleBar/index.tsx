import { getCurrentWindow } from "@tauri-apps/api/window";
import { createSignal, Match, onMount, Switch } from "solid-js";
import ToolButton from "./ToolButton";
import EditMenu from "./ToolButton/EditMenu";
import FileMenu from "./ToolButton/FileMenu";
import HelpMenu from "./ToolButton/HelpMenu";
import RunMenu from "./ToolButton/RunMenu";
import WindowButton from "./WindowButton";

/**
 * A component to render the title bar of the main window.
 *
 * It is a horizontal bar that contains a list of tool buttons and a list of
 * window control buttons. The tool buttons are on the left and the window
 * control buttons are on the right.
 *
 * The tool buttons are for the following commands:
 *
 * - File: Opens the file menu.
 * - Edit: Opens the edit menu.
 * - Run: Runs the code.
 * - Help: Opens the help menu.
 *
 * The window control buttons are for the following commands:
 *
 * - Minimize window: Minimizes the window.
 * - Maximize window: Maximizes or restores the window.
 * - Close window: Closes the window.
 */
export default function TitleBar({
  activeTool,
  setActiveTool
}: {
  activeTool: Function;
  setActiveTool: Function;
}) {
  const appWindow = getCurrentWindow();

  const [isMaximized, setIsMaximized] = createSignal(false);
  onMount(() => appWindow.onResized(async () => setIsMaximized(await appWindow.isMaximized())));

  let ref: undefined | HTMLDivElement;
  const [height, setHeight] = createSignal(0);
  onMount(() => { if (ref) setHeight(ref.clientHeight) });

  return (
    <div
      ref={ref}
      class="flex justify-between h-8 bg-primary-background text-primary-text"
      data-tauri-drag-region
    >
      <div class="grid grid-cols-4">
        <ToolButton
          name="File"
          onClick={() => setActiveTool("file")}
        >
          <Switch>
            <Match when={activeTool() === "file"}>
              <FileMenu parentHeight={height} />
            </Match>
          </Switch>
        </ToolButton>
        <ToolButton
          name="Edit"
          onClick={() => setActiveTool("edit")}
        >
          <Switch>
            <Match when={activeTool() === "edit"}>
              <EditMenu parentHeight={height} />
            </Match>
          </Switch>
        </ToolButton>
        <ToolButton
          name="Run"
          onClick={() => setActiveTool("run")}
        >
          <Switch>
            <Match when={activeTool() === "run"}>
              <RunMenu parentHeight={height} />
            </Match>
          </Switch>
        </ToolButton>
        <ToolButton
          name="Help"
          onClick={() => setActiveTool("help")}
        >
          <Switch>
            <Match when={activeTool() === "help"}>
              <HelpMenu parentHeight={height} />
            </Match>
          </Switch>
        </ToolButton>
      </div>
      <div class="grid grid-cols-3">
        <WindowButton
          name="_"
          onClick={() => appWindow.minimize()}
        >
          <i class="fa-solid fa-window-minimize"></i>
        </WindowButton>
        <WindowButton
          name="o"
          onClick={() => appWindow.toggleMaximize()}
        >
          <Switch>
            <Match when={isMaximized()}>
              <i class="fa-solid fa-window-restore"></i>
            </Match>
            <Match when={!isMaximized()}>
              <i class="fa-solid fa-window-maximize"></i>
            </Match>
          </Switch>
        </WindowButton>
        <WindowButton
          name="x"
          onClick={() => appWindow.close()}
        >
          <i class="fa-solid fa-xmark"></i>
        </WindowButton>
      </div>
    </div>
  )
}