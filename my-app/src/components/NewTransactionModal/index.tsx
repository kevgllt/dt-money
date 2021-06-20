import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import Modal from 'react-modal';

import { Container, TransactionTypeContainer } from './styles';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

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

      <Container>
        <h2>Register Transaction</h2>

        <input 
        placeholder="Title" 
        />

        <input 
        placeholder="Price"
        type="number" 
        />

        < TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrance" />
            <span>Entrance money</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="Entrance" />
            <span>Exit money</span>
          </button>

        </TransactionTypeContainer>

        <input 
          placeholder="Category" 
        />

        <button type="submit">
          Register
        </button>
      </Container>

    </Modal>
  );
}