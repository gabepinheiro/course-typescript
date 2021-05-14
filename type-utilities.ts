type Todo = {
  title: string;
  description: string;
  completed: boolean
}


// Readonly -> vai transformar as props do obj em readonly
const todo: Readonly<Todo> = {
  title: "Assistir Dark de novo",
  description: "Relembrar os detalhes",
  completed: false
}

console.log(todo)

// todo.completed = true

// console.log(todo)

// O ideal é ter uma function que devolve um novo objeto aparitr do obj passado
// trabalhando com o principio da imutabilidade, onde a gente não muda o obj original

//Partial -> deixa todas a props do 'fieldsToUpdate' optional
//permitindo passar somente props que a gente quer atualizar
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
  return {
    ...todo,
    ...fieldsToUpdate
  }
}

const todo2: Todo = updateTodo(todo, { completed: true })

// Pick -> vai pegar somente as props 
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
  title: 'Fechar Ghost of Tsushima',
  completed: false
}

// Omit -> vai omitir o que a gente informar
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = {
  title: 'Fechar Ghost of Tsushima',
  completed: false
}

// Pick vs Omit
// - Pick -> quando tiver muita coisa e quiser anular
// - Omit -> quando eu quiser pegar mais coisas
