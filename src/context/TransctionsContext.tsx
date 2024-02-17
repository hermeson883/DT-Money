import { ReactNode, useEffect, useState, useCallback } from 'react'
import { API } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  createdAt: string
  price: number
}

interface createTransactionsInput {
  description: string
  category: string
  price: number
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransactions: (data: createTransactionsInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode // Qualquer coisa do react é aceitavel com essa propriedade
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await API.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransaction(response.data)
  }, [])

  const createTransactions = useCallback(
    async (data: createTransactionsInput) => {
      const { description, price, category, type } = data
      const response = await API.post('transactions', {
        description,
        category,
        price,
        type,
        createdAt: new Date().toLocaleDateString(),
      })
      setTransaction((state) => [...state, response.data])
    },
    [],
  )
  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
