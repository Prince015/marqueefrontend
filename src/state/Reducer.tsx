export interface StateType {
    userId: string | null;
    token: string | null;
  }
  
  export interface ActionType {
    type: string;
    token: string | null;
  }
  
  export const initialState: StateType = {
    userId: null,
    token: localStorage.getItem('token') || null,
  };
  
  export const actionTypes = {
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',
  };
  
  const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
      case actionTypes.LOG_IN:
        return {
          ...state,
          token: action.token,
        };
      case actionTypes.LOG_OUT:
        return {
          ...state,
          token: null,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  