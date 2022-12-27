const defaultState = {
  
}

export function accountReducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      // handle increment action
      return {
        balance: state.balance + action.amount
      }
    case 'DECREMENT':
      // handle decrement action
      return {
        balance: state.balance - action.amount
      }
    default:
      // not a valid action for this reducer, return state unchanged
      return state
  }
}