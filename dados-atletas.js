class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        
    }

calcularCategoria(){
    if(this.idade>8 && this.idade <12)
return "Infantil"
    
    if(this.idade > 11 && this.idade <14)
    return "Juvenil"

    if(this.idade> 13 && this.idade<16 )
    return "Intermediário"

    if(this.idade >15 && this.idade <31)
        return "Adulto"
}

calculaIMC(){
    return this.peso / (this.altura * this.altura)
}

calcularAmediaValida(){
    this.notas = this.notas.sort()
    this.notas = this.notas.slice(1, 4)
    let soma = 0;
    this.notas.forEach(function(nota){
        soma = soma + nota 
      });
      let obterMedia = soma / this.notas.length;
      return obterMedia
    

}
obterNomeAtleta(){
    return this.nome
}

obterIdadeAtleta(){
    return this.idade
}
obterPesoAtleta(){
    return this.peso
}
obterNotasAtleta(){
    return this.notas
}
obterCategoria(){
    return atleta.calcularCategoria()

}
obterImc(){
    return atleta.calculaIMC()
}
obterMedia(){
    return atleta.calcularAmediaValida()
}
obterAltura(){
    return this.altura
}

}

const atleta = new Atleta ("Cesar Abascal",
30, 80, 1.70,
[10, 9.34, 8.42, 10, 7.88])



console.log(`Nome : ${atleta.obterNomeAtleta()}`)
console.log(`Idade: ${atleta.obterIdadeAtleta()}`)
console.log(`Peso : ${atleta.obterPesoAtleta()}`)
console.log(`Altura : ${atleta.obterAltura()}`)
console.log(`Notas : ${atleta.obterNotasAtleta()}`)
console.log(`Categoria : ${atleta.calcularCategoria()}`)
console.log(`IMC : ${atleta.obterImc()}`) 
console.log(`Média Válida : ${atleta.obterMedia()}`)

