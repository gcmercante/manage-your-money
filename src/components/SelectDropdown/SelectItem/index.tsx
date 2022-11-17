import * as Select from '@radix-ui/react-select'
import { Check } from 'phosphor-react'
import { ReactNode } from 'react'
import { Item, ItemIndicator } from './styles'

interface SelectItemProps {
  children: ReactNode
  value: string
}

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <Item {...props}>
      <Select.ItemIndicator asChild>
        <ItemIndicator>
          <Check size={16} />
        </ItemIndicator>
      </Select.ItemIndicator>
      <Select.ItemText>{children}</Select.ItemText>
    </Item>
  )
}
