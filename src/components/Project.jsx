

export default function Project({Props, cierrate}) {
    const {imagenes, name, descripcion, colabs, cliente, ubicacion, estatus } = Props
  return (
    <div className='project'>
        <a className="cerrar" onClick={()=>{ cierrate()}} />
        {/* <img src="/cerrar.svg" alt="close" /> */} cerrar

        <h1>{name}</h1>

        </div>
  )
}
