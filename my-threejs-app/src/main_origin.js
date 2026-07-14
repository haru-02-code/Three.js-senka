import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
// Three.js 本体
import * as THREE from 'three';
// 個別クラスのインポート
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
// アドオン (例: OrbitControls)
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
addEventListener('pointerdown', (e) => {
  pointer.set((e.clientX/innerWidth)*2-1, -(e.clientY/innerHeight)*2+1);
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObjects(scene.children)[0];
  if (hit) hit.object.material.color.set('#22d3ee');
});
(function loop(){ controls.update(); renderer.render(scene,camera);
requestAnimationFrame(loop); })();
 

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`


setupCounter(document.querySelector('#counter'))
