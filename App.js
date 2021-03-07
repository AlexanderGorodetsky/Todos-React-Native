import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from "./Components/Header";
import Input from "./Components/Input";
import Button from "./Components/Buttons";
import TodoList from "./Components/TodoList";
import TabBar from "./Components/TabBar";

let todoIndex = 0;

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }

    this.submitTodo = this.submitTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.setType = this.setType.bind(this)
  }

  inputChange(inputValue){
    this.setState( {inputValue: inputValue} );
  }

  submitTodo(){
    if( this.state.inputValue.match(/^\s*$/) ){
      return
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    })
  }

  toggleComplete(todoIndex){
    let todos = this.state.todos
    todos.forEach((todo) => {
      if(todo.todoIndex === todoIndex){
        todo.complete = !todo.complete
      }
    })
    this.setState({todos})
  }

  deleteTodo(todoIndex){
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }

  setType(type){
    this.setState({type})
  }

  render() {
    const { inputValue, todos, type } = this.state
    return (
      <View style={styles.container}>
          <ScrollView 
                        keyboardShouldPersistTaps='handled'
                        style={styles.content}>
              <Header />
              <Input 
                  inputValue={inputValue}
                  inputChange={(text) => {this.inputChange(text)}}              
              />
              <TodoList
                type={type} 
                toggleComplete={this.toggleComplete}
                deleteTodo={this.deleteTodo}
                todos={todos} 
              />
              <Button submitTodo={this.submitTodo} />              
          </ScrollView>
          <TabBar
            type={type}
            setType={this.setType}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  }
});

export default App