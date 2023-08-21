import { Header } from '../../components/Header/Index'
import { Summary } from '../../components/Header/Summary/Index'
import { TransactionContainer, TransactionTable } from './style'
export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td>Desenvolvimento movel</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td>Desenvolvimento movel</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td>Desenvolvimento movel</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td>Desenvolvimento movel</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
