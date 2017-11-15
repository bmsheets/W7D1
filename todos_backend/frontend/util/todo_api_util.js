export const fetchTodos = function() {
  return $.ajax({
    url: '/api/todos',
    method: 'GET'
  });
};

export const createTodo = function(todo) {
  return $.ajax({
    url: '/api/todos',
    method: 'POST',
    data: todo
  });
};
