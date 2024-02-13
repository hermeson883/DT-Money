import { createContext, ReactNode, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  createdAt: string
  price: number
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode // Qualquer coisa do react é aceitavel com essa propriedade
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  async function loadTransaction() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransaction(data)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
