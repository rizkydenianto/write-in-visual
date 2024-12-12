import { Setter } from "solid-js";
import { v4 as uuidv4 } from "uuid";
import CodeBlock from "./CodeBlock";
import End from "./End";
import Start from "./Start";

export default function CodeBlockContainer({ setCanvasData }: {
  setCanvasData: Setter<{
    "id": string;
    "code-block-id": string;
    position: { x: number; y: number };
    dimension: { x: number; y: number };
  }[]>;
}) {
  const getParentDimension = (el: SVGSVGElement) => {
    return {
      x: el.parentElement!.clientWidth,
      y: el.parentElement!.clientWidth / 2
    }
  };

  return (
    <div class="flex flex-col gap-0.5 bg-primary-background border-l-2 border-primary-background">
      <CodeBlock onClick={() => { }}>
        <Start
          getParentDimension={getParentDimension}
          onClick={() => setCanvasData((prev) => [...prev, { "id": uuidv4(), "code-block-id": "start", position: { x: 0, y: 0 }, dimension: { x: 100, y: 100 } }])}
        />
      </CodeBlock>
      <CodeBlock onClick={() => { }}>
        <End
          getParentDimension={getParentDimension}
          onClick={() => setCanvasData((prev) => [...prev, { "id": uuidv4(), "code-block-id": "end", position: { x: 0, y: 0 }, dimension: { x: 100, y: 100 } }])}
        />
      </CodeBlock>
    </div>
  )
}