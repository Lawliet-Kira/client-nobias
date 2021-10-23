const { Client }  = require('pg');

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'nobias',
  password: 'postgres',
  port: 5433,
}
const client = new Client(connectionData);

client.connect()
export const insert = () => (
    client.query('INSERT INTO public.chat (1, 2, 3, 2, 2, 3) values ( ,);')
    .catch(err => {
        client.end()
    })
);

const createMerchant = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body
    client.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}

export default insert;