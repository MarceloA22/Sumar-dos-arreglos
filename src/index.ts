let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let posicion: number, indice: number;

for (indice = 0; indice < 6; indice++) {// es conveniente usar v1.length ya que si tu cliente te pide que el array tenga mas elementos, solo necesitarias cambiar 
  posicion = Number(                    //las lineas 1 y 2.
    prompt(
      `Ingrese el número que desea incorporar en la posición: ${indice}, del arreglo N°1: `
    )
  );
  v1[indice] = posicion;
}

for (indice = 0; indice < 6; indice++) {
  posicion = Number(
    prompt(
      `Ìngrese el número que desea incorporar en la posición: ${indice}, del arreglo N°2:`
    )
  );
  v2[indice] = posicion;
}
let vSuma: number[] = [// lo ideal es usar un ciclo para realizar la suma.
  v1[0] + v2[0],
  v1[1] + v2[1],
  v1[2] + v2[2],
  v1[3] + v2[3],
  v1[4] + v2[4],
  v1[5] + v2[5]
];
console.log("Valores ingresados del primer arreglo: ", v1);
console.log("Valores ingresados del segundo arreglo: ", v2);
console.log("suma de los arreglo 1 + arreglo 2 : ", vSuma);
//esta correcta tu solucion
