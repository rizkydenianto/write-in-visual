import CodeBlock from "./CodeBlock";
import End from "./End";
import Start from "./Start";

export default function CodeBlockContainer() {
  const getParentDimension = (el: SVGSVGElement) => {
    return {
      x: el.parentElement!.clientWidth,
      y: el.parentElement!.clientWidth / 2
    }
  };

  return (
    <div class="flex flex-col gap-0.5 bg-primary-background border-l-2 border-primary-background">
      <CodeBlock onClick={() => { }}><Start getParentDimension={getParentDimension} /></CodeBlock>
      <CodeBlock onClick={() => { }}><End getParentDimension={getParentDimension} /></CodeBlock>
    </div>
  )
}