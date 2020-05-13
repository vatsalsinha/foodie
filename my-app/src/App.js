import React from 'react';
import logo from './avatar.png';
import './App.css';


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      newitem: "",
      list: [],
    }
  }

  additem(todoValue)
  {
    if(todoValue !== "")
    {
      const newitem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list]; //append all the values of the list array in this new list array
      list.push(newitem);
      this.setState({
        list,
        newitem: ""
      }); //whenever you want to update anything inside the state, you never touch the state directly. To do so we use the setState method
    }
  }

  deleteitem(id)
  {
    const list = [...this.state.list];
    const ulist = list.filter(item => item.id !== id);
    this.setState({list: ulist})
  }
  updateinput(input)
  {
    this.setState({newitem: input});
  }

  render()
  {
    return(
      <div>
      <a href = "/"> home </a>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <img src = {logo}  className = "logo" width = "100" height = "100"/>
        <h1 className= "app-title"> Foodie </h1>
        <div>
          to do list for Restaurants....
          <br/>
          <form className = "form-signin">
          <input type = "text" className = "form-control" placeholder = "Name of the Restaurant" value = {this.state.newitem} required onChange = {e => this.updateinput(e.target.value)}/>
          <button className = "btn btn-lg btn-primary btn-block" onClick = {() => this.additem(this.state.newitem)}> Add </button>
          <div className = "list">
            <ul>
              {this.state.list.map(item => {return(
                  <li key = {item.id}> <input type="checkbox" name = "idDone" checked = {item.isDone} onchange={()=>{}}/> <h6 className = "display-6" > {item.value} </h6> <button className = "btn btn-lg btn-primary btn-block" onClick={()=> this.deleteitem(item.id)}>Delete</button></li>
                )})}
              
            </ul>
          </div>  
          </form>
        </div> 
      </div>
      );
  }
}
export default App; 