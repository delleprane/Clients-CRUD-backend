## Sobre mim: 
### Olá, me chamo Fernanda ! 👋 
 Sou desenvolvedora Front-end React.js com conhecimentos em JavaScript e TypeScript. </br>
 Formada em Marketing e com especialização em marketing digital estou atualmente em especialização em Segurança da Informação pela FMU
### Contatos:

<div>
<a href = "mailto:fernandadelleprane@gmail.com"><img loading="lazy" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" ></a>
<a href="https://www.linkedin.com/in/fernanda-delleprane" target="_blank"><img loading="lazy" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
</div>

# Projeto Backend de Cadastro de Clientes

Este projeto é um backend desenvolvido em TypeScript que implementa funcionalidades de cadastro, listagem e deleção de clientes. A aplicação utiliza o Fastify como framework de servidor, Prisma como ORM (Object-Relational Mapping) e MongoDB Atlas como banco de dados.

### Funcionalidades
- **Cadastro de Clientes**: Permite criar novos registros de clientes no banco de dados.
- **Listagem de Clientes**: Retorna a lista de todos os clientes cadastrados.
- **Deleção de Clientes**: Remove clientes específicos do banco de dados com base em seu ID.

## Tecnologias Utilizadas

- <img width=40px src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /> **TypeScript**: Linguagem utilizada para o desenvolvimento do projeto.
- <img width=40px src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg" /> **Fastify**: Framework web rápido e de baixa sobrecarga.
- <img width=40px src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" /> **Prisma**: ORM que facilita a interação com o banco de dados.
-  <img width=40px src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" /> **MongoDB Atlas**: Banco de dados NoSQL escalável e gerenciado na nuvem.
## Estrutura do Projeto
```bash
.
├── src
│   ├── controllers        # Controladores que gerenciam as requisições e respostas
│   │   └── CreateCustomerController.ts
│   │   └── DeleteCustomerSController.ts
│   │   └── ListCustomerController.ts
│   ├── services           # Lógica de negócios e interações com o banco de dados
│   │   └── CreateCustomerService.ts
│   │   └── DeleteCustomerService.ts
│   │   └── ListCustomerService.ts
├── .env                   # Arquivo de variáveis de ambiente (não incluído no Git)
├── prisma
│   └── schema.prisma      # Esquema do Prisma ORM
└── index.json           # Utilitários como a configuração do Prisma Client
```

## Configuração e Instalação
```

git clone https://github.com/delleprane/Clients-CRUD-backend.git

```

```

cd Clients-CRUD-backend
npm install

```

### Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```

 DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority"


```

### Configuração do Prisma:
```

npx prisma generate

```

### Inicie o servidor:
``` 

npm run dev

  ```

## Uso:
Após iniciar o servidor, você pode utilizar ferramentas como Postman ou Insomnia para fazer requisições HTTP aos seguintes endpoints:
- **POST /customer**:  Cadastrar um novo cliente.
- **GET /customers**: Listar todos os clientes.
- **DELETE /customer/**:  Deletar um cliente por ID.

- ## Deploy
### O projeto está disponível online em </br>
https://clients-crud-backend.onrender.com
