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

  // Handle mouse down
  const [draggingBlock, setDraggingBlock] = createSignal("");
  const handleMouseDown = (e: MouseEvent) => {
    if (ref) {
      const canvasRect = ref.getBoundingClientRect();
      const mouseX = e.clientX - canvasRect.left;
      const mouseY = e.clientY - canvasRect.top;

      const codeBlock = canvasData().find(
        (cb) =>
          mouseX > cb.position.x
          && mouseX < cb.position.x + cb.dimension.x
          && mouseY > cb.position.y
          && mouseY < cb.position.y + cb.dimension.y
      );
      if (codeBlock) setDraggingBlock(codeBlock.id);
    }
  };

  // Handle mouse up
  const handleMouseUp = () => setDraggingBlock("");

  // Snap to grid
  const snapToGrid = ({ x, y }: { x: number; y: number }) => {
    return {
      x: Math.round(x / gridSize()) * gridSize(),
      y: Math.round(y / gridSize()) * gridSize(),
    };
  };

  // Handle mouse move (dragging)
  const handleMouseMove = (e: MouseEvent) => {
    if (!draggingBlock()) return;

    if (ref) {
      const canvasRect = ref.getBoundingClientRect();
      const mouseX = e.clientX - canvasRect.left;
      const mouseY = e.clientY - canvasRect.top;
      const newPosition = snapToGrid({ x: mouseX, y: mouseY });

      setCanvasData(canvasData().map((cb) => {
        if (cb.id === draggingBlock()) {
          return {
            ...cb, position: {
              x: newPosition.x - cb.dimension.x / 2,
              y: newPosition.y - cb.dimension.y / 2
            }
          };
        }
        return cb;
      }));
    }
  };

  return (
    <canvas
      ref={ref}
      width={dimension().width}
      height={dimension().height}
      onMouseDown={e => handleMouseDown(e)}
      onMouseUp={() => handleMouseUp()}
      onMouseMove={e => handleMouseMove(e)}
    ></canvas>
  )
}