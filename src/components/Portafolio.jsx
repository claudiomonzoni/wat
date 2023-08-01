import React, { useEffect, useState } from "react";

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
    }, []);
  
    return (
      <>
     
        {proyectos.length &&
          proyectos.map((proyecto, index) => 
            <li key={index}>{proyecto.name}</li>
            )}
        
      </>
    );
  }