## NodeStore 
  Sistema de compra de produtos desenvolvido em ReactJS e TypeScript

### Telas

Home 

<img src="./public/images/home.png" width="500px">

Cadastro e listagem de produtos

<img src="./public/images/cadastro_e_listagem_de_produtos.png" width="500px">

Compra e listagem de compras

<img src="./public/images/compra_e_listagem_de_compras.png" width="500px">

Detalhes de produto 

<img src="./public/images/detalhes_do_produto.png" width="500px">

Detalhes de compra 

<img src="./public/images/detalhes_da_compra.png" width="500px">

Edição de produto

<img src="./public/images/edicao_de_compra.png" width="500px">

Edição de compra

<img src="./public/images/edicao_de_compra.png" width="500px">

### Requisitos para utilização do sistema
  - Node
  - Docker 
  - MySQL

### 1. Instalar as depedências.
  ```npm install```
	ou
  ```yarn```

### 2. Rodar a imagem do docker para iniciar o banco de dados:
  ```docker-compose up -d```

### 3. Criar um arquivo ".env" na raiz do projeto

<img src="./public/img/example_env.png" width="500px">


### 4. Copiar os conteúdo do arquivo ".env.example" localizado na raiz do projeto e
   colar no arquivo ".env" criado na etapa anterior.

### 5. Rodar o comando abaixo para realizar as migrações para o banco de dados que
   foi criado na etapa "2".
  ```npx prisma migrate dev```
	ou
  ```yarn prisma migrate dev```

### 6. Rodar o sistema
  ```npm start```
	ou
  ```yarn start```
