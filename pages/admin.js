import React, { useEffect } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const Admin = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas.webgl");

    const scene = new THREE.Scene();
    let text;

    const textureLoader = new THREE.TextureLoader();
    const matcapTexture = textureLoader.load("/matcaps/4.png");
    const matcapTexture1 = textureLoader.load("/matcaps/3.png");

    const fontLoader = new FontLoader();

    fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
      const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });

      const textGeometry = new TextGeometry("TEMPLATE  EVENTS", {
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 4,
      });
      textGeometry.center();

      text = new THREE.Mesh(textGeometry, material);

      scene.add(text);
      const material1 = new THREE.MeshMatcapMaterial({
        matcap: matcapTexture1,
      });

      const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 32, 64);

      for (let i = 0; i < 150; i++) {
        const donut = new THREE.Mesh(donutGeometry, material1);
        donut.position.x = (Math.random() - 0.5) * 10;
        donut.position.y = (Math.random() - 0.5) * 10;
        donut.position.z = (Math.random() - 0.5) * 10;
        donut.rotation.x = Math.random() * Math.PI;
        donut.rotation.y = Math.random() * Math.PI;
        const scale = Math.random();
        donut.scale.set(scale, scale, scale);

        scene.add(donut);
      }
    });

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight - 100,
    };

    window.addEventListener("resize", () => {
      (sizes.width = window), innerWidth;
      sizes.height = window.innerHeight - 100;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    if (sizes.width < 500) {
      camera.position.z = 8;
    } else {
      camera.position.z = 2;
    }
    camera.rotation.y = 3.14 * 0.5;
    scene.add(camera);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      controls.update();

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();
  });
  return <canvas className="webgl w-fit md:w-full "></canvas>;
};

export default Admin;
