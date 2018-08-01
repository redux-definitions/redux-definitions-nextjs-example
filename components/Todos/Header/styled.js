import styled from 'styled-components'

export const Container = styled.div`
`

export const Title = styled.div`
  padding: 0 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`

export const BatchActions = styled.div`
  padding: 8px 10px;
  font-size: 14px;
  background: #39BDF3;
  color: white;
  cursor pointer;
  box-shadow: inset 0 0px 5px rgba(0,0,0,0.2);
`

export const Option = styled.span`
  position: relative;
  font-size: 12px;
  position: relative;
  margin-left: 12px;
  top: 3px;
  font-weight: 600;
  float: right;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export const Add = styled.span`
  position: relative;
  float: right;
  top: -2px;
  right: 2px;
  cursor: pointer;
`