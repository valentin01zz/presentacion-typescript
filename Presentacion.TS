interface IPersona {
 nombre: string;
 edad: number;
 direccion: IDireccion,
 mostrarDireccion: ()=> string;

}

interface IDireccion {
   
    calle:string;
    pais:string;
    ciudad:string;

}

const persona: IPersona={
    nombre:'Valentin',
    edad:30,
    direccion:{
    calle:'Rodas Este',
    pais: 'Argentina',
    ciudad:'San Juan',
    },

 mostrarDireccion(){
    return this.nombre+','+ this.direccion.ciudad+','+ this.direccion.pais;
 }


};

console.log(persona.mostrarDireccion());