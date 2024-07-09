function getDOM(query){
    return document.getElementById(query)
}

const siteElements={
    peso:getDOM('peso'),
    altura:getDOM('altura'),
    btnCalculo:getDOM('btn_calc'),
    output:getDOM('output')
}


siteElements.btnCalculo.addEventListener('click',()=>{
    let calculo = Number(peso.value)/Number(altura.value**2);
    siteElements.output.innerHTML=`Resultado do IMC ${calculo.toFixed(2)} </p>`
    if(calculo<16.9){
        
    }else if(calculo >=17 && calculo<=18.4){
        siteElements.output.innerHTML = "Abaixo do peso!";
    }else if(calculo >=18.5 && calculo<=24.9){
        siteElements.output.innerHTML = "Peso normal";
    }else if(calculo >=25 && calculo<=29.9){
        siteElements.output.innerHTML = "Acima do peso !";
    }else if(calculo >=30 && calculo<=34.9){
        siteElements.output.innerHTML = "Obesidade grau I";
    }else if(calculo >=35 && calculo<=40){
        siteElements.output.innerHTML = "Obesidade grau II";
    }else {
        siteElements.output.innerHTML = "Obesidade grau III";
    }
});

