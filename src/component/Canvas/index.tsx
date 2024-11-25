import { onMount } from "solid-js";

export default function Canvas() {
  let ref: undefined | HTMLCanvasElement;
  onMount(() => {
    if (ref) {
      // Disable context menu
      ref.oncontextmenu = (e) => e.preventDefault();
    }
  });

  return (
    <canvas
      ref={ref}
      class="w-full h-full"
    ></canvas>
  )
}