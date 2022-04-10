import React,{Component} from "react"
import Table from './Table'
import Form from './Form'
import Api from "./Api"



class App extends Component {
    // 剥离出来的tbody数据
    state = {
      characters : 
      [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
      ]

    }

    removeCharacter = (index) => {
      const {characters} = this.state
    
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
      })
    }

    // 实际提交该数据并更新父状态
    handleSubmit = (character) => {
      this.setState({characters: [...this.state.characters, character]})
    }

    render() {   
      const { characters } = this.state

      return (
        <div className="App">
          <Table characterData={characters} removeCharacter={this.removeCharacter}/>
          <Form handleSubmit={this.handleSubmit} />
          <Api />
        </div>
      )
    }
}

export default App