document.addEventListener("DOMContentLoaded", function() {
  const aaa = document.getElementById('aaa');
  aaa.addEventListener("targetFound", (event) => {
	  console.log("target found");
    if(aaa.found) {
      return;
    }
    aaa.found = true;
    document.getElementById('loading').style.display = 'block';
    // aaa.innerHTML = `<a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.15 0.15 0.15" src="./bb.glb" animation-mixer></a-gltf-model>`;
    const gltfModel = document.createElement('a-gltf-model');
    gltfModel.setAttribute('rotation', '0 0 0');
    gltfModel.setAttribute('position', '0 0 0');
    gltfModel.setAttribute('scale', '0.15 0.15 0.15');
    gltfModel.setAttribute('src', './bb.glb');
    // gltfModel.setAttribute('animation-mixer', '');
    gltfModel.addEventListener('model-loaded', () => {
      document.getElementById('loading').style.display = 'none';
      console.log('Model loaded');
    });
    aaa.appendChild(gltfModel);
	});
});