const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'TicketSystem',
});


function inserirServicoA() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM ServicoA_tickets', (err, resultsA) => {
      if (err) {
        reject(err);
      }

      resultsA.forEach((row) => {
        const { ticket_id, usuario_id, data_criacao, descricao, status } = row;
        connection.query(
          'INSERT INTO Tickets_Unificados (servico_origem, usuario_id_origem, data_criacao, descricao, status) VALUES (?, ?, ?, ?, ?)',
          ['ServicoA', usuario_id, data_criacao, descricao, status],
          (err) => {
            if (err) {
              reject(err);
            }
          }
        );
      });
      resolve();
    });
  });
}


function inserirServicoB() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM ServicoB_tickets', (err, resultsB) => {
      if (err) {
        reject(err);
      }

      resultsB.forEach((row) => {
        const { chamado_id, user_id, data_abertura, detalhes, situacao } = row;
        connection.query(
          'INSERT INTO Tickets_Unificados (servico_origem, usuario_id_origem, data_criacao, descricao, status) VALUES (?, ?, ?, ?, ?)',
          ['ServicoB', user_id, data_abertura, detalhes, situacao],
          (err) => {
            if (err) {
              reject(err);
            }
          }
        );
      });
      resolve();
    });
  });
}


connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados estabelecida.');

  
  inserirServicoA()
    .then(() => {
      
      return inserirServicoB();
    })
    .then(() => {
      
      connection.end((err) => {
        if (err) {
          console.error('Erro ao encerrar conexão com o banco de dados:', err);
        }
      });
    })
    .catch((err) => {
      console.error('Erro durante a inserção de registros:', err);
    });
});
