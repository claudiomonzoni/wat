import Style from "../estilos/project.module.scss";
export default function Project({ Props, cierrate }) {
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
        {" "}
        cerrar{" "}
      </a>
      <img
        src={`https://sneakiest-springs.000webhostapp.com/wat/storage/uploads/${galeria[0].path}`}
        alt={galeria.title}
      />
      <h1>{Titulo}</h1>
      <h4>
        <b>Contexto</b>
      </h4>
      <p>{descripcion}</p>
      <h4>
        <b>Colaboradores</b>
      </h4>
      <p>{colaboradores}</p>
      {galeria.map((ima, key) => (
        <img
          key={key}
          src={`https://sneakiest-springs.000webhostapp.com/wat/storage/uploads/${ima.path}`}
          alt={ima.title}
        />
      ))}
      <h4>Cliente</h4>
      <p>{cliente}</p>
      <h4>Estatus</h4>
      <p>{estatus}</p>
      <h4>Ubicación</h4>
      <p>{ubicacion}</p>
      <h4>Información del proyecto</h4>
      <p>{informacion}</p>
      <h4>Planos</h4>
      {planos.map((plano, key) => (
        <img
          src={`https://sneakiest-springs.000webhostapp.com/wat/storage/uploads/${plano.path}`}
          alt={plano.title}
        />
      ))}
    </div>
  );
}
