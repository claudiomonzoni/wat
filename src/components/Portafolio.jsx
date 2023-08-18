import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./Project";

export default function Portafolio() {
  const [abierto, setAbierto] = useState(false);
  // const [datos, setDatos] = useState([]);
  const [props, setProps] = useState();
  const host = "http://localhost/wat/api";
  const [proyectos, setProyectos] = useState([]);
  const fetching = async () => {
    const response = await fetch(
      `https://sneakiest-springs.000webhostapp.com/wat/api/content/items/Proyecto`,
      {
        method: "GET",
        headers: {
          "api-key": "USR-42334a42d493e827a86a88fd05e0af3e1d9eb2b1",
        },
      }
    );
    const proyectoData = await response.json().then((proData) => {
      setProyectos(proData);
      console.log(proData)
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

  const btnProject = (props) => {
    setAbierto(!abierto);
    setProps(props);
  };
  const cerrar = () => {
    setAbierto(false);
  };

  return (
    <>
      {abierto && <Project Props={props} cierrate={cerrar} />}
      <div id="proyectos" className="bandeja">
        {proyectos.length &&
          proyectos.map((proyecto, index) => (
            <div className="proyecto" key={index}>
              <div className="lado">
                <div className="ima">
                  <a
                    onClick={() => {
                      btnProject(proyecto);
                    }}
                  >
                 
                    <img src={`https://sneakiest-springs.000webhostapp.com/wat/storage/uploads/${proyecto.galeria[0].path}`}  alt={proyecto.Titulo} />
                  </a>
                </div>
                <div className="contenido">
                  <div className="conte">
                    <h2>{proyecto.Titulo}</h2>
                    <p>
                      {proyecto.descripcion}
                    </p>
                  </div>
                </div>
              </div>
              <div className="lado"></div>
            </div>
          ))}
      </div>
    </>
  );
}
