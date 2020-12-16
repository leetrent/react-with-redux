import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'Song A', duration: '4:05'},
    {title: 'Song B', duration: '2:30'},
    {title: 'Song C', duration: '3:15'},
    {title: 'Song D', duration: '1:45'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if ( action.type === 'SONG_SELECTED' ) {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});