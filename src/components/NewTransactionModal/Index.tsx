import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { TransactionsContext } from '../../context/TransctionsContext'
import {
  CloseButton,
  Content,
  Overlay,
  TransctionType,
  TransctionTypeButton,
} from './style'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransactions
    },
  )

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income', // valor padrão do campo type é income
    },
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const { category, description, price, type } = data
    await createTransactions({ category, description, price, type })
    reset()
    // await new Promise((resolve) => setTimeout(resolve, 2000)) simular um delay
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
            autoComplete="off"
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
            autoComplete="off"
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              console.log(field) // O render me devolve varias informaçõs do formulário
              return (
                <TransctionType
                  onValueChange={field.onChange} // sempre que eu alterar o campo
                  value={field.value} // ele irá colocar o valor daquele campo aqui
                >
                  <TransctionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransctionTypeButton>
                  <TransctionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransctionTypeButton>
                </TransctionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
