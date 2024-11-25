import { Match, onMount, Switch } from "solid-js";
import Canvas from "./component/Canvas";
import Code from "./component/Code";
import NavBar from "./component/NavBar";
import Welcome from "./component/Welcome";

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
          <Canvas />
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