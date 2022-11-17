import styled from 'styled-components'

export const ExpensesContent = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;

    button {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      justify-content: center;

      border: 0;
      padding: 1rem;
      background: transparent;

      border: 1px solid ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme['green-300']};
      font-weight: bold;
      border-radius: 6px;

      transition: background-color 0.2s, color 0.2s, border-color 0.2s;

      cursor: pointer;

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-500']};

        border-color: ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme.white};
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`
export const ExpensesTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  th {
    text-align: start;
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 0px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 0px;
    }
  }

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
