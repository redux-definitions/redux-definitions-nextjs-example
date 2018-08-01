import React, { Component } from 'react'
import { func, string, bool } from 'prop-types'
import { connect } from 'react-redux'
import { Actions, Selectors } from 'redux-enterprise'
import { Container, Checkbox, Complete } from './styled'
import Editor from './Editor'

@connect((state, { id }) => ({
  text: Selectors.todoList.todos.find(state, { id }).text,
  isSelected: Selectors.todoList.selectedIds.includes(state, { id }),
  isCompleted: Selectors.todoList.completedIds.includes(state, { id }),
  isEditing: Selectors.todoEditor.isEditing.get(state),
  editingId: Selectors.todoEditor.editingId.get(state)
}))
export default class Todo extends Component {
  static propTypes = {
    dispatch: func.isRequired,
    id: string.isRequired,
    text: string.isRequired,
    isSelected: bool.isRequired,
    isCompleted: bool.isRequired,
  }

  setSelected = () => {
    const { dispatch, id } = this.props

    dispatch(Actions.todoList.selectedIds.toggle(id))
  }

  setCompleted = () => {
    const { dispatch, id } = this.props

    dispatch(Actions.todoList.completedIds.toggle(id))
  }

  setEditing = () => {
    const { dispatch, id } = this.props

    dispatch(Actions.todoEditor.editingId.set(id))
    dispatch(Actions.todoEditor.isEditing.set())
  }

  render() {
    const {
      id,
      text,
      isSelected,
      isCompleted,
      isEditing,
      editingId
    } = this.props

    return (
      <Container
        isSelected={isSelected}
        isCompleted={isCompleted}>
        <Checkbox
          onClick={this.setSelected}
          checked={isSelected} />
        {isEditing && editingId === id
          ? <Editor />
          : <span onClick={this.setEditing}>{text || '...'}</span>
        }
        <Complete
          onClick={this.setCompleted}
          checked={isCompleted}>
          ✔
        </Complete>
      </Container>
    )
  }
}

