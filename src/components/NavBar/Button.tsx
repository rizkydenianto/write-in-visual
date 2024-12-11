import { createSignal, Match, onMount, Switch } from "solid-js";

export default function Button({
  children,
  id,
  onClick,
  nav
}: {
  children: any;
  id: string;
  onClick: () => void;
  nav: () => null | "canvas" | "code" | "profiler";
}) {
  // Set the height of the button from the width
  let ref: undefined | HTMLDivElement;
  const [height, setHeight] = createSignal(0);
  onMount(() => { if (ref) setHeight(ref.clientWidth) });

  return (
    <Switch fallback={<div ref={ref}></div>}>
      <Match when={height() > 0}>
        <button
          class={`${nav() === id ? "bg-primary-hover" : ""}
          duration-200 hover:bg-primary-hover`}
          style={{ height: height() + "px" }}
          onClick={() => onClick()}
        >{children}</button>
      </Match>
    </Switch>
  )
}