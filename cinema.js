let catalogo = [
    {
        codigo: 001,
        titulo: "Senhor dos Anéis",
        atores: ["ator1", "ator2"],
        anoDeLancamento: 2021,
        emCartaz: true
    },
    {
        codigo: 002,
        titulo: "Senhor dos Anéis 2",
        atores: ["ator3", "ator4"],
        anoDeLancamento: 2020,
        emCartaz: false
    }
]

//console.log(catalogo)

function adicionarFilme(filme){
    catalogo.push(filme)
    console.log(catalogo)    
}

let filme = {
    codigo: 003,
    titulo: "Senhor dos Anéis 3",
    atores: ["ator1", "ator2"],
    anoDeLancamento: 2022,
    emCartaz: true
}

adicionarFilme(filme)

function buscarFilme(codigo){
    for (let index = 0; index < catalogo.length; index++) {
        const element = catalogo[index]
        console.log(element.codigo)
        if (element.codigo == codigo) {
            return catalogo[index]            
        }        
    }  return "Não encontrei"  
}
let resultadoBuscarFilme = buscarFilme(5)
console.log(resultadoBuscarFilme)

function alterarStatusCartaz(codigo){
    let resultado = buscarFilme(codigo)
    resultado.emCartaz
    if(resultado.emCartaz){
        resultado.emCartaz = false
    }else{
        resultado.emCartaz = true
    }
    return resultado    
}

alterarStatusCartaz(1)

// function dominio(url){
//     url = "http://" 
       
//     return url
// }

// let frase = "dominio, site"
// frase.replace(dominio, twitter.com)
// console.log(dominio(twitter.com) + "twitter.com")
// console.log(dominio() + "gov.com")
// console.log(dominio() + "digitalhouse.com")
