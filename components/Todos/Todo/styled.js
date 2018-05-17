import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid black;
  padding: 5px 10px;
  ${({ isSelected }) => isSelected && 'background: green;'}
`
