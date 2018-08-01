import { createReducers, Definitions } from 'redux-enterprise'

const { Collection, Field, Flag, Index } = Definitions

const { actions, selectors, reducers } = createReducers({
  todoList: {
    todos: Collection({
      initialState: [{
        id: '22324cd9-2b34-4c22-aac3-17ae07fe7603',
        text: 'Take out the trash'
      }, {
        id: '249210a3-7335-4028-958f-38d8362dad7b',
        text: 'Pay electric bill'
      }, {
        id: '9a76053b-9bfb-46f2-ad5a-1bad9c694323',
        text: 'Schedule doctor appointment'
      }]
    }),
    selectedIds: Index,
    completedIds: Index
  },
  todoEditor: {
    isEditing: Flag,
    editingId: Field,
    editingValue: Field
  },
})

export {
  actions,
  selectors,
  reducers
}
