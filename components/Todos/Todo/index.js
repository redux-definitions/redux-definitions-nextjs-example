import React, { Component } from 'react'
import { func, string, bool } from 'prop-types'
import { connect } from 'react-redux'
import { Actions, Selectors } from 'redux-enterprise'
import { Container } from './styled'

@connect((state, { id }) => ({
  text: Selectors.todos.byId(state, { id }).text,
  isSelected: Selectors.selected.includes(state, { id })
}))
export default class Todo extends Component {
  static propTypes = {
    dispatch: func.isRequired,
    id: string.isRequired,
    text: string.isRequired,
    isSelected: bool.isRequired,
  }

  select = () => {
    const { dispatch, id } = this.props
    dispatch(Actions.selected.toggle(id))
  }

  render() {
    const { text, isSelected } = this.props

    return (
      <Container
        onClick={this.select}
        isSelected={isSelected}>
        {text}
      </Container>
    )
  }
}

