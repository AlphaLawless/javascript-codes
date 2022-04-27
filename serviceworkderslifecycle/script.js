navigator.serviceWorker
  .register("/service-worker.js")
  .then((register) => console.log("SW registered!", register))
  .catch((err) => console.log("Xablau!", err));

setTimeout(() => {
  const img = new Image();
  img.src = "/image2.png";
  document.body.appendChild(img);
}, 3000);
