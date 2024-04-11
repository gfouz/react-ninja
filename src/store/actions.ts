export const updateLocalStorage = (state: PostStore) => {
	typeof window !== 'undefined' &&
	  window.localStorage.setItem('cart', JSON.stringify(state));
  };

interface Post {
	title: string;
	content: string;
}

export type Action = {
	type: string;
	payload: Post;
};
export interface PostStore {
	post: Post;
	dispatch: (action: Action) => void;
  }
  
interface Actions {
	[x: string]: (
		state: PostStore,
		action: Action,
	) => {
		post: Post;
		dispatch: (action: Action) => void;
	};
}
export interface ActionTypes {
	SET_POST: string;
	SET_TITLE: string;
	SET_CONTENT: string;
  }
export const ACTION_TYPES: ActionTypes = {
	SET_POST: 'SET_POST',
	SET_TITLE: 'SET_TITLE',
	SET_CONTENT: 'SET_CONTENT',
  };
export const actions: Actions = {
	[ACTION_TYPES.SET_POST]: (state: PostStore, action: Action) => {
		const post = {...action.payload};
		const newState = {
			...state,
			post
		}
		updateLocalStorage(newState);
		return newState;
	},
	[ACTION_TYPES.SET_TITLE]:(state:PostStore, action: Action)=> {
		const post = {...state.post, title: action.payload.title}
		const newState = {
			...state,
	        post
		}
		return newState;
	},

     
	[ACTION_TYPES.SET_CONTENT]: (state: PostStore, action: Action) => {
		const post = {
			...state.post,
			content: action.payload.content,
		};
		const newState = {
			...state,
			post,
		};

		updateLocalStorage(newState);
		return newState;
	},
};
