const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
const CHANGE_NOQ = 'CHANGE_NOQ'
const CHANGE_LEVEL = "CHANGE_LEVEL"
const CHANGE_SCORE = "CHANGE_SCORE"
const UPDATE_QUESTIONS = "UPDATE_QUESTIONS"

export const handleCategory = (payload) => {
  return {
    type: CHANGE_CATEGORY,
    payload
  }

}
export const handlenOQ = (payload) => {
  return {
    type: CHANGE_NOQ,
    payload
  }

}
export const handleLevel = (payload) => {
  return {
    type: CHANGE_LEVEL,
    payload
  }

}
export const handleScore = (payload) => {
  return {
    type: CHANGE_SCORE,
    payload
  }

}
export const handleQuestionUpdate = (payload) => {
  return {
    type: UPDATE_QUESTIONS,
    payload
  }

}