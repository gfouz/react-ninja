//@ts-nocheck
import { create } from 'zustand';

const initialState = {
  count: 0,
};

const actions = {
  increment: (state, action) => {
    return { count: state.count + action.payload };
  },
  decrement: (state, action) => {
    return { count: state.count - action.payload };
  },
  reset: () => {
    return { count: 0 };
  },
};

const reducer = (state, action) => {
  const { type } = action;
  const currentAction = actions[type];
  return currentAction ? currentAction(state, action) : initialState;
};

export const useCounterStore = create((set) => ({
  count: 0,
  dispatch: (action) => set((state) => reducer(state, action)),
}));

/*example of how to consume the store
const dispatch = useCounterStore((state) => state.dispatch)
dispatch({type:'increment', payload: 1}) 
*/
