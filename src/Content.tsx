import { Match, onMount, Switch } from "solid-js";
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
  nav: Function;
  setNav: Function;
  setActiveTool: Function;
  folderPath: Function;
  setFolderPath: Function;
}) {
  let ref: undefined | HTMLDivElement;
  onMount(() => { if (ref) ref.onclick = () => setActiveTool(null) });

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
            <Canvas />
            <CodeBlockContainer />
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