import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Portafolio() {

  const [proyectos, setProyectos] = useState([]);
  const fetching = async () => {
    const response = await fetch(
      `https://api.sampleapis.com/simpsons/products`
    );
    const proyectoData = await response.json().then((proData) => {
      setProyectos(proData);
    });
  };

  useEffect(() => {
    fetching();

gsap.registerPlugin(ScrollTrigger);
setTimeout(() => {
const proyect = document.querySelectorAll(".proyecto");
  
// For each images with class "animate-image" on page
proyect.forEach((el) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "left center",
      // toggleActions: "play none none reverse",
    },
  });
  
  tl.set(el, { transformOrigin: "top center" }).from(el, {
    opacity: 0,
    scale: 0.9,
    y: "+=20",
  });
});

}, "500");


  }, []);

  return (
    <>
      {proyectos.length &&
        proyectos.map((proyecto, index) => (
          <div className="proyecto" key={index}>
            <div className="lado">
              <div className="ima">
                <img src="/proyecto/proyecto-a.jpg" alt="algo aqui" />
              </div>
              <div className="contenido">
                <div className="conte">
                  <h2>{proyecto.name}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="lado"></div>
          </div>
        ))}
    </>
  );
}