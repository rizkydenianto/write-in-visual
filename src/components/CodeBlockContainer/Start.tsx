import { createSignal, onMount } from "solid-js";

export default function Start({ getParentDimension }: { getParentDimension: (el: SVGSVGElement) => { x: number, y: number } }) {
  let ref: undefined | SVGSVGElement;
  const [dimension, setDimension] = createSignal({
    x: 0,
    y: 0
  });
  onMount(() => { if (ref) setDimension(getParentDimension(ref)) });

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={dimension().x}
      height={dimension().y}
    >
      <circle
        r={dimension().y / 2.5}
        cx={dimension().x / 2}
        cy={dimension().y / 2}
        fill="white"
        stroke="black"
        stroke-width={2}
      />
      <text
        x={dimension().x / 2}
        y={dimension().y / 2}
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="12px"
      >START</text>
    </svg>
  )
}