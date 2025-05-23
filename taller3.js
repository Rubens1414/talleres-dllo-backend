

//Punto 1:
function desglosarString(palabra, opcion){
    let vocales = ['a', 'e', 'i', 'o', 'u']
    let consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    let total_vocales = 0
    let total_consonantes = 0
    let palabra_a = palabra.split('')
    palabra_a = palabra_a.map(function(letra){
        return letra.toLowerCase()
    });
 
    if(opcion == 'vocales'){
        for(let i = 0; i < palabra_a.length; i++){
          if(vocales.includes(palabra_a[i])){
                total_vocales++
          }
        }
        return total_vocales
        
    }else if(opcion == 'consonantes'){
       for(let i = 0; i < palabra_a.length; i++){
        if(consonantes.includes(palabra_a[i])){
           total_consonantes++;
        }
         }
         return total_consonantes;
    }

}

//Punto 2:
function twoSum(numeros, suma) {
    for (let i = 0; i < numeros.length; i++) {
        let complemento = suma - numeros[i];
        let j = numeros.findIndex((numeros, index) => numeros === complemento && index !== i);
        if (j !== -1) {
            return [i, j];
        }
    }
}
//punto 3:
function conversionRomana(numr) {
    let romanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let resultado = 0
    let anterior = 0
    let actual = 0
    for (let i = 0; i < numr.length; i++) {
        actual = romanos[numr[i]];
        
        if (actual > anterior) {
            resultado += actual - 2 * anterior;
        } 
        if(actual <= anterior){
            resultado += actual;
        }
        anterior = actual;
    }
    return resultado;
}

console.log(desglosarString('murcielagos', 'vocales')); 
console.log(desglosarString('murcielagos', 'consonantes'));
console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 4,2], 6)); 
console.log(conversionRomana('III'));


