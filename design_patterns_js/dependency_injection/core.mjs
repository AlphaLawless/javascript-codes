import createDatabaseConnection from './database.mjs';
import createWebserver from './webserver.mjs';

function createCore() {
  const database = createDatabaseConnection();
  const webserver = createWebserver();

  function start() {
    console.log('> [core] Starting..');
    database.start();
    webserver.start();
    console.log('> [core] Starting done! System running!');
  }

  function stop() {
    console.log('> [core] Stopping..');
    webserver.stop();
    database.stop();
    console.log('> [core] Stopping done!');
  } 

  // Aqui em vez de criar um objeto aqui em cima (diferente da factory.js)
  // Resolvemos criar um objeto com as propriedades que vão ficar públicas
  // somente no final no return.
  return {
    start,
    stop
  }
}

export default createCore;
