import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };
    
    ////////////////////////////////////////////////////////////////////////////////////
    // USING PROMISE
    ////////////////////////////////////////////////////////////////////////////////////
    // onSeachSubmit(term) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization: '',
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
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: '',
            }
        });
        this.setState({ images: response.data.results });
    }
    ////////////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className="ui container" style={ { marginTop: '10px' } } >
                <SearchBar onSubmit={this.onSeachSubmit} />
                Found: {this.state.images.length} images
            </div>            
        );
    }
}
export default App;