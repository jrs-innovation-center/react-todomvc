const React = require('react')

const TodoItem = React.createClass({
  getInitialState() {
    return {editText: this.props.todo.title}
  },
  handleEdit () {
    this.props.onEdit(this.props.todo)
    this.setState({editText: this.props.todo.title})
  },
  handleChange (e) {
    if (this.props.editing) {
      this.setState({editText: e.target.value})
    }
  },
  handleSubmit (e) {
    var val = this.state.editText.trim()
    if (val) {
      this.props.onSave(val)
      this.setState({editText: val})
    }
  },
  render () {
    const todoState = () => {
      if (this.props.todo.completed) { return 'completed' }
      if (this.props.editing === this.props.todo.id) { return 'editing'}
      return ''
    }
    return (
      <li className={todoState()}>
        <div className="view">
          <input type="checkbox" className="toggle"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle} />
          <label onDoubleClick={this.handleEdit}>
             {this.props.todo.title}
          </label>
          <button className="destroy" onClick={this.props.onDestroy}></button>
        </div>
        <input type="text" className="edit"
          value={this.state.editText}
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
        />
      </li>
    )
  }
})

TodoItem.propTypes = {
  onToggle: React.PropTypes.func,
  onEdit: React.PropTypes.func,
  todo: React.PropTypes.object
}

module.exports = TodoItem
