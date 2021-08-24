

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.splice(2,0,70);
numbers.splice(5,1);
console.log (numbers);
/*
console.log ("=> Exercico 2");
console.log ("");
let soma = 0;
for (i=0;i<numbers.length;i++)
{
    
    soma = soma +numbers[i];

    
}
console.log (soma);
console.log ("");
console.log ("=> Exercico 3");
console.log ("");

let media = soma/numbers.length;

console.log (media);

console.log ("");
console.log ("=> Exercico 4");
console.log ("");

if (media>20)
{ console.log ("Maior que 20");}
else { console.log ("Menor que 20");}

console.log ("");
console.log ("=> Exercico 5");
console.log ("");
let maior = null;
for (i=0;i<numbers.length;i++)
{
    if (numbers[i]>maior)
    { maior = numbers[i];}

}
console.log(maior);

console.log ("");
console.log ("=> Exercico 6");
console.log ("");

let impar = null;
let impares =[];
for (i=0;i<numbers.length;i++)
{
    if (numbers[i]%2!=0)
    { impar ++;
    impares.push(numbers[i]); }
   if (impar===null)
    { console.log ("Nenhum valor impar")}

}
console.log("");
console.log("Existem ",impar, " valores impares e sao eles:");
console.log (impares);

console.log ("");
console.log ("=> Exercico 7");
console.log ("");
let menor = numbers[0];
for (i=0;i<numbers.length;i++)
{
    if (numbers[i]<menor )
    { menor = numbers[i];}
}
console.log(menor);

console.log ("");
console.log ("=> Exercico 8");
console.log ("");
let newArray =[];
for (i=1;i<26;i++)
{
    newArray.push(i);
}
console.log (newArray);

console.log ("");
console.log ("=> Exercico 9");
console.log ("");
let divisao=[];
for (i=0;i<25;i++)
{ divisao.push (newArray[i]/2);}
console.log(divisao);


*/