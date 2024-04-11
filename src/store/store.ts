import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { actions, Action, PostStore } from './actions.ts';


const reducer = (state: PostStore, action: Action) => {
  const { type } = action;
  const currentAction = actions[type];
  return currentAction ? currentAction(state, action) : state;
};

const initialState = {
  title: 'initial title',
  content: 'initial content',
};
//Redux-like patterns store
const postState = persist<PostStore>(
  (set) => ({
    post: initialState,
    dispatch: (action: Action) => set((state) => reducer(state, action)),
  }),
  {
    name: 'post', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const usePostStore = create(postState);
