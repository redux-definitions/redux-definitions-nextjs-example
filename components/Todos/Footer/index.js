import React, { Component } from 'react'
import { connect } from 'react-redux'
import { number } from 'prop-types'
import { Selectors } from 'redux-enterprise'
import { Container } from './styled'

@connect((state) => ({
  todoCount: Selectors.todoList.todos.count(state),
  completedCount: Selectors.todoList.completedIds.count(state)
}))
export default class Footer extends Component {
  static propTypes = {
    todoCount: number.isRequired,
    completedCount: number.isRequired,
  }

  render() {
    const {
      todoCount,
      completedCount
    } = this.props

    return (
      <Container>
        {`${todoCount} todos, ${completedCount} completed`}
      </Container>
    )
  }
}
