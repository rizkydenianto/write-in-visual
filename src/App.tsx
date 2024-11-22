import "@fortawesome/fontawesome-free/css/all.css";
import { createSignal } from "solid-js";
import "./App.css";
import TitleBar from "./component/TitleBar";
import Content from "./Content";

function App() {
  // const [greetMsg, setGreetMsg] = createSignal("");
  // const [name, setName] = createSignal("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name: name() }));
  // }

  const [nav, setNav] = createSignal<null | "code" | "canvas" | "profiler">(null);
  const [activeTool, setActiveTool] = createSignal<null | "file" | "edit" | "run" | "help">(null);
  const [project, setProject] = createSignal<null | string>(null);

  return (
    <main class="grid grid-rows-[auto_1fr] h-screen">
      <TitleBar
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />
      <Content
        nav={nav}
        setNav={setNav}
        setActiveTool={setActiveTool}
        project={project}
      />
    </main>
  );
}

export default App;
