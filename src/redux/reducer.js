import action from './action'

const init = {
  category: '',
  level: 'easy',
  nOQ: 20,
  score: 0,
  Questions: [],

}

const reducer = (state = init, action) => {
  if (action.type === 'CHANGE_CATEGORY') {
    return {
      ...state,
      category: action.payload
    }
  }

  else if (action.type === "CHANGE_NOQ") {
    return {
      ...state,
      nOQ: action.payload
    }
  }
  else if (action.type === "CHANGE_LEVEL") {
    return {
      ...state,
      level: action.payload
    }
  }
  else if (action.type === "CHANGE_SCORE") {
    return {
      ...state,
      score: action.payload
    }
  }
  else if (action.type === "UPDATE_QUESTIONS") {
    return {
      ...state,
      Questions: [...state.Questions, ...action.payload]
    }
  }

  return state


}

export default reducer