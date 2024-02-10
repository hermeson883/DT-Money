import * as Dialog from '@radix-ui/react-dialog'
import {
  Overlay,
  Content,
  CloseButton,
  TransctionTypeButton,
  TransctionType,
} from './style'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="Number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransctionType>
            <TransctionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransctionTypeButton>
            <TransctionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransctionTypeButton>
          </TransctionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
