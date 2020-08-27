let TodoList = require('../src/execute')
let todoList = new TodoList

describe('#TodoList', () => {
  test('', () => {
    expect(todoList.execute("add buy milk")).toBe("1. buy milk")
  })
})