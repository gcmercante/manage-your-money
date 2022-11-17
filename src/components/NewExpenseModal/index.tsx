import * as Dialog from '@radix-ui/react-dialog'

import { X } from 'phosphor-react'
import { SelectDropdown } from '../SelectDropdown'
import { CloseButton, Content, Overlay } from './styles'

export function NewExpenseModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Add new expense</Dialog.Title>
        <form>
          <input type="text" placeholder="Title" required />
          <input type="number" placeholder="Value" required />
          <SelectDropdown />

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <button type="submit">Add</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
