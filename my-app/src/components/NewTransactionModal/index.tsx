import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import Modal from 'react-modal';

import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      category,
      type
    })
  };

  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >

      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register Transaction</h2>

        <input 
        placeholder="Title" 
        value={title}
        onChange={event => setTitle(event.target.value)}
        />

        <input 
        placeholder="Price"
        type="number"
        value={amount}
        onChange={event => setAmount(Number(event.target.value))} 
        />

        < TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('depoist'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income money" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome money" />
            <span>Outcome</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input 
          placeholder="Category" 
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Register
        </button>
      </Container>

    </Modal>
  );
}