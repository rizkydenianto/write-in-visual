import { getCurrentWindow } from "@tauri-apps/api/window";
import { createSignal, onMount } from "solid-js";

export default function Canvas() {
  const appWindow = getCurrentWindow();

  let ref: undefined | HTMLCanvasElement;
  const [dimension, setDimension] = createSignal({ width: 0, height: 0 });
  onMount(() => {
    if (ref) {
      // Disable context menu
      ref.oncontextmenu = (e) => e.preventDefault();

      // Set canvas dimension
      appWindow.onResized(async () => {
        const windowSize = await appWindow.innerSize();
        setDimension({ width: windowSize.width, height: windowSize.height })
      });
    }
  });

  return (
    <canvas
      ref={ref}
      width={dimension().width}
      height={dimension().height}
    ></canvas>
  )
}