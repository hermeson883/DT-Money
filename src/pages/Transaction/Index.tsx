import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header/Index'
import { Summary } from '../../components/Header/Summary/Index'
import { SearchForm } from '../../components/SearchForm/Index'
import { TransactionsContext } from '../../context/TransctionsContext'
import { priceFormatter } from '../../utils/formatter'
import { PriceHighlight, TransactionContainer, TransactionTable } from './style'
export function Transaction() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' ? '- ' : ''}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
