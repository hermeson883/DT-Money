import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../context/TransctionsContext'

const serchFormSchema = z.object({
  query: z.string(),
}) // tipando os elementos

type SearchFormInputs = z.infer<typeof serchFormSchema> // extraindo a tiipagem do zod

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }, // valor booleano que irá dizer se o formulário está sendo submitado
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(serchFormSchema), // irá validar o formulario
  })

  // data irá receber os campos do formulário
  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        <span>Buscar</span>
      </button>
    </SearchFormContainer>
  )
}
