(() => {
  // scene camera renderer - 3 musts!

  const canvas = document.querySelector("#canvas");

  const fov = 50;
  const aspect = canvas.clientWidth / canvas.clientHeight;
  const near = 0.1; // default
  const far = 2000; // default

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 1;

  const renderer = new THREE.WebGLRenderer({ canvas });
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height);

  new THREE.OrbitControls(camera, canvas);

  const scene = new THREE.Scene();
  const loader = new THREE.TextureLoader();
  const texture = loader.load(
    "https://threejs.org/manual/examples/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg",
    () => {
      const rectangle = new THREE.WebGLCubeRenderTarget(texture.image.height);
      rectangle.fromEquirectangularTexture(renderer, texture);
      scene.background = rectangle.texture;
    }
  );

  function render() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height, false);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
})();
