import React, { Component } from 'react'
import { func, string } from 'prop-types'
import { connect } from 'react-redux'
import { Actions, Selectors } from 'redux-enterprise'
import { Input } from './styled'

@connect((state) => {
  const editingId = Selectors.todoEditor.editingId.get(state)
  const todo = Selectors.todoList.todos.find(state, { id: editingId })
  return {
    editingId,
    editingValue: todo && todo.text || ''
  }
})
export default class Editor extends Component {
  static propTypes = {
    dispatch: func.isRequired,
    editingId: string.isRequired,
    editingValue: string.isRequired
  }

  componentDidMount() {
    this.input.focus()
  }

  setValue = (e) => {
    const { dispatch, editingId } = this.props

    dispatch(Actions.todoList.todos.update({
      id: editingId,
      text: e.target.value
    }))
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.unsetEditing()
    }
  }

  unsetEditing = () => {
    const { dispatch } = this.props

    dispatch(Actions.todoEditor.isEditing.unset())
    dispatch(Actions.todoEditor.editingValue.clear())
  }

  render() {
    const { editingValue } = this.props

    return (
      <Input
        innerRef={(e) => this.input = e}
        value={editingValue}
        onKeyUp={this.onKeyUp}
        onBlur={this.unsetEditing}
        onChange={this.setValue} />
    )
  }
}

