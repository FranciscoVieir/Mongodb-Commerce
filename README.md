# Orientações

<details>
  <summary>
    <strong>‼️ Antes de começar:</strong>
  </summary><br>

  1. Clone o repositório

  - `git clone git@github.com:FranciscoVieir/Mongodb-Commerce.git`.

  - Entre na pasta do repositório que você acabou de clonar:
    - `cd Mongodb-Commerce`

</details>

# Desafios

1 - Retorne a quantidade de documentos inseridos na coleção `produtos`

2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o `nome` e a quantidade de lanches `vendidos`

3 - Retorne o lanche mais vendido, mostrando apenas o `nome` e a quantidade do lanche mais vendido

4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`, mostrando apenas o nome e a quantidade de lanches `vendidos` em ordem crescente

5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`

6 - Retorne o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`

7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista

8 - Delete os lanches com menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco

9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500`

10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`

11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`

12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`

13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo

14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`

- Para isso, escreva a query no arquivo `desafio14.js`

- Sua query deve retornar apenas os campos `nome`, `ingredientes` e `valoresNutricionais`.

15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo

Para isso, escreva no arquivo `desafio15.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua o campo `avaliacao` do tipo `NumberInt`, com o valor `0` em todos os documentos da coleção.

2. Crie uma query que incremente o valor do campo `avaliacao` em `5` em todos os sanduíches de carne do tipo `bovino`. 
👀**De olho na dica**: utilize como filtro o campo `tags`.

3. Crie uma query que incremente o valor do campo `avaliacao` em `3` em todos os sanduíches de `ave`.

4. Crie uma query que retorne o `nome` e `avaliacao` de todos os sanduíches.

16 - Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac`

Para isso, escreva no arquivo `desafio16.js` duas queries, **nesta ordem**:

1. Crie uma query que inclua somente ao sanduíche `Big Mac` o campo `ultimaModificacao` com a data corrente. Para a data corrente faça uso do tipo `date` ou `timestamp`.

2. Crie uma query que retorne o `nome` de todos os documentos em que o campo `ultimaModificacao` existe.

17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`

Para isso, escreva no arquivo `desafio17.js` duas queries, **nesta ordem**:

1. Crie uma query que insira na coleção `resumoProdutos` um documento com os campos: `franquia` com o valor `McDonalds` e `totalProdutos` com o valor sendo a quantidade total de produtos registrados na coleção `produtos`.

2. Crie uma query que retorne os campos `franquia` e o `totalProdutos` da coleção `resumoProdutos`, resultantes da primeira query.

18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`

Para isso, escreva no arquivo `desafio18.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a inclusão de `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

19 - Remova o item `cebola` de todos os sanduíches

Para isso, escreva no arquivo `desafio19.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do item `cebola` em todos os sanduíches.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

20 - Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo`

Para isso, escreva no arquivo `desafio20.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do **primeiro** `ingrediente` no sanduíche `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

21 - Remova o último `ingrediente` do sanduíche `Cheddar McMelt`

Para isso, escreva no arquivo `desafio21.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do **último** `ingrediente` no sanduíche `Cheddar McMelt`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

22 - Adicione a quantidade de vendas dos sanduíches por dia da semana

Para isso, escreva no arquivo `desafio22.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua um campo `vendasPorDia` em todos os sanduíches. O valor deste campo deverá ser um _array_ com sete posições. Cada uma delas representará um dia da semana, e cada posição iniciará em `0`. O _array_ deve seguir a estrutura do exemplo abaixo:
  ```json
  "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
  ```

> O primeiro item desse _array_ representa as vendas no **domingo**, o segundo item representa as vendas na **segunda-feira**, e assim sucessivamente até chegar ao último item, que representa as vendas no **sábado**.

2. Crie uma query que incremente as vendas de `Big Mac` às **quartas-feiras** em `60`.

3. Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo `bovino` aos **sábados** em `120`.

4. Crie uma query que retorne o `nome` e `vendasPorDia` de todos os documentos.

23 - Insira os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)

Para isso, escreva no arquivo `desafio23.js` duas queries, **nesta ordem**:

1. Crie uma query que faça tanto a inserção dos valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches. Ordene os valores de `tags` em ordem alfabética ascendente.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

24 - Ordene em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente

Para isso, escreva no arquivo `desafio24.js` duas queries, **nesta ordem**:

1. Crie uma query que faça em todos os documentos a ordenação dos valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente. 
👀**De olho na dica**: mesmo sem adicionar nenhum novo valor, para essa operação é necessário utilizar também o modificador `$each`.

2. Crie uma query que retorne o `nome` e `valoresNutricionais` de todos os documentos.

25 - Adicione o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`

Para isso, escreva no arquivo `desafio25.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a adição do valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

26 - Adicione o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`

Para isso, escreva no arquivo `desafio26.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a adição do valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.
