
let C= 25;

//Punto 1
function convertirTemp(C) {
   
    F = (C * 9 / 5) + 32;

    return F;
    
}

console.log(convertirTemp(C));

//Punto 2
let a = 1;
let b = 5;
let c = 4;
let x1;
let x2;
let valor = true;

function resolvedor(a, b, c,valor) {
    x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
    x2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);
    if (valor == true) {
        return x1;
    } else {
        return x2;
    }
    
}

console.log(resolvedor(a, b, c, valor));

//Punto 3

let num=5;

function mejorParidad(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}   

console.log(mejorParidad(num));

//Punto 4
function peorParidad(num) {
    if(num == 1) {
        if(1 % 2 == 0) {
            return false;
        } else {
            if(1 % 2 != 0) {
                return false;
            }
        }
    }  

    if(num == 2) {
        if(2 % 2 == 0) {
            if(2 % 2 == 0) {
                return true;
            }
        }
    }

    if(num == 3) {
        if(3 % 2 == 0) {
            return false;
        } else {
            if(3 % 2 != 0) {
                return false;
            }
        }
    }

    if(num == 4) {
        if(4 % 2 == 0) {
            if(4 % 2 == 0) {
                return true;
            }
        }
    }

    if(num == 5) {
        if(5 % 2 == 0) {
            return false;
        } else {
            if(5 % 2 != 0) {
                return false;
            }
        }
    }
    
    if(num == 6) {
        if(6 % 2 == 0) {
            if(6 % 2 == 0) {
                return true;
            }
        }
    }
    
    if(num == 7) {
        if(7 % 2 == 0) {
            return false;
        } else {
            if(7 % 2 != 0) {
                return false;
            }
        }
    }
   
    if(num == 8) {
        if(8 % 2 == 0) {
            if(8 % 2 == 0) {
                return true;
            }
        }
    }

    if(num == 9) {
        if(9 % 2 == 0) {
            return false;
        } else {
            if(9 % 2 != 0) {
                return false;
            }
        }
    }
   
    if(num == 10) {
        if(10 % 2 == 0) {
            if(10 % 2 == 0) {
                return true;
            }
        }
    }
}

console.log(peorParidad(3));