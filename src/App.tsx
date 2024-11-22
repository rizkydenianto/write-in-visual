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

  const [nav, setNav] = createSignal<"code" | "canvas" | "profiler">("code");
  const [activeTool, setActiveTool] = createSignal<null | "file" | "edit" | "run" | "help">(null);

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
      />
    </main>
  );
}

export default App;
