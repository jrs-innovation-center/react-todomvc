const React = require('react')

const { map } = require('fun-fp')
const TodoItem = require('./todo-item')

const App = React.createClass({
  getInitialState () {
    return {
      todos: [{
        id: 1,
        title: 'Pick Final Project',
        completed: false
      }, {
        id: 2,
        title: 'Plan Final Project',
        completed: false
      }]
    }
  },
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input className="new-todo" type="text" placeholder="What needs to be done?" autoFocus />
        </header>
        <section id="main">
          <input type="checkbox" className="toggle-all" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            { map(todo => <TodoItem todo={todo} />, this.state.todos)}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <ul className="filters">
            <li><a href="/">All</a></li>
            <li>
              <a href="/active">Active</a>
            </li>
            <li><a href="/completed">Completed</a></li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    )
  }
})

module.exports = App
