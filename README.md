# Dados dos atletas
>Status: conculído

>### Descrição funcionalidade:
  O projeto consiste em coletar dados de atletas, e executar os senguintes procedimentos:
  Calcular o IMC(índice de massa corporal), a categoria que cada atleta se
  encaixa(Infantil, Juvenil, Intermediário, Adulto) ou sem categoria, se o atleta possuir
  idade superior a 30 anos e calcular a média das notas dos atletas, excluindo a menor e maior nota obtida.

  >### Tecnologias Utilizadas
  JavaScript

  >### Descrição códigos
  * Primeiramente, foi criada a classe Atletas, onde serão armazenadas as variáveis de instância contendo os dados
    de cada atleta, e também serão definidos os métdos para executar determinadas ações utilizando os valores contidos
    nas variáveis.
  * Depois, na classe criada, definimos um constructor, onde serão armazenadas as variáveis de instância. O mesmo
    receberá como parâmetro os seguintes dados dos atletas: (Nome, idade, peso, altura, notas). esse valores serão obtidos
    através de consts que estarão fora da classe, atribuindo os dados a mesma. tais dados, como citado anteriormente, serão
    armazenados nas variáveis de instância. Exemplo: this.nome = nome;.
  * depois de atribuirmos os valores às variáveis, declaramos os seguintes métodos: caclculaCategoria(), para definir qual categoria
    o atleta se encaixa; caclculaIMC(), para estimar o índice de massa corporal de cada atleta; calculaMediaValida(), onde será calculada
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
* <b>calculaMediaValida():</b>  
    
    
