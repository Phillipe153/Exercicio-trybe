function changeText ()
    {
      let a = document.getElementsByTagName('p')[1];
           a.innerText= "Daqui a 2 nois estarei ganhando mais de 4 mil reais e trabalhando em uma empresa foda. ";
    }
       changeText ();
function changeColorBlock ()
    {
        let color =document.getElementsByClassName('main-content')[0];
        color.style.background = "rgb(76,164,109)";

    }
    changeColorBlock ();
    
    function changeColorCenter ()
    {
        let color2 =document.getElementsByClassName('center-content')[0];
        color2.style.background = "white";

    
        
    }
    changeColorCenter();

    function changeTexto()
    {
        let texto=document.getElementsByTagName('h1')[0];
        texto.innerText="Exercício 5.1 - JavaEscripit";

    }
    changeTexto();
    function mudarParaMaiusculo()
    {
        let texto2=document.getElementsByTagName('p')[0];
        texto2.innerHTML= texto2.innerHTML.toUpperCase();
    }
    mudarParaMaiusculo();
    function mostraNoConsole ()
    {  
        for (let i=0 ;i<3;i ++)
        {console.log(document.getElementsByTagName('p')[i].innerText);}
    }
    mostraNoConsole ();
