import React, { Component } from 'react'
import { connect } from 'react-redux'
import { arrayOf, string } from 'prop-types'
import { Actions, Selectors } from 'redux-enterprise/lib'
import { Container, Title, BatchActions, Option, Add } from './styled'
import uuid from 'uuid/v4'

@connect((state) => ({
  selectedIds: Selectors.todoList.selectedIds.get(state)
}))
export default class Header extends Component {
  static propTypes = {
    selectedIds: arrayOf(string).isRequired
  }

  newTodo = () => {
    const { dispatch } = this.props

    const id = uuid()

    dispatch(Actions.todoList.todos.create({ id }))
    dispatch(Actions.todoEditor.editingId.set(id))
    dispatch(Actions.todoEditor.isEditing.set())
  }

  completeAll = () => {
    const { dispatch, selectedIds } = this.props

    dispatch(Actions.todoList.completedIds.add(selectedIds))
    dispatch(Actions.todoList.selectedIds.reset())
  }

  deleteAll = () => {
    const { dispatch, selectedIds } = this.props

    dispatch(Actions.todoList.todos.remove(selectedIds))
    dispatch(Actions.todoList.selectedIds.reset())
  }

  render() {
    const { selectedIds } = this.props

    return (
      <Container>
        <Title>
          Enterprise Todos
          <Add onClick={this.newTodo}>+</Add>
        </Title>
        {!!selectedIds.length &&
            <BatchActions>
              Actions
              <Option onClick={this.completeAll}>COMPLETE</Option>
              <Option onClick={this.deleteAll}>DELETE</Option>
            </BatchActions>
        }
      </Container>
    )
  }
}
