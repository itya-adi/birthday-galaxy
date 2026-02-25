import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./index.css";

export default function App() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000011);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 100;

    function createStarLayer(count, size, spread, colorArray) {
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];

      for (let i = 0; i < count; i++) {
        positions.push(
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread
        );

        const randomColor =
          colorArray[Math.floor(Math.random() * colorArray.length)];
        const color = new THREE.Color(randomColor);
        colors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );

      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const material = new THREE.PointsMaterial({
        size: size,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      return new THREE.Points(geometry, material);
    }

    // 🌌 Deep background stars
    const deepStars = createStarLayer(
      8000,
      0.4,
      1500,
      ["#4c6fff", "#8f00ff", "#ffffff"]
    );
    scene.add(deepStars);

    // ✨ Mid layer
    const midStars = createStarLayer(
      4000,
      1,
      800,
      ["#ffffff", "#6ad1ff"]
    );
    scene.add(midStars);

    // 🌠 Foreground layer
    const closeStars = createStarLayer(
      1500,
      2,
      400,
      ["#ffffff"]
    );
    scene.add(closeStars);

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
      requestAnimationFrame(animate);

      deepStars.rotation.y += 0.0003;
      midStars.rotation.y += 0.0006;
      closeStars.rotation.y += 0.001;
      deepStars.material.size = 0.4 + Math.sin(Date.now() * 0.001) * 0.05;
midStars.material.size = 1 + Math.sin(Date.now() * 0.0015) * 0.1;

      camera.position.x += (mouseX * 30 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 15 - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
  renderer.dispose();
};
  }, []);

  return (
    <div>
      <div ref={mountRef} className="galaxy" />

      <section className="hero">
        <h1 className="title">Happy Birthday Gurlie</h1>
        <p className="subtitle">
          Thankyou for stepping into my life
        </p>
      </section>

      <section className="section">
        <h2>Another Year. Another Level. 🎮</h2>
      </section>

      <section className="section">
        <h2>Keep Shining Brighter Than Stars ✨</h2>
      </section>
    </div>
  );
}