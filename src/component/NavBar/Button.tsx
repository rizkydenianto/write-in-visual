import { createSignal, onMount } from "solid-js";

export default function Button({
  children,
  id,
  onClick,
  nav
}: {
  children: any;
  id: string;
  onClick: Function;
  nav: Function;
}) {
  // Set the height of the button from the width
  let ref: undefined | HTMLButtonElement;
  const [height, setHeight] = createSignal(0);
  onMount(() => { if (ref) setHeight(ref.clientWidth) });

  return (
    <button
      ref={ref}
      class={`${nav() === id ? "bg-primary-hover" : ""}
      duration-200 hover:bg-primary-hover`}
      style={{ height: height() + "px" }}
      onClick={() => onClick()}
    >{children}</button>
  )
}