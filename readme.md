# Projeto de Conexão com MySQL e Inserção de Registros

Este é um projeto de exemplo que demonstra como conectar-se a um banco de dados MySQL usando Node.js e inserir registros em tabelas específicas. No exemplo, usamos duas tabelas fictícias, `ServicoA_tickets` e `ServicoB_tickets`, e inserimos registros nessas tabelas, bem como em uma tabela `Tickets_Unificados`.

## Pré-requisitos

Antes de executar este projeto, você deve ter o seguinte instalado em sua máquina:

- **Node.js**: [Download](https://nodejs.org/)
- **MySQL Server**: [Download](https://dev.mysql.com/downloads/mysql/)

Certifique-se de que o servidor MySQL esteja em execução e você tenha as credenciais necessárias para acessá-lo.

## Nota:
Foi utilizado o recurso de Promises do Node.js para garantir que todas as inserções de dados sejam concluídas antes de fechar a conexão.

## Configuração

1. Clone este repositório para o seu sistema local:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-projeto
3. Instale as dependências do Node.js usando o npm:
    ```bash
    npm install
4. Edite o arquivo `config.js` para configurar as credenciais do seu banco de dados:
    ```bash
    const config = {
      host: 'localhost',
      user: 'seu_usuario_mysql',
      password: 'sua_senha_mysql',
      database: 'TicketSystem',
    };

    module.exports = config;

5. Substitua `'seu_usuario_mysql'` e `'sua_senha_mysql'` pelas suas credenciais.
   
## Execução
   
   Para executar o projeto e inserir registros nos bancos de dados, você pode usar o seguinte comando:
   
  ```bash
  node seu-arquivo-de-script.js
