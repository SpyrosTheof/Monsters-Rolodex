import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './components/search-box/search-box.style.css'


class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }

    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(monsterAdes=>this.setState({monsters:monsterAdes}))
  }

  handleChange=(e)=>{
      this.setState({searchField:e.target.value})
      }


  render(){
    let {monsters,searchField}=this.state;
    let filteredMonsters=monsters.filter((monster)=>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    monsters=filteredMonsters;
    return (
      <div className="App">
        <h1>Monsters</h1>
          <SearchBox handleChange={this.handleChange}
     
   placeholder='Enter Monster Name'/>

        <CardList className="card-list" monsters={filteredMonsters}>
        
          </CardList>
        
      </div>
    );
  }
}

export default App;
