import "@fortawesome/fontawesome-free/css/all.css";
import { createSignal, Match, Switch } from "solid-js";
import "./App.css";
import NavBar from "./component/NavBar";
import TitleBar from "./component/TitleBar";

function App() {
  // const [greetMsg, setGreetMsg] = createSignal("");
  // const [name, setName] = createSignal("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name: name() }));
  // }

  const [nav, setNav] = createSignal<"code" | "canvas" | "profiler">("code");

  return (
    <main class="grid grid-rows-[auto_1fr] h-screen">
      <TitleBar />
      <div class="grid grid-cols-[4rem_1fr]">
        <NavBar nav={nav} setNav={setNav} />
        <Switch fallback={<div>404</div>}>
          <Match when={nav() === "code"}>
            <div>Code</div>
          </Match>
          <Match when={nav() === "canvas"}>
            <div>Canvas</div>
          </Match>
          <Match when={nav() === "profiler"}>
            <div>Profiler</div>
          </Match>
        </Switch>
      </div>
    </main>
  );
}

export default App;
