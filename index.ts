/**
 * Ejercicio 1
 * Como multiplicar dos numeros sin usar el signo de muiltiplicacion 
*/

const multiply = (a, b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for (let i = 0; i < Math.abs(b); i++) {
        resultado = positivo
            ? resultado + a
            : resultado - a
    }

    return resultado
}

const a = multiply(50, 50)
console.log('a', a)

/**
 * Ejercicio 2
 * Obtener el mayor numero de un arreglo pero iterando el arreglo
 * solo una vez 
*/
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([50, -1500, 0, 1, 54])
console.log('b', b)
const clean = (arr) => arr.reduce((acc, el) => {
    if (el)
        acc.push(el)
    return acc
}, [])

const c = clean([1, undefined, null, 0, 2, 3])
console.log('c', c)

/**
 * Ejercicio 3
 * Escribir una funcion que aplane los arreglos a un nivel 
*/
const arr = [[1,2],[[3,4]], [1,[]]]
// [1, 2, [3, 4], 1, []]
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr)
console.log('d',d)

/**
 * Ejercicio 3
 * Escribir una funcion que cuente la cantidad de veces que se repite una palabra
*/
const repeated = (str: string) => {
    const lowered = str.toLowerCase()
    // dividimos el string por los espacios(palabras por separado)
    const splited = lowered.split(' ') 
    // genera un objeto que va a contener como llaves las palabras
    // y el valor que va a tener la llave es la cantidad de veces que se repite esa palabra
    const reduced = splited.reduce((acc, el) => {
        if (acc[el]) 
            acc[el]++
        else 
            acc[el] = 1
        return acc
    },{})
    // transformar el objeto a un arreglo
    return Object.entries(reduced).reduce((acc, el) =>acc[1] > el[1] ? acc : el )
}

const e = repeated("this is a repeated word test this is a a")
console.log('e', e)


/**
 * Ejercicio 3
 * Verificar si una oracion es un palindromo
*/
const isPalindrome = (str: string) => {
    // expresion regular para eliminar los espacios
    str = str.replace(/\s/g,'')
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reversed = splitted.reverse()
    const joined = reversed.join('')
    return lowered === joined
}

// const f = isPalindrome('oracion no palindroma')
const f = isPalindrome('Do geese see God')
console.log('f', f)
