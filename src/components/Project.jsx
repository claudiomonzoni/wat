
import Style from "../estilos/project.module.scss";
export default function Project({Props, cierrate}) {
    const {imagenes, name, descripcion, colabs, cliente, ubicacion, estatus } = Props
  return (
    <div className={Style.project}>
        <a className={Style.cierrate} onClick={()=>{ cierrate()}} > cerrar </a>

        <h1>{name}</h1>

        </div>
  )
}
