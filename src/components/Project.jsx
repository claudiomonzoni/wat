import Style from "../estilos/project.module.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Project({ Props, cierrate }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({ repeat: 0 });

    tl.from("#main", {
      x: 150,
      opacity: 0,
      ease: "Power1.easeOut",
    });

    // gsap.registerPlugin(ScrollTrigger);
    // const proyectos = document.querySelectorAll("h4, p, h1, img");
    // // For each images with class "animate-image" on page
    // proyectos.forEach((el) => {
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: el,
    //       // start: "left center",
    //       // toggleActions: "play none none reverse",
    //     },
    //   });
  
    //   tl.set(el, { transformOrigin: "top center" }).from(el, {
    //     opacity: 0,
    //     y: "+=20",
    //   });
    // });

    // scrollear con el raton
    const scrollContainer = document.querySelector("#main");
    console.log(scrollContainer);

    const invalidarScroll = (evt) => {
      evt.preventDefault(false);

      scrollContainer.scrollLeft += evt.deltaY;
    };

    scrollContainer.addEventListener("wheel", (evt) => {
      invalidarScroll(evt);
    });

    return () => {
      scrollContainer.removeEventListener("wheel", invalidarScroll);
      console.log("adios");
    };
  }, []);

  const {
    Titulo,
    descripcion,
    colaboradores,
    estatus,
    ubicacion,
    cliente,
    informacion,
    galeria,
    planos,
  } = Props;

  return (
    <div className={Style.project}>
      <a
        className={Style.cierrate}
        onClick={() => {
          cierrate();
        }}
      >
        cerrar
      </a>
      <div className={Style.main} id="main">
        <div className={Style.bandejaPri}>
          <h1>{Titulo}</h1>
          <h4>
            <b>Contexto</b>
          </h4>
          <p>{descripcion}</p>
        </div>
        <img
          src={`https://sneakiest-springs.000webhostapp.com/wat/storage/uploads/${galeria[0].path}`}
          alt={galeria.title}
        />

        {colaboradores ? (
          <div className={Style.minibandeja}>
            <h4>
              <b>Colaboradores</b>
            </h4>
            <p>{colaboradores}</p>
          </div>
        ) : (
          ""
        )}

        <div className={Style.autobandeja}>
          <h4>Cliente</h4>
          <p>{cliente}</p>

          <h4>Estatus</h4>
          <p>{estatus}</p>
        </div>
        {galeria.map((ima, key) => (
          <img
            key={key}
            src={`https://sneakiest-springs.000webhostapp.com/wat/storage/uploads/${ima.path}`}
            alt={ima.title}
          />
        ))}
        <div className={Style.minibandeja}>
          <h4>Ubicación</h4>
          <p>{ubicacion}</p>

          <h4>Información del proyecto</h4>
          <p>{informacion}</p>
        </div>
        <div className={Style.bandeja}>
          <h4>Planos</h4>
          <div className={Style.galeria}>
            {planos.map((plano, key) => (
              <img
                key={key}
                src={`https://sneakiest-springs.000webhostapp.com/wat/storage/uploads/${plano.path}`}
                alt={plano.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
