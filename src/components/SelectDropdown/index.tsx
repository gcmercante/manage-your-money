import * as Select from '@radix-ui/react-select'
import { CaretDown, CaretUp } from 'phosphor-react'
import { SelectItem } from './SelectItem'
import {
  Content,
  ScrollDownButton,
  ScrollUpButton,
  Trigger,
  Viewport
} from './styles'

export function SelectDropdown() {
  return (
    <Select.Root>
      <Trigger aria-label="Expense type">
        <Select.Value placeholder="Select an expense type..." />
        <Select.Icon>
          <CaretDown size={16} />
        </Select.Icon>
      </Trigger>
      <Select.Portal>
        <Content>
          <ScrollUpButton>
            <CaretUp size={16} />
          </ScrollUpButton>

          <Viewport>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Viewport>

          <ScrollDownButton className="SelectScrollButton">
            <CaretDown size={16} />
          </ScrollDownButton>
        </Content>
      </Select.Portal>
    </Select.Root>
  )
}
