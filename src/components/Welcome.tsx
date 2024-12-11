import { invoke } from "@tauri-apps/api/core";
import { Setter } from "solid-js";

export default function Welcome({
  setNav,
  setFolderPath
}: {
  setNav: Setter<null | "canvas" | "code" | "profiler">;
  setFolderPath: Setter<null | string>;
}) {
  return (
    <div class="flex flex-col justify-center items-center gap-2 text-gray-400">
      <h1 class="text-2xl">Welcome</h1>
      <p class="text-sm">
        It looks like you don't have a project open right now.
      </p>
      <div class="flex items-center gap-8 mt-8 text-sm">
        <button
          class="px-6 py-3 bg-primary-background text-primary-text rounded"
          onClick={() => {
            setFolderPath("")
            setNav("canvas");
          }}
        >Create a new project</button>
        <p>or</p>
        <button
          class="px-6 py-3 bg-primary-background text-primary-text rounded"
          onClick={async () => {
            const path = await invoke("open_folder") as string;
            if (path) {
              setFolderPath(path);
              setNav("canvas");
            }
          }}
        >Open an existing one</button>
      </div>
    </div>
  )
}