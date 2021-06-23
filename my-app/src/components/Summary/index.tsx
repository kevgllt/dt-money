import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Financial Entrance</p>
          <img src={incomeImg} alt="Comein" />
        </header>
        <strong>R$12,000</strong>
      </div>

      <div>
        <header>
          <p>Financial Exit</p>
          <img src={outcomeImg} alt="Comeout" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$11,500</strong>
      </div>
    </Container>
  );
}