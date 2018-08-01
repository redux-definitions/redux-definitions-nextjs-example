import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  padding: 15px 35px;
  color: rgba(0,0,0,0.8);
  ${({ isCompleted }) => isCompleted && `
    text-decoration: line-through;
    color: rgba(0,0,0,0.4);
  `}
`

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  left: 10px;
  top: 15px;
  cursor: pointer;
`
export const Complete = styled.span`
  position: absolute;
  right: 10px;
  top: 15px;
  cursor: pointer;
`
