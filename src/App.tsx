import "@fortawesome/fontawesome-free/css/all.css";
import { createSignal } from "solid-js";
import "./App.css";
import Content from "./Content";
import TitleBar from "./components/TitleBar";

function App() {
  const [nav, setNav] = createSignal<null | "canvas" | "code" | "profiler">(null);
  const [activeTool, setActiveTool] = createSignal<null | "file" | "edit" | "run" | "help">(null);
  const [folderPath, setFolderPath] = createSignal<null | string>(null);
  const [resetCanvas, setResetCanvas] = createSignal(() => { });

  return (
    <main class="grid grid-rows-[auto_1fr] h-screen">
      <TitleBar
        setNav={setNav}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        setFolderPath={setFolderPath}
        resetCanvas={resetCanvas}
      />
      <Content
        nav={nav}
        setNav={setNav}
        setActiveTool={setActiveTool}
        folderPath={folderPath}
        setFolderPath={setFolderPath}
        setResetCanvas={setResetCanvas}
      />
    </main>
  );
}

export default App;
