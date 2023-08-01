import React, { useEffect, useState } from "react";

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);

  const fetching = async () => {
    const response = await fetch(
      `https://api.sampleapis.com/simpsons/products`
    );
    const proyectoData = await response.json().then((proData) => {
      setProyectos(proData);
      console.log(proData)
    });
  };

  useEffect(() => {
    fetching();
  }, []);
console.log("que pex")

  return (
    <>
   
      {/* {proyectos.length &&
        proyectos.map((proyecto, index) => <p>proyecto.Title</p>)} */}
      
    </>
  );
}
