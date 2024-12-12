import { getCurrentWindow } from "@tauri-apps/api/window";
import { createEffect, createSignal, onMount, Setter } from "solid-js";

export default function Canvas({
  codeBlockData,
  canvasData,
  setCanvasData
}: {
  codeBlockData: () => {
    [_: string]: {
      "path": string;
      "change": boolean
    }
  };
  canvasData: () => {
    "id": string;
    "code-block-id": string;
    position: { x: number; y: number };
    dimension: { x: number; y: number };
  }[];
  setCanvasData: Setter<{
    "id": string;
    "code-block-id": string;
    position: { x: number; y: number };
    dimension: { x: number; y: number };
  }[]>;
}) {
  const appWindow = getCurrentWindow();

  let ref: undefined | HTMLCanvasElement;
  let ctx: undefined | CanvasRenderingContext2D;
  const [dimension, setDimension] = createSignal({ width: 0, height: 0 });
  const [gridSize, setGridSize] = createSignal(50);
  onMount(() => {
    if (ref) {
      // Disable context menu
      ref.oncontextmenu = (e) => e.preventDefault();

      // Set canvas context
      ctx = ref.getContext("2d")!;

      // Set canvas dimension
      const setCanvasDimension = async () => {
        const windowSize = await appWindow.innerSize();
        setDimension({ width: windowSize.width, height: windowSize.height })
      };
      setCanvasDimension();
      appWindow.onResized(async () => setCanvasDimension());
    }
  });

  // Draw grid
  const drawGrid = () => {
    if (ctx) {
      ctx.clearRect(0, 0, dimension().width, dimension().height);
      ctx.beginPath();
      for (let x = 0; x < dimension().width; x += gridSize()) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimension().height);
      }
      for (let y = 0; y < dimension().height; y += gridSize()) {
        ctx.moveTo(0, y);
        ctx.lineTo(dimension().width, y);
      }
      ctx.strokeStyle = "#ddd";
      ctx.stroke();
    }
  };

  createEffect(() => {
    drawGrid();

    // Render code block
    for (const codeBlock of canvasData()) {
      if (ctx) {
        ctx.fillStyle = "#aaa";
        ctx.fillRect(codeBlock.position.x, codeBlock.position.y, codeBlock.dimension.x, codeBlock.dimension.y);
      }
    }
  });

  return (
    <canvas
      ref={ref}
      class="w-full h-full"
      width={dimension().width}
      height={dimension().height}
    ></canvas>
  )
}