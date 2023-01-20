
function paragrafoHtml(){
    document.getElementById('paragrafo').innerHTML = 'Teste inserindo texto do Html.';
    document.getElementById("paragrafo").scrollIntoView({behavior:"smooth"});
}
function paragrafoCss(){
    document.getElementById('paragrafo').innerHTML = 'Teste inserindo texto do Css.';
    document.getElementById("paragrafo").scrollIntoView({behavior:"smooth"});
}
function paragrafoJs(){
    const classe = document.getSelection('botao').attibute('class')
    console.log(classe)
    document.getElementById('paragrafo').innerHTML = 'Teste inserindo texto do Css.';

    document.getElementById("paragrafo").scrollIntoView({behavior:"smooth"});
}
function paragrafoPhp(){
    const myTimeout = setInterval(() => {
        document.getElementById('paragrafo').innerHTML = 'Teste inserindo texto do Php.',
        document.getElementById("paragrafo").scrollIntoView({behavior:"smooth"})
    }, 1000);

    clearInterval(myTimeout, 5000);
        
}
