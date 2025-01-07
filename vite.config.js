import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  //  base:'/vite'
});
// export default defineConfig(({ command, mode, ssrBuild }) => {
//   console.log(command, mode, !!ssrBuild);
//   if (mode === "production") {
//     return {
//       base: "/vite/",
//     };
//   }
//   return {};
// });

// export default defineConfig(({ command, mode, ssrBuild }) => {
//   const env = loadEnv(mode, process.cwd(), "VITE_");
//   console.log(env);

//   return {};
// });

// export default defineConfig({
//   clearScreen: false,
//   envPrefix:'APP_'
// });
