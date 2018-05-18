import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid black;
  padding: 5px 10px;
  ${({ isSelected }) => isSelected && 'background: green;'}
`

export const Form = styled.form`
`

export const Input = styled.input.attrs({
  type: 'text',
  value: props => props.text
})`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  padding: ${props => props.padding}
`

export const Button = styled.button.attrs({
  type: 'submit',
  value: 'Submit'
})`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;
