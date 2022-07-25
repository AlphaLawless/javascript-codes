import createCore from "./core.js";

const core = createCore();

try {
  core.start();
  core.stop();
} catch (error) {
  console.log('[index] Uncaught error!');
  console.log(error);
}


