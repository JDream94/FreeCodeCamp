    //Los nombres de las variables no pueden contener espacios//
*Las variabes se utilizan para almacenar informacion y poder acceder a la misma de forma sencilla.
Dentro de las variables se pueden encontrar 2 tipos de informacion: 
    Strings/Cadenas: Este tipo de datos se destaca por ser solamente de Palabras. Las strings se escriben (var (nombre) = "(palabra)";).
    Numeros: Para darle un valor numerico a una variable se utiliza la siguiente formula: 
    var (nombre) = (numero);
---
*Una variable puede ser utilizada para darle un valor ya sea en forma de "String" o en forma "Numerica". Esto se puede hacer de la siguiente forma: 
    (Var B = var A;)
---
*Una variable puede ser sumada(+), restada(-), multiplicada(*), y dividida(/) con otra. Tambien los datos de una variable independientemende del tipo que sea pueden sumarse. ejemplos: 
    var A = 15;
    var B = 10;
    var C = A + B;
    *Y de la misma forma con el resto de operaciones.
    *Con Strings el codigo seria algo asi:
    var A = "Hola";
    var B = " mundo";
    var C = A + B;
    //estos calculos se pueden hacer directamente en la misma variable//
---
*Los nombres de las variables cuando contienen mas de 1 palabra se utiliza el camelCase, y este mismo consta de escribir la inical de la primera palabra en minusculas y la inicial del resto de palabras en Mayusculas. Ejemplo: 
    var elNombreDeEstaVariableEsMuyLargo;
    /*El camelCase es fundamental ya que no es lo mismo "myVar" que "MyVar" y eso influye mucho en un codigo y nos permite nombrar muchas variables con el mismo nombre aunque no es recomendable*/
---
*Una variable puede sumarse y restarse sin la nesecidad de complejidad utilizando el siguiente comando: 
    var (nombre) ++; o var (nombre) --;
    //La computadora da por entendido ese codigo como +1 o -1 respectivamente.//
/*Con el % se puede hacer un calcula el cual te da un resultado que te hace saber si un numero es par o impar*/
---
*Para modificar el valor de una variable con un valor numerico se puede simplificar el codigo de la siguiente forma. Ejemplo:
    var (nombre) (+, -, *, /)= 3
    //si la variable ya tenia un valor numerico el mismo se sumara automaticamente con el que coloques//
---
*Dentro de una String para colocar un texto dentro de las comillas sin que el sistema lo detecte como el fin de las mismas se utiliza \""\, y de este modo cuando se proyecte el contenido de la variable mostraria algo asi: 
    var (nombre) = "pingo, \"dijo el pibe\"."
    //dentro de una String se pueden colocar los 2 tipos de comillas sin afectar a la misma//
---
*Código	Resultado. //con estos escapes se editan textos dentro de las strings//
    \'	comilla simple
    \"	comilla doble
    \\	barra invertida
    \n	línea nueva
    \r	retorno de carro
    \t	tabulación
    \b	límite de palabra
    \f	fuente de formulario
---
*La String de una variable puede formularse utilizando los datos de otra. Ejemplo:
    var (nombre) = "dghas" + (nombre otra variable) + "sdfgsd";
---
*Con la funcion ".length" se puede averiguar la longitud de una String. Ejemplo:
    console.log("pingo".length);
    (5)
---
*En ES6 se añadio dos nueva palabras claves para crear variables. Sus nombres son "let", y "const" a diferencia de "var" con estas palabras cuando utilizas sin querer el nombre de una variable en vez de cambiar su contenido como pasaba con var "let" te avisa que dicho nombre ya tiene un valor y "const" hace que la string sea solo de lectura. ejemplo:
var hola = "si";
var hola = "no";
console.log(hola); //mostraria "no"//

let hola = "si";
let hola = "no";
console.log(hola); //muestra error en la consola//

const HOLA_BRO = "si";
const HOLA_BRO = "no";
console.log(HOLA_BRO); //muestra error en la consola, pero no cambia el valor//
---
*Algo que la gente realiza cuando utiliza "const" es poner el nombre de la variable en mayusculas y separando el nombre con "_". ejemplo:
const ALGO_ASI;
---
