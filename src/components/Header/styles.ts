import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface HeaderTabProps {
  $current?: true | undefined
}

export const HeaderTab = styled(Link)<HeaderTabProps>`
  font: 700 1.25rem Poppins, sans-serif;
  color: ${(props) => props.theme['gray-100']};
  text-decoration: none;
  box-shadow: ${(props) =>
    props.$current && `0 2px 0 ${props.theme['green-500']}`};
`
