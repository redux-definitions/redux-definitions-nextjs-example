import React, { Component } from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import { Container } from './styled'

export default class Todos extends Component {
  render() {
    return (
      <Container>
        <Header />
        <TodoList />
        <Footer />
      </Container>
    )
  }
}
