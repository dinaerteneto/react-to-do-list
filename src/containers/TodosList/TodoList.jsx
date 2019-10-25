import React from 'react'
import { Form, Label, Input, List } from 'semantic-ui-react'
import CheckList from '../../components/CheckList'

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      term: '',
      checklists: []
    }
  }

  changeHandle = (event) => {
    console.log('entrou aqui no changeHandle')
    this.setState({ term: event.target.value })
  }

  submitHandle = (event) => {
    const {checklists, term} = this.state;
    console.log('entrou aqui no submitHandle')
    event.preventDefault();
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
    const {checklists} = this.state;
    const itemUpd = checklists.map((item, i) => { 
      if(i === index) {
        return {...item, checked: !item.checked}
      }
      return item;
    })

    this.setState({checklists: [...itemUpd]})
  }

  render() {
    const {checklists} = this.state;

    return (
      <div className="TodoList">
        <Form onSubmit={this.submitHandle}>
          <Form.Field>
            <Label>Digite o nome da tarefa que quer adicionar</Label>
            <Input placeholder='Adicionar item na lista' onChange={this.changeHandle} value={this.state.term} />
            <Input type="submit" primary>Incluir</Input>
          </Form.Field>
        </Form>

        <List>
          { checklists.map((item, index) => 
              <CheckList 
                key={index} 
                label={item.label} 
                checked={item.checked} 
                onChange={ (e) => this.toggleComplete(e, index) }
              />
            ) 
          }
        </List>

      </div>
    )
  }

}

export default TodoList