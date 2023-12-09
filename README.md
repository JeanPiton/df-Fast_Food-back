# Fast_Food - Back-end

Back-end para o desafio técnico da vaga full stack da Devio. <a href="https://fast-food-back.onrender.com">Demo</a>

## Rotas

<details>
<summary>GET /health</summary>
<summary>Checa o funcionamento da API</summary>
-Output: Status 200 (OK)
</details>
<details>
<summary>GET /type</summary>
<summary>Todos os tipos</summary>
-Output: array de tipos e status 200 (OK)
  
```bash
  [
    {
      id: number,
      name: string,
    	image: string
    },
  ]
```
</details>
<details>
<summary>GET /menu</summary>
<summary>Todos os itens do menu</summary>
-Input: query params name e type para filtrar por conter no nome e ser do tipo respectivamente
-Output: array de itens e status 200 (OK)
  
```bash
  [
    {
      id: number,
      name: string,
      desc: string,
      sdesc: string,
      price: number,
      image: string,
      typeId: number,
      selled: number,
      extra: [
        {
          id: number,
          name: string,
          image: string,
          price: number,
          desc: string
        }
      ],
      type: {
        id: number,
        name: string,
        image: string
      }
    },
  ]
```
</details>
<details>
<summary>GET /order/code</summary>
<summary>Retorna o id do último pedido</summary>
-Output: o número do id do último pedido ou 0 se não houver nenhum e status 200 (OK)
  
```bash
  {
    code: number
  }
```
</details>
<details>
<summary>GET /order/todo</summary>
<summary>Retorna todos os pedidos não terminados</summary>
-Output: array de pedidos e status 200 (OK)
  
```bash
  [
    {
      id: number,
		  name: string,
		  orders: Json[]
      price: number,
      done: false,
      updatedAt: Date
    }
  ]
```
</details>
<details>
<summary>GET /order/done</summary>
<summary>Retorna todos os pedidos terminados</summary>
-Output: array de pedidos e status 200 (OK)
  
```bash
  [
    {
      id: number,
		  name: string,
		  orders: Json[]
      price: number,
      done: true,
      updatedAt: Date
    }
  ]
```
</details>
<details>
<summary>PUT /order/finish/:id</summary>
<summary>Marca o pedido do id como terminado</summary>
-Input: `/order/finish/id` onde id: Integer
-Output: status 200 (OK) quando correto, status 400 (BAD_REQUEST) quando id inválido ou status 404 (NOT_FOUND) quando id não existe
</details>
<details>
<summary>POST /order</summary>
<summary>Cria um pedido</summary>
-Input: nome, preço e pedido

```bash
  {
    name: string,
    price: number,
    order: Json[]
  }
```
  
-Output: pedido criado e status 201 (CREATED), status 400 (BAD_REQUEST) quando input inválido
  
```bash
  {
  	id: number,
    name: string,
    orders: Json[],
    price: number,
    done: boolean //default false
    updatedAt: Date
  }
```
</details>
<details>
<summary>DELETE /order/delete/:id</summary>
<summary>Deleta um pedido</summary>
-Input: `/order/delete/id` onde id: Integer
-Output: status 201 (CREATED), status 400 (BAD_REQUEST) quando input inválido
</details>

## Como rodar
Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

1. Clonar o repositório;
2. Baixar as dependências necessárias com o comando: `npm i`;
3. Criar um banco de dados PostgreSQL com o nome que quiser;
4. Configurar o arquivo `.env.development` com base no `.env.example`;
5. Rode todas migrations: `npm run dev:migration:run`;
6. Seed db (opcional): `npm run dev:seed`;
7. Rode o back-end em modo de desenvolvimento: `npm run dev`;

## Como rodar testes

1. Siga os passos da última sessão;
2. Configure o arquivo `.env.test` com base no `.env.example`;
3. Rode todas migrations: `npm run test:migration:run`;
4. Rode os test: `npm run test`;

## Building e rodando em production

```bash
npm run build
npm start
```
