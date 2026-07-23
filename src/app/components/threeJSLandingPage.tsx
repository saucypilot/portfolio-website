"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Room() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0a0a");

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(4, 6, 0.2);
    camera.lookAt(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 0, 0);
    controls.minDistance = 3.5;
    controls.maxDistance = 11;
    controls.minPolarAngle = Math.PI * 0.18;
    controls.maxPolarAngle = Math.PI * 0.72;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "/threejsModels/gaming_setup_v2_low-poly.glb",
      function (gltf: GLTF) {
        scene.add(gltf.scene);
        setStatus("ready");
      },
      undefined,
      function (error: unknown) {
        console.error(error);
        setStatus("error");
      }
    );

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    let animationFrameId: number;
    let isVisible = true;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (isVisible) {
        controls.update();
        renderer.render(scene, camera);
      }
    }
    animate();

    const handleResize = () => {
      if (!container) return;

      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "120px" },
    );
    visibilityObserver.observe(container);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
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
      className="roomCanvas"
      role="img"
      aria-label="Interactive 3D model of Irian's creative workspace. Drag to rotate and scroll to zoom."
    >
      {status !== "ready" && (
        <span className="roomStatus" role="status">
          {status === "loading" ? "Loading interactive workspace…" : "3D preview unavailable"}
        </span>
      )}
    </div>
  );
}
