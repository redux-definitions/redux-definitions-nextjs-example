import React, { Component } from 'react'
import { configureStore } from 'store'
import withRedux from 'utils/withRedux'
import Todos from 'components/Todos'

@withRedux(configureStore)
export default class Page extends Component {
  render() {
    return (
      <Todos />
    )
  }
}
