let n = Math.floor(Math.random ()*6+1) ;
console.log(n);


let coluna = null;

// => 1 Quadrado com linhas e colunas iguais 
let linha = [];
linha.length = n;
//coluna=n;



for (i=0;i<n;i++)
{
   linha[i]='*';    
   
}
for (i=0;i<n;i++)

{
   
   console.log(linha);
      
}
// => triangulo de base 5
console.log("");
console.log("=> triangulo de base 5");
console.log("");
let linha2 = [];
for (i=0;i<5;i++)
{
    linha2.length=i;
    linha2[i]='*'; 
    console.log(linha2);   
}
// => triangulo de base 5 invertido
console.log("");
console.log("=> triangulo de base 5 invertido");
console.log("");
let linha3 = [" "," "," "," "," "];


for (i=5;i>=0;i--)

{
  if (linha3[i]!="*")
    {
        linha3[i]='*';
        console.log(linha3);

    }
   
    
    

}
// =>  4 piramide com n asteriscos
console.log("");
console.log("=> 4 piramide com n asteriscos");
console.log("");
n = Math.floor(Math.random ()*6+1) ;
if(n%2==0)
{
    n=n+1
}
console.log(n);


let linha4=[];
linha4.length=n;
for (i=0;i<n;i++)
    {
        linha4[i]=" ";
    }
    console.log(n/2);
    console.log(Math.ceil(n/2));
    linha4[Math.ceil(n/2)] = 5;
console.log(linha4);
for (i=0;i<n;i++)
{
    
    /*if(linha4[i]===" " || linha4[n-i])
    {

    }
    linha4[(n/2)]="*";
    console.log(linha4);*/

}