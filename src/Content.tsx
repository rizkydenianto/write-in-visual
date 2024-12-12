import { createSignal, Match, onMount, Setter, Switch } from "solid-js";
import { v4 as uuidv4 } from "uuid";
import Canvas from "./components/Canvas";
import Code from "./components/Code";
import CodeBlockContainer from "./components/CodeBlockContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

export default function Content({
  nav,
  setNav,
  setActiveTool,
  folderPath,
  setFolderPath
}: {
  nav: () => null | "canvas" | "code" | "profiler";
  setNav: Setter<null | "canvas" | "code" | "profiler">;
  setActiveTool: Setter<null | "file" | "edit" | "run" | "help">;
  folderPath: () => null | string;
  setFolderPath: Setter<null | string>;
}) {
  let ref: undefined | HTMLDivElement;
  onMount(() => { if (ref) ref.onclick = () => setActiveTool(null) });

  // Code block data
  const [codeBlockData, setCodeBlockData] = createSignal<{
    [_: string]: {
      "path": string;
      "change": boolean;
    }
  }>({
    "start": { "path": "", "change": false },
    "end": { "path": "", "change": false }
  });

  // Canvas data
  const [canvasData, setCanvasData] = createSignal<{
    "id": string;
    "code-block-id": string;
    position: { x: number; y: number };
    dimension: { x: number; y: number };
  }[]>([{ "id": uuidv4(), "code-block-id": "start", position: { x: 0, y: 0 }, dimension: { x: 100, y: 100 } }]);

  return (
    <div
      ref={ref}
      class="grid grid-cols-[3rem_1fr]"
    >
      <NavBar
        nav={nav}
        setNav={setNav}
        folderPath={folderPath}
      />
      <Switch fallback={<Welcome setNav={setNav} setFolderPath={setFolderPath} />}>
        <Match when={nav() === "canvas"}>
          <div class="grid grid-cols-[1fr_8rem]">
            <Canvas
              codeBlockData={codeBlockData}
              canvasData={canvasData}
              setCanvasData={setCanvasData}
            />
            <CodeBlockContainer setCanvasData={setCanvasData} />
          </div>
        </Match>
        <Match when={nav() === "code"}>
          <Code />
        </Match>
        <Match when={nav() === "profiler"}>
          <div>Profiler</div>
        </Match>
      </Switch>
    </div>
  )
}