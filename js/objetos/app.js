

let auto = {
    modelo: "fiat Argo",
    antiguedad: 2020,
    cantidadPuertas: 4,
    mostrarDatos(){
        console.log(this.modelo,this.antiguedad,this.cantidadPuertas);
    },
    propiedad2:"Dato aleatorio"
}

document.write("<h1> Puertas: "+auto.cantidadPuertas+"<h1/>")
auto.mostrarDatos()


// PROMESAS

let saludar = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let saludo = "Hola buenas tardes.";
        

        if (saludo) {
            resolve(saludo)
        } else {
            reject("No hay saludo disponible");
        }
    },2000)
});

saludar.then(resultado=>{
    alert(resultado)
})
.catch(error => {
    alert(error)
})