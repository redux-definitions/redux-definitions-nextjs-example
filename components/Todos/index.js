import React, { Component } from 'react'
import { connect } from 'react-redux'
import { arrayOf, string } from 'prop-types'
import { Actions, Selectors } from 'redux-enterprise'
import { Button, Container } from './styled'
import Todo from './Todo'
import AddTodo from './AddTodo'

@connect((state) => ({
  todoIds: Selectors.todos.ids(state)
}))
export default class Todos extends Component {
  static propTypes = {
    todoIds: arrayOf(string).isRequired
  }

  render() {
    return (
      <Container>
        {this.props.todoIds.map((id) =>
          <Todo id={id} key={id} />
        )}
        <AddTodo />
      </Container>
    )
  }
}
