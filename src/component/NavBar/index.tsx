import Button from "./Button";

export default function NavBar({
  nav,
  setNav
}: {
  nav: Function;
  setNav: Function;
}) {
  return (
    <div class="flex flex-col bg-primary-background">
      <Button
        id="code"
        onClick={() => setNav("code")}
        nav={nav}
      >
        <i class="text-primary-text fa-solid fa-code" />
      </Button>
      <Button
        id="canvas"
        onClick={() => setNav("canvas")}
        nav={nav}
      >
        <i class="text-primary-text fa-solid fa-diagram-project" />
      </Button>
      <Button
        id="profiler"
        onClick={() => setNav("profiler")}
        nav={nav}
      >
        <i class="text-primary-text fa-solid fa-chart-gantt" />
      </Button>
    </div>
  )
}