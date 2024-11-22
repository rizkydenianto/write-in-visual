import { Match, onMount, Switch } from "solid-js";
import NavBar from "./component/NavBar";

export default function Content({
  nav,
  setNav,
  setActiveTool
}: {
  nav: Function;
  setNav: Function;
  setActiveTool: Function;
}) {
  let ref: undefined | HTMLDivElement;
  onMount(() => { if (ref) ref.addEventListener("click", () => setActiveTool(null)) });

  return (
    <div
      ref={ref}
      class="grid grid-cols-[3rem_1fr]"
    >
      <NavBar nav={nav} setNav={setNav} />
      <Switch fallback={<div>404</div>}>
        <Match when={nav() === "code"}>
          <div>Code</div>
        </Match>
        <Match when={nav() === "canvas"}>
          <div>Canvas</div>
        </Match>
        <Match when={nav() === "profiler"}>
          <div>Profiler</div>
        </Match>
      </Switch>
    </div>
  )
}