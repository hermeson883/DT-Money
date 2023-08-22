import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content } from './style'

export function Index() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="Number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>

        <Dialog.Close />
      </Content>
    </Dialog.Portal>
  )
}
