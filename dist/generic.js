"use strict";
// S -> State
// T -> Tpe
// K -> Key
// V -> Value
// E -> Element
// React.FC<Props, States>
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
newState.setState('foo');
console.log(newState.getState());
// newState.setState(123)
// console.log(newState.getState())
// newState.setState(false) //Argument of type 'boolean' is not assignable to parameter of type 'string'.
