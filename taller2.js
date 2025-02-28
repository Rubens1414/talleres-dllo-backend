
//Punto 1 (Función findmax)
function findMax(lista) {
    var numero_maximo = lista[0];
    
    for (var i = 1; i < lista.length; i++) { 
      var numero_actual = lista[i];
      if(numero_actual > numero_maximo) { 
        numero_maximo = numero_actual
      }
    }
    return numero_maximo;
}
  
//Punto 2 (Función includes)
function includes(lista, numero) {
    for (var i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
        return true;
    }
    }
    return false;
}

//Punto 3 (Funcion sum)
function sum(lista) {
    var suma = 0;
    for (var i = 0; i < lista.length; i++) {
     suma += lista[i];
    }
    return suma;
}

//funcion min para Punto 4
function min(lista) {
  var numero_min = lista[0];
  
  for (var i = 1; i < lista.length; i++) { 
    var numero_actual = lista[i];
    if(numero_actual < numero_min) { 
      numero_min = numero_actual
    }
  }
  return numero_min;
}
//Punto 4 (Funcion missingNumbers)

function missingNumbers(lista) {
    var numeros_faltantes = [];
    var maximo = findMax(lista);
    var minimo = min(lista);
 
    for (var i = minimo; i < maximo; i++) {
      if (!includes(lista, i)) {
        
          numeros_faltantes.push(i);
     
      }
    }
    return numeros_faltantes;
}
console.log(findMax([3, 17,-1, 4, -19]));
console.log(includes([3, 17,-1, 4, -19], 4));
console.log(includes([3, 17,-1, 4, -19], 2));
console.log(sum([3, 17,-1, 4, -19]));
console.log(missingNumbers([7,2,4,6,3,9]));