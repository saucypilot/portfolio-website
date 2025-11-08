"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Room() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0a0a");

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(4, 6, 0.2);
    camera.lookAt(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // For smoother controls
    controls.dampingFactor = 0.05;
    controls.target.set(0, 0, 0);

    // Desk
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "/threejsModels/gaming_setup_v2_low-poly.glb",
      function (gltf: GLTF) {
        scene.add(gltf.scene);
      },
      undefined,
      function (error: unknown) {
        console.error(error);
      }
    );

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Animation loop
    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      controls.update(); // Important for damping to work!
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      gltfLoader.manager = new THREE.LoadingManager();
      renderer.forceContextLoss();

    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "70vh", position: "relative" }}
    />
  );
}
