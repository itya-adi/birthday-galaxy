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
        <h1 className="title">HAPPIEST BIRTHDAY MY CUTIEE TWINNN💗💗</h1>
        <p className="subtitle">
          Thankyou for stepping into my life and making everything so so great!!
        </p>
        <p className="subtitle">
          SCROLL DOWN TO SEE THE OTHER STUFF⬇️
        </p>
      </section>

      <section className="my-para">
        <h3>Another Year. Another year of memories. Another great year of our dumb ideotic ideas and our endless videocalls where we just sit and talk about basically everythingg but sensible shittttt!! But ek baar un memories ko rewatch krle?? (Mostly teri hi kharab photos but some of oursss tooo)</h3>
      </section>

      <section className="photo-card">
        <img className="Images" src="/mehak1.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak2.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak3.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak4.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak5.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak6.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak7.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak8.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak9.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak10.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak11.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak12.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak13.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak14.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak15.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak16.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak17.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak18.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak19.jpeg"></img>
      </section>
      <section className="photo-card">
        <img className="Images" src="/mehak20.jpeg"></img>
      </section>

      <section className="my-para-2">
        <h2>Nowww, to end thiss, i wrote something for youu.</h2>
        <h2> First, as your brother, I wanna say..</h2>
        <h4>I know mai tujhe kaafi bully krta hu kayi baar and i say a lot of mean things to you as well but behind all that theres something you should always keep in mind, you'll always be my sister, and ill always love you a lot, more than any girlfriend probably(but bike se zyada nahi, never, you cant compete with that love of my life) but even then, tu behen meri hamesha rahegi and you'll always stay special to me. Jitna i care about akshu, utna hi I care about you as well, you're literally like my real sister, and i wish tu sach me hoti, i wish we were actually twins where i could ust wake up every single day and annoy you bohot zyada to the point tu ro de but even tho I bully you so much, its all because im your brother and bully karna mera hak hai.</h4>
      </section>

      <section className="my-para-2">
        <h2>Now, as your gurlie..</h2>
        <h4> HIEEE GURLIEEE, OMGG ITS YOUR BIRTHDAYYY!! SLAYY BITCHHH, AHH I WANNA GO GET MY NAILS DONE WITH YOU, WANNA GO GET MY HAIR DONE WITH YOUU, GET MATCHIN TATTOOSS, GET PIERCINGSSS!! OMFG THERES SO MUCH STUFF I WANNA DO WITH YOU GIRLIE, IM SO EXCITED FOR THISS!!! I JUST WANT YOU TO DO MY MAKEUP AND TURN ME INTO A MAGICAL DIVA LIKE YOUUUUU💗💗 OMGG YOURE SO PRETTYY YKK, LITERALLY EVERY GUY CAN GET ON HIS KNEES FOR YOU GURLIE, YOU DESERVE ALL THE LOVE AND FLOWERS IN THE WORLD AND ILL MAKE SURE YOU GET EM ALLLL, I JUST WANT YOU TO STAY THE HAPPIEST FOREVER GURLIE AND I LOVE YOUU TWINNNN💗💗💗💗💗💗</h4>
      </section>

      <section className="my-para-2">
        <h2>And now as your bestie,
        </h2>
        <h4>Mehak, youre not just my sister, or my gurlie, youre also my bestfriend, youre also the person who made me believe in friendships, who made me believe that a guy and a girl can be JUST FRIENDs and were prolly the greatest example of that. I met you for the first time back at vagisha ka birthday but we actually started talking 8 months ago after my breakup, and ever since then, youve been with me in my ups and downs, supporting me, making me laugh, just being with me through all the times and im really grateful to have a sister like you in my life, and i know for a fact that if you ever leave na, nobody will ever be able to fill that void or take your place because nobody can be my closest sister other than you(and akshu ofc) but i know for a fact that youre someone id never wanna lose, id rather lose all my other friends than have you leave me. I know shayad thoda cheese lag rha hoga ye paragraph but this is the only time im ever gonna be this kind to you and say all this stuff kyuki you also know i never say this stuff and mai hamesha tujhe bully hi krunga CUZ IM YOUR BROTHER BITCH but fir bhi, i wanna say. I love you mehak, as your brother, your gurlie, your half gay bestie. Thankyou for actually guiding me though a lot of stuff and i hope we can stay this way forever and we can make a lot more memories, have a lot of fun, do a lot of bakchodi at random places with random people and just enjoy our lives to the fullest without any tension in the world. And I guess this is getting too long so ill end it before it gets boring. I love you Mehak, youre the best sister ever and just know that no matter if any other guy loves you or not, your brother always will and ill give you the princess treatment no guy ever can so your standards can always stay high and so you never settle for less gurlieee. In the end, Happy Birthday Mehak.</h4>
      </section>

      <section className="my-para-2">
        <h1> HAPPY BIRTHDAYYYY MEHAKKK/ LINGESANNN</h1>
      </section>
    </div>
  );
}