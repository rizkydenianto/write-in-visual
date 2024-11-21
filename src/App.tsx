import "./App.css";
import TitleBar from "./component/TitleBar";

function App() {
  // const [greetMsg, setGreetMsg] = createSignal("");
  // const [name, setName] = createSignal("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name: name() }));
  // }

  return (
    <main class="flex flex-col">
      <TitleBar />
    </main>
  );
}

export default App;
