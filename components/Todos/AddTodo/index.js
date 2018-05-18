import React, { Component } from 'react'
import { func, string, bool } from 'prop-types'
import { connect } from 'react-redux'
import { Actions, Selectors } from 'redux-enterprise'
import { Button, Container, Form, Input } from './styled'

@connect((state) => ({
  text: state.todoEditor.text,
  isEditing: state.todoEditor.isEditing,
  editingId: state.todoEditor.editingId
}))
export default class AddTodo extends Component {
  static propTypes = {
    dispatch: func.isRequired,
    isEditing: bool.isRequired,
    text: string,
    editingId: string
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { dispatch, text } = this.props

    if (!text.trim()) {
      return
    }

    dispatch(Actions.todos.create({ id: '4', text }))
    dispatch(Actions.todoEditor.text.unset())
  }

  onInput = (e) => {
    const { dispatch } = this.props;
    dispatch(Actions.todoEditor.text.set(e.target.value))
  }

  onFocus = () => {
    const { dispatch } = this.props
    dispatch(Actions.todoEditor.isEditing.toggle())
  }

  render() {
    const { text = '', isEditing } = this.props

    return (
      <Container
        isEditing={isEditing}>
        <Form onSubmit={this.onSubmit}>
          <Input onFocus={this.onFocus} onInput={this.onInput} />
          <Button>Add</Button>
        </Form>
      </Container>
    )
  }
}

