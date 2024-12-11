import { Setter } from "solid-js";
import Button from "./Button";

export default function NavBar({
  nav,
  setNav,
  folderPath
}: {
  nav: () => null | "canvas" | "code" | "profiler";
  setNav: Setter<null | "canvas" | "code" | "profiler">;
  folderPath: () => null | string;
}) {
  return (
    <div class="flex flex-col bg-primary-background">
      <Button
        id="canvas"
        onClick={() => { if (folderPath() !== null) setNav("canvas") }}
        nav={nav}
      >
        <i class="text-primary-text fa-solid fa-diagram-project"></i>
      </Button>
      <Button
        id="code"
        onClick={() => { if (folderPath() !== null) setNav("code") }}
        nav={nav}
      >
        <i class="text-primary-text fa-solid fa-code"></i>
      </Button>
      <Button
        id="profiler"
        onClick={() => { if (folderPath() !== null) setNav("profiler") }}
        nav={nav}
      >
        <i class="text-primary-text fa-solid fa-chart-gantt"></i>
      </Button>
    </div>
  )
}