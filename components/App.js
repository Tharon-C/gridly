import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Grid from '../containers/Grid'

const App = () => (
    <div>
        <div 
            style={{ 
                maxWidth: "400px", 
                margin: "auto" 
            }} 
        >
            <Grid />
        </div>
  </div>
)

export default App
