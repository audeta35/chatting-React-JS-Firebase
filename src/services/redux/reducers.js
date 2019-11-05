const stateInit = {

  user : '',
  userList : [],
  chatList : [],
  buttonLoading : null,
  isLoading : false,
}

const reducer = (state = stateInit, action) => {

  switch (action.type) {
    case 'LOADING':
    return {
      ...state,
      isLoading : action.value
    }

    case 'BUTTON_LOADING':
    return {
      ...state,
      buttonLoading : action.value
    }

    case 'USER_LIST':
    return {
      ...state,
      userList : action.value
    }

    case 'CHAT_LIST':
    return {
      ...state,
      chatList : action.value
    }
    default: return state;
  }
}

export default reducer;
