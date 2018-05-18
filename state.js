import { defineState, StateTypes } from 'redux-enterprise'

const { Collection, Field, Flag, Index } = StateTypes

const { reducers } = defineState({
  todos: Collection({
    initialState: [{
      id: '1',
      text: 'wew'
    }, {
      id: '2',
      text: 'lad'
    }, {
      id: '3',
      text: 'wew'
    }]
  }),
  selected: Index,
  todoEditor: {
    isEditing: Flag,
    text: Field,
    editingId: Field,
  },
})

export {
  reducers
}
