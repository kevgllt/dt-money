import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 7000,
          createdAt: new Date('2021-06-23 10:00:00'),
        },
        {
          id: 2,
          title: 'king Hamburguer duble cheddar artesanal extreme boulevard grill',
          type: 'withdraw',
          category: 'Comida',
          amount: 100,
          createdAt: new Date('2021-06-23 10:10:00'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
