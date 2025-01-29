class Atletas {

    constructor(nome, idade, peso, altura, notas){
       this.nome = nome;
       this.idade = idade;
       this.peso = peso;;
       this.altura = altura;
       this.notas = notas;
    }

    calculaCategoria(){
    
     
      if(this.idade >= 9 && this.idade <= 11){
        return `Infantil`
      }
      else if(this.idade === 12 || this.idade === 13){
        return `Juvenil`
      }
      else if(this.idade === 14 || this.idade === 15){
        return `Intermediário`
      }
      else if(this.idade >= 16 && this.idade <= 30){
        return `Adulto`
      } 
      else{
        return `Sem Categoria`
      }
     
    }
    
    
calculaIMC(){
  return this.peso / (this.altura * this.altura)
  }

  caculaMediaValida(){
const notasOrdenadas = this.notas.slice().sort((a, b) => a - b)
const notasDoMeio = notasOrdenadas.slice(1, 4)

const soma = notasDoMeio.reduce(function(total, atual){
  return total + atual
}, 0)
return soma / notasDoMeio.length
  }

  obtemNomeAtleta(){
    return this.nome
  }

  obtemIdadeAtleta(){
  return this.idade
  }

  obtemPesoAtleta(){
   return this.peso
  }

  obtemAlturaAtleta(){
    return this.altura
  }

  obtemNotasAtleta(){
   return this.notas
  
}
obtemCategoria(){
  return this.calculaCategoria()
}

obtemIMC(){
  return this.calculaIMC()
}

obtemMediaValida(){
  return this.caculaMediaValida()
}

exibeDados(){
  console.log(`Nome: ${this.obtemNomeAtleta()}`)
  console.log(`Idade: ${this.obtemIdadeAtleta()}`)
  console.log(`Peso: ${this.obtemPesoAtleta()}`)
  console.log(`Altura: ${this.obtemAlturaAtleta()}`)
  console.log(`Notas: ${this.obtemNotasAtleta()}`)
  console.log(`Categoria: ${this.obtemCategoria()}`)
  console.log(`IMC: ${this.obtemIMC()}`)
  console.log(`Media válida: ${this.obtemMediaValida()}`)
  console.log("")
}
}

const atleta1 = new Atletas("Cesar Abascal", 10, 60, 1.68, [10, 9.34, 8.42, 10, 7.88])
const atleta2 = new Atletas( "Fernando Puntel", 16, 70, 1.82, [8, 10, 10, 7, 9.33])
const atleta3 = new Atletas("Daiane Jelinsky", 13, 63, 1.60, [7, 10, 9.5, 9.5, 8])
const atleta4 = new Atletas("Bruno Castro", 14, 68, 1.75, [10, 10, 10, 9, 9.5]) 

atleta1.exibeDados()
atleta2.exibeDados()
atleta3.exibeDados()
atleta4.exibeDados()
