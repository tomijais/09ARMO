// 1. Puesta en común de los tipos de datos que vamos a necesitar
// para guardar nuestras tareas

// 2. Se arma un array

// 3. Se hace evidente que los datos tienen que estar afuera
// Creamos un archivo JSON

// console.log(tareasJson)
// console.log(typeof tareasJson)

// Salto de Fé
// Módulos nativos
// const fs = require('fs');
// let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
// let tareas = JSON.parse(tareasJson);

// Micro desafío 1
// transformar el código anterior en una función
// function leerJson() {
//    return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));;
// }

// 4. Se lleva el código a un modulo

let archivoTareas = require("./tareas");

let accion = process.argv[2];

switch (accion) {
  case "listar":
    console.log("Listado de tareas");
    let tareas = archivoTareas.leerJSON();
    for (let i = 0; i < tareas.length; i++) {
      console.log(i + ". " + tareas[i].titulo + " - " + tareas[i].estado);
    }
    break;

  case "crear":
    let tituloTarea = process.argv[3];
    let estadoTarea = process.argv[4];
    let tarea = {
      titulo: tituloTarea,
      estado: estadoTarea == undefined ? "pendiente" : estadoTarea,
    };
    listadoTareas.push(tarea);
    let listaActualizada = JSON.stringify(listadoTareas);
    fs.writeFileSync("./tareas.json", listaActualizada);
    console.log("Tarea creada con éxito!");
    break;

  case "filtrar":
    let tareaFiltrada = archivoTareas.filtrarPorEstado(process.argv[3]);
    for (let i = 0; i < tareaFiltrada.length; i++) {
      console.log(
        i + ". " + tareaFiltrada[i].titulo + " - " + tareaFiltrada[i].estado
      );
    }

    break;

  case undefined:
    console.log("Tenés que pasarme una acción");
    break;

  default:
    console.log("No entiendo qué me estás pidiendo");
    console.log("Las acciones disponibles son: listar");
    break;
}
