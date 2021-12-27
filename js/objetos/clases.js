class Auto {
    constructor(modelo,antiguedad,velocidad){
        this.modelo= modelo,
        this.antiguedad = antiguedad,
        this.velocidad= velocidad
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    disminuirVelocidad(){
        this.velocidad -= 1
    }

}

let auto1 = new Auto('BMW',2015,200)

let auto2 = new Auto('Mercedes',2018,180)

let auto3 = new Auto('Audi',2021,210)


document.write("Velocidad final: ",auto1.velocidad)


auto1.aumentarVelocidad()
auto1.aumentarVelocidad()
auto1.aumentarVelocidad()

document.write("Velocidad final: ",auto1.velocidad)


class Colectivo extends Auto{
    constructor(modelo,antiguedad,velocidad){
        super(modelo,antiguedad,velocidad)
        this.altura=5
    }

    mostrarAltura(){
        // return "La altura de este colectivo es de "+this.altura+" metros."
        return `La altura de este colectivo es de ${this.altura} metros`
    }
}

let colectivo1 = new Colectivo('Migrado',2021,160)

console.log(colectivo1);
console.log(colectivo1.mostrarAltura())





