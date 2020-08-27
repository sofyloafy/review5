class TodoList {
  execute(command) {
    let splitCommand = command.split(" ")
    let commandAction = splitCommand.shift()
    splitCommand.splice(0, 0, "1.")
    let todoListItems = splitCommand.join(" ")
    return todoListItems
  }

}

module.exports = TodoList