import { getCurrentWindow } from "@tauri-apps/api/window";
import ToolButton from "./ToolButton";
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
export default function TitleBar() {
  const appWindow = getCurrentWindow();

  return (
    <div
      class="flex justify-between h-8 bg-primary-background text-primary-text"
      data-tauri-drag-region
    >
      <div class="grid grid-cols-4">
        <ToolButton name="File" onClick={() => { }} />
        <ToolButton name="Edit" onClick={() => { }} />
        <ToolButton name="Run" onClick={() => { }} />
        <ToolButton name="Help" onClick={() => { }} />
      </div>
      <div class="grid grid-cols-3">
        <WindowButton
          name="_"
          onClick={() => appWindow.minimize()}
        />
        <WindowButton
          name="o"
          onClick={() => appWindow.toggleMaximize()}
        />
        <WindowButton
          name="x"
          onClick={() => appWindow.close()}
        />
      </div>
    </div>
  )
}