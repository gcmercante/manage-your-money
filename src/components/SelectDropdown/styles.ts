import * as Select from '@radix-ui/react-select'
import styled from 'styled-components'

export const Trigger = styled(Select.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;

  &[data-placeholder] {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const Icon = styled(Select.Icon)`
  color: ${(props) => props.theme['gray-300']};
`

export const Content = styled(Select.Content)`
  overflow: hidden;
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`
export const Viewport = styled(Select.Viewport)`
  padding: 1rem;
`

export const ScrollUpButton = styled(Select.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  cursor: default;
  padding: 1rem;
`

export const ScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  cursor: default;
  padding: 1rem;
`
