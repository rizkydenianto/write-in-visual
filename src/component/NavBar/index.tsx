import Button from "./Button";

export default function NavBar({
  nav,
  setNav,
  folderPath
}: {
  nav: Function;
  setNav: Function;
  folderPath: Function;
}) {
  return (
    <div class="flex flex-col bg-primary-background">
      <Button
        id="code"
        onClick={() => { if (folderPath()) setNav("code") }}
        nav={nav}
      >
        <i class="text-primary-text fa-solid fa-code"></i>
      </Button>
      <Button
        id="canvas"
        onClick={() => { if (folderPath()) setNav("canvas") }}
        nav={nav}
      >
        <i class="text-primary-text fa-solid fa-diagram-project"></i>
      </Button>
      <Button
        id="profiler"
        onClick={() => { if (folderPath()) setNav("profiler") }}
        nav={nav}
      >
        <i class="text-primary-text fa-solid fa-chart-gantt"></i>
      </Button>
    </div>
  )
}