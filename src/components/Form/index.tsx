import { ReactNode } from 'react'
import { FormContainer } from './styles'

interface FormProps {
  children: ReactNode
  variant?: 'default' | 'horizontal'
}

export function Form({ children, variant }: FormProps) {
  return <FormContainer variant={variant}>{children}</FormContainer>
}
