import { HeaderContainer, HeaderContent, HeaderTab } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>SYM</h1>
        <HeaderTab to="/">Dashboard</HeaderTab>
        <HeaderTab to="/">Goals</HeaderTab>
        <HeaderTab to="/expenses" $current>
          Expenses
        </HeaderTab>
        <span></span>
      </HeaderContent>
    </HeaderContainer>
  )
}
