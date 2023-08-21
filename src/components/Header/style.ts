import { styled } from 'styled-components'
import { defaultThemes } from '../../styles/default'

export const HeaderContainer = styled.header`
  background: ${defaultThemes['gray-900']};
  padding: 2.5rem 0 7.5rem;
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

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${defaultThemes['green-500']};
  color: ${defaultThemes.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${defaultThemes['green-700']};
  }
`
