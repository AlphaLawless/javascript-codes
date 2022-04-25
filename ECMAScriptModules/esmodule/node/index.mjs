// import CurrencyManager from "../shared/currencyManager.mjs";
import CurrencyManager from "shared/currencyManager";

async function updateOutput(value) {
  const { pathname: currencyManager } = new URL(import.meta.url);
  const mymodule = await import(currencyManager);
  console.log("mymodule", mymodule);
  console.log(value);
}

const inputMonitor = (value) => updateOutput(CurrencyManager.format(value));

const input = process.openStdin();
console.log("typing... ");
input.addListener("data", inputMonitor);
