import "@fortawesome/fontawesome-free/css/all.css";
import { createSignal } from "solid-js";
import "./App.css";
import TitleBar from "./component/TitleBar";
import Content from "./Content";

function App() {
  const [nav, setNav] = createSignal<null | "code" | "canvas" | "profiler">(null);
  const [activeTool, setActiveTool] = createSignal<null | "file" | "edit" | "run" | "help">(null);
  const [folderPath, setFolderPath] = createSignal<null | string>(null);

  return (
    <main class="grid grid-rows-[auto_1fr] h-screen">
      <TitleBar
        setNav={setNav}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        setFolderPath={setFolderPath}
      />
      <Content
        nav={nav}
        setNav={setNav}
        setActiveTool={setActiveTool}
        folderPath={folderPath}
      />
    </main>
  );
}

export default App;
