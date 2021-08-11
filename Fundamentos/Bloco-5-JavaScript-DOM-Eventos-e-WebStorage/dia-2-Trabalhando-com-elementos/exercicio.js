let filho = document.createElement('h1');
filho.innerText= 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(filho);

const principal = document.createElement('main');
principal.className='main-content';
document.body.appendChild(principal);

const seçao = document.createElement('section');
seçao.className='center-content';
principal.appendChild(seçao);

const paragrafo = document.createElement('p');
paragrafo.innerText='exercicio trybe';
seçao.appendChild(paragrafo);

const irmao = document.createElement('section');
irmao.className='left-content';
principal.appendChild(irmao);

const irmao2 = document.createElement('section');
irmao2.className='rigth-content';
principal.appendChild(irmao2);

const imagem = document.createElement('img');
imagem.className='small-image';
imagem.src=" https://picsum.photos/200";
irmao.appendChild(imagem);

const listaNaoOrdenada = document.createElement('ul');
irmao2.appendChild(listaNaoOrdenada);
const numeros=['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];

for(let i=0;i<10;i++)
{
    const elementLi =document.createElement('li');
    
    elementLi.innerHTML=numeros[i];
    listaNaoOrdenada.appendChild(elementLi);
}

for (let i=0;i<3;i+=1)
{
    let h3=document.createElement('h3');
    h3.innerHTML="texto "+ [i+1];
    principal.appendChild(h3);
}

