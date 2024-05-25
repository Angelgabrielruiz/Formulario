import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import "./Section.css";
import LinkedList from "../../data/LinkedList";

function Section() {
  const [materia, setMateria] = useState("");
  const [actividad, setActividad] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [showActivitiesList, setShowActivitiesList] = useState(false);
  const [activities, setActivities] = useState([]);

  const datos = useRef(new LinkedList());

  
  const handlerClick = (event) => {
    event.preventDefault();

 
    const newActivity = {
      materia,
      actividad,
      fecha,
      descripcion,
    };

 
    datos.current.append(newActivity);

    Swal.fire({
      title: "Tarea Guardada",
      html: `Materia: ${materia}<br/>
             Actividad: ${actividad}<br/>
             Fecha: ${fecha}<br/>
             Descripcion: ${descripcion}<br/>`,
    });

    
    setActivities(datos.current.toArray());

    setMateria("");
    setActividad("");
    setFecha("");
    setDescripcion("");
  };

  
  const handleShowActivitiesClick = () => {
    setShowActivitiesList(true);
  };

  return (
    <div id="section">
      
      <Field
        type="select"
        placeholder="e.j Matematicas"
        text="nombre de la materia"
        val={materia}
        fnVal={setMateria}
      />
      <Field
        type="text"
        text="Nombre de la actividad"
        val={actividad}
        fnVal={setActividad}
      />
      <Field
        type="date"
        placeholder="prueba"
        text="Fecha de entrega"
        val={fecha}
        fnVal={setFecha}
      />
      <Field
        type="text"
        text="Descripcion de la actividad"
        val={descripcion}
        fnVal={setDescripcion}
      />
      
      <Button title="agregar" onclick={handlerClick} />
      <Button
        title="Mostrar Lista de Estudiantes"
        onclick={handleShowActivitiesClick}
      />

      
      {showActivitiesList && (
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              Materia: {activity.materia}, Actividad: {activity.actividad},
              Fecha: {activity.fecha}, Descripcion: {activity.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Section;
//comentario