/*let teste ="abacate";
let separator ="";
let teste2 = teste.split (separator);
console.log(teste2.length);
let teste3 = teste2.reverse();
console.log(teste3);

function palindrono(a)
{
    let separator = "";
    console.log(a.split(separator)) ;
    console.log(a.split(separator).reverse());
    for (let key in a)
    {
        if (a.split(separator)[key] === a.split(separator).reverse()[key])
        {   
                    
            return console.log ( "é um palindrono");
        }
    else {return console.log ( " nao é um palindrono");
        }
    }
    
}
let palavra1="banana";
let palavra2="abacate";
let palavra3="ovo";
let palavra4="arara";

palindrono(palavra1);
palindrono(palavra2);
palindrono(palavra3);
palindrono(palavra4);
*/

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .*/

function maior (a)
{
    let m= null;
    for (let key in a)
        {
            if (m===null)
                {m=key;}
            else if (a[key]>m)
                {m=key;}
        }
    return m;
}

let sequencia =[2, 3, 6, 7, 10, 1];
 console.log(maior(sequencia));