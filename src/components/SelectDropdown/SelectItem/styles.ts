import * as Select from '@radix-ui/react-select'
import styled from 'styled-components'

export const Item = styled(Select.Item)`
  line-height: 1;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  position: relative;
  user-select: none;

  &[data-highlighted] {
    outline: none;
    background-color: none;
    color: ${(props) => props.theme['green-500']};
  }
`
export const ItemIndicator = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  left: 0;
  position: absolute;
`
