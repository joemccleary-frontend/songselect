import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '3:56' },
        { title: 'Waterfalls', duration: '3:46' },
        { title: 'All Star', duration: '2:56' },
        { title: 'No diggity', duration: '2:36' },

    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})