// S -> State
// T -> Tpe
// K -> Key
// V -> Value
// E -> Element

type numOrStr = number | string

// React.FC<Props, States>

function useState<S extends numOrStr = string>(){
  let state: S

  function getState (){
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState()

newState.setState('foo')
console.log(newState.getState())

// newState.setState(123)
// console.log(newState.getState())

// newState.setState(false) //Argument of type 'boolean' is not assignable to parameter of type 'string'.
