//adiçao
    let a = 13;
    let b =2;

    console.log( a +b);

// subtraçao

console.log( a - b);

// multiplicaçao

console.log( a * b);

//divisao

console.log( a/ b);

// modulo

console.log( a %b);

//2 Retorna o maior 
console.log ( " -> 2 Retorna o maior");

if ( a > b)
{
    console.log( a);
}
else if (a<b)
{
    console.log( b);
}
else
{
    console.log( "os numeros sao iguais!"); 
}
//2 Retorna o maior de tres numeros
console.log ( " -> 3 Retorna o maior");

let c = 17;

/*if (a>b && a>c)
{
    console.log ( a);
}
else if (b>c && b>c)
{
    console.log (b);
}
else 
{
    console.log ( c);
}
*/
 let maior = Math.max (a,b,c);

console.log (maior)