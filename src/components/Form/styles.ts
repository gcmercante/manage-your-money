import styled from 'styled-components'

interface FormContainerProps {
  variant?: 'default' | 'horizontal'
}

export const FormContainer = styled.form<FormContainerProps>`
  margin-top: 1rem;
  display: flex;

  ${(props) =>
    props.variant !== 'horizontal' &&
    `
    flex-direction: column;
    align-items: center;
  `}

  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;

    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  button {
    display: flex;
    align-items: center;
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
    cursor: pointer;

    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

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
`
