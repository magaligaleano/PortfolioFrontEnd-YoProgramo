export class persona {
    id!:number;
    nombre: string;
    apellido: string;
    img: string;
    ocupacion: string;
    sobreMi: string;

    constructor(nombre:string, apellido:string, img:string, ocupacion:string, sobreMi:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.ocupacion = ocupacion;
        this.sobreMi = sobreMi;
    }
}