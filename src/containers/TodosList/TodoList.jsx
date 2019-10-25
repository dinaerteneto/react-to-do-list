import React from 'react'
import { List } from 'semantic-ui-react'
import {sortableContainer, sortableElement} from 'react-sortable-hoc'
import arrayMove from 'array-move'
import CheckList from '../../components/CheckList'
import TodoListForm from './TodoListForm'

const SortableItem = sortableElement((value) => {
    const item = value.value
    console.log(item, value)
    return (
      <CheckList 
        key={item.index} 
        label={item.label} 
        checked={item.checked} 
        onChange={value.onChange}  
      />
    )
  }
)

const SortableContainer = sortableContainer(({children}) => {
  return <List>{children}</List>
})

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      term: '',
      checklists: []
    }
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({checklists}) => ({
      checklists: arrayMove(checklists, oldIndex, newIndex),
    }))
  }

  changeHandle = (event) => {
    console.log('changeHandle')
    this.setState({ term: event.target.value })
  }

  submitHandle = (event) => {
    console.log('submitHandle')
    const {checklists, term} = this.state
    event.preventDefault()
    this.setState({
      term: '',
      checklists: [...checklists, {
        checked: false,
        label: term
      }]
    })
  } 

  toggleComplete = (e, index) => {
    console.log(`entrou no toggleComplete: ${index}`)
    const {checklists} = this.state
    const itemUpd = checklists.map((item, i) => { 
      if(i === index) {
        return {...item, checked: !item.checked}
      }
      return item
    })

    this.setState({checklists: [...itemUpd]})
  }

  render() {
    const {checklists} = this.state

    return (
      <div className="TodoList">

        <TodoListForm term={this.state.term} changeHandle={this.changeHandle} submitHandle={this.submitHandle} />

        <SortableContainer onSortEnd={this.onSortEnd}>
          {checklists.map((value, index) => (
            <SortableItem key={index} index={index} value={value} onChange={(e) => this.toggleComplete(e, index)} />
          ))}
        </SortableContainer>        


      </div>
    )
  }

}

export default TodoList