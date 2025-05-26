"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function AnimatedBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.8,
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Create connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.1,
    });

    const linePositions: number[] = [];
    const positions = particlesGeometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      for (let j = i + 3; j < positions.length; j += 3) {
        const distance = Math.sqrt(
          Math.pow(positions[i] - positions[j], 2) +
            Math.pow(positions[i + 1] - positions[j + 1], 2) +
            Math.pow(positions[i + 2] - positions[j + 2], 2)
        );

        if (distance < 15) {
          linePositions.push(positions[i], positions[i + 1], positions[i + 2]);
          linePositions.push(positions[j], positions[j + 1], positions[j + 2]);
        }
      }
    }

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePositions), 3)
    );
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    camera.position.z = 30;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0008;
      lines.rotation.x += 0.0005;
      lines.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}
