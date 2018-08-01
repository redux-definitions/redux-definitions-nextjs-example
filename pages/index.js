import React, { Component } from 'react'
import { configureStore } from 'store'
import withRedux from 'utils/withRedux'
import Todos from 'components/Todos'
import { Link } from './styled'

@withRedux(configureStore)
export default class Page extends Component {
  render() {
    return (
      <div>
        <Todos />
        <Link>
          <a href="https://github.com/redux-enterprise/redux-enterprise">Built with Redux Enterprise</a>
        </Link>
      </div>
    )
  }
}
