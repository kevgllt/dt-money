import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);
  
  
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>18/06/2021</td>
          </tr>

          <tr>
            <td>Coleta RJM</td>
            <td className="withdraw">- R$500</td>
            <td>Coleta</td>
            <td>20/06/2021</td>
          </tr>

        </tbody>
      </table>
    </Container>

  );
}