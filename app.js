let edad= 0;
let personas;
let edadTotal= 0;
let ciclo;
let edadPromedio=0;

debugger;
personas = +prompt('cuantas personas son?')
ciclo = personas
if (personas > 0){
    while(ciclo > 0){
        edad= +prompt("ingrese la edad de las personas")
        while(edad<1){
            edad=+prompt("porfavor ingrese una edad valida")
        }
        edadTotal= edadTotal + edad
        ciclo = ciclo-1;
   
    }
    edadPromedio = edadTotal/personas;

console.log('La edad total es:', edadTotal)
console.log('La edad promedio es:', edadPromedio)


}
else{
    console.log("No has ingresado un numero valido de personas.")
}



