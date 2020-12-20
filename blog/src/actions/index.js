import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPosts = () => {
//   return async (dispatch) => {
//     const response = await jsonPlaceholder.get('/posts');
//     dispatch( {type: 'FETCH_POSTS', payload: response} );
//   };
// };

// EQUIVALENT SYNTAX
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch( {type: 'FETCH_POSTS', payload: response.data} );
};