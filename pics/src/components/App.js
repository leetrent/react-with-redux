import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
    
    ////////////////////////////////////////////////////////////////////////////////////
    // USING PROMISE
    ////////////////////////////////////////////////////////////////////////////////////
    // onSeachSubmit(term) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID <client-id goes here>',
    //         }
    //     })
    //     .then(response => {
    //         console.log(response.data.results);
    //     });
    // }
    ////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////
    // USING ASYNC / AWAIT SYNTAX
    ////////////////////////////////////////////////////////////////////////////////////    
    onSeachSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        });
        this.setState({ images: response.data.results });
    }
    ////////////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className="ui container" style={ { marginTop: '10px' } } >
                <SearchBar onSubmit={this.onSeachSubmit} />
                <ImageList images={this.state.images} />
            </div>            
        );
    }
}
export default App;