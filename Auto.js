export default class Auto {
    constructor(marca, modelo, color = "blanco", kilometraje = 0){
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._kilometraje = kilometraje;
        this._estado = "Apagado";
    }

    get color() {
        return this._color; // Escritura
    }

    set color(color) {
        this._color = color.toUpperCase(); // Lectura
    }

    set modelo(modelo) {
        if (modelo = 2000) {
            this._modelo = 2000;
        } else {
            this._modelo = modelo;
        }
    }

    mostrarEstado() {
        console.log(`El auto ${this._marca} ${this._color} del año ${this._modelo} tiene un kilometraje de ${this._kilometraje} y esta ${this._estado}`);
    }

    encender() {
        this._estado = "Encendido";
        this.mostrarEstado();
    }

    apagar() {
        this._estado = "Apagado";
        this.mostrarEstado();
    }

    avanzar(velocidad, tiempo) {
        if(this._estado === "Apagado") {
            console.log("El auto no puede avanzar por que esta apagado");
        } else {
            let distancia =  velocidad * tiempo;
            this._kilometraje = this._kilometraje + distancia;
            this.mostrarEstado();
        }
    }
}