<h1>Dados dos atletas</h1> 

> Status: conculído

> ## Descrição funcionalidade:
  O projeto consiste em coletar dados de atletas e executar os senguintes procedimentos:
  Calcular o IMC(Índice de Massa Corporal), a categoria que cada atleta se
  encaixa(Infantil, Juvenil, Intermediário, Adulto ou sem categoria, se o atleta possuir
  idade superior a 30 anos) e calcular a média das notas dos atletas, excluindo a menor e maior nota obtida.

  > ## Tecnologias Utilizadas:

  JavaScript

  > ## Descrição códigos:
 
  * Primeiramente, foi criada a classe Atletas, onde serão armazenadas as variáveis de instância contendo os dados
    de cada atleta, e também serão definidos os métdos para executar determinadas ações utilizando os valores contidos
    nas variáveis.
  * Depois, na classe criada, definimos um constructor, onde serão armazenadas as variáveis de instância. O mesmo
    receberá como parâmetro os seguintes dados dos atletas: (Nome, idade, peso, altura, notas). esse valores serão obtidos
    através de <b>consts</b>, que estarão fora da classe, atribuindo os dados a mesma. Ex: <b>const atleta1 = new Atletas(dados dos atletas serão adicionados aqui)</b>.
    Tais dados, como citado anteriormente, serão armazenados nas variáveis de instância. Exemplo: <b>this.nome = nome;</b>.
  * depois de atribuirmos os valores às variáveis, declaramos os seguintes métodos: <b>calculaCategoria()</b>, para definir qual categoria
    o atleta se encaixa; <b>caclculaIMC()</b>, para estimar o índice de massa corporal de cada atleta; <b>calculaMediaValida()</b>, onde será calculada
    a média das notas de cada atleta, excluindo a maior e a menor;
  * <b>calculaCategoria():</b> serão adicionadas condições (if) específicas de idade para cada categoria:
    
    <ol>
    <li>Infantil: 9 a 11 anos</li>
    <li>Juvenil: 12 e 13 anos</li>
    <li>Intermediário: 14 e 15 anos</li>
    <li>Adulto: 16 a 30 anos</li>
    <li>Sem categoria: demais idades</li>
    </ol>
    

* <b>calculaIMC:</b> Retornará o seguinte calculo: peso / (altura x altura). Essa é a fórmula utilizada para calcular o IMC.
* <b>calculaMediaValida():</b> Processos efetuados: 
  <ol>
    <li>Primeiramente, foi declarada uma const denominada NotasOrdenadas, a qual foi utilizada para
  armazenar as notas em ordem crescente, usando <b>.slice()</b> e logo em seguida <b>.sort()</b> para ordená-las. </li>
    <li>Logo em seguida, declara-se a <b>const notasDoMeio</b>, onde, usando o método slice, exclui-se a maior e
    menor nota</li>
    <li>Após isso, declara-se a <b>const soma</b>, onde <b>notasDoMeio</b> serão somadas entre si, e posteriormente divididas pelo seu total 
    de notas, para que assim a média seja retornada</li>
  </ol>
* Os métodos <b>obtemNomeAtleta()</b>, <b>obtemIdadeAtleta()</b>, <b>obtemPesoAtleta()</b>, <b>obtemAlturaAtleta</b> e <b>obtemNotasAtleta()</b>, retornarão, respectivamente,
  dados referentes ao nome, idade, peso, altura e notas dos atletas.
  
  Ex: <b>obtemNomeAtleta(){
      return this.nome;
  }</b>

* Os métodos <b>obtemCategoria()</b>, <b>obtemIMC()</b> e <b>obtemMediaValida()</b> retornarão os dados obtidos através dos métodos <b>calculaCategoria()</b>, <b>calculaIMC()</b> e <b>calculaMediaValida()</b>.
  Ex: <b>obtemCategoria(){
    return this.calculaCategoria()
  }</b>

* Por fim, será declarado o método <b>exibeDados()</b>, onde o mesmo será usado para exibir no console todos métodos que começam com <b>obtem</b> em seu nome. 
 Ex: console.log(`Nome: ${this.obtemNomeAtleta()}`). Para que ele exiba os dados dos atletas no cosnsole de maneira correta, relaciona-se ao método <b>exibeDados</b>
 as consts <b>atleta1</b>, <b>atleta2</b>, <b>atleta3</b> e <b>atleta4</b>, as quais estão fora da classe e que também foram usadas para adicionar os valores na classe <b>Atletas</b>.
 Ex: <b>atleta1.exibeDados()</b>.
    
    
