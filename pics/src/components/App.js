import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    ////////////////////////////////////////////////////////////////////////////////////
    // USING PROMISE
    ////////////////////////////////////////////////////////////////////////////////////
    // onSeachSubmit(term) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID ',
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
    async onSeachSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID ',
            }
        });
        console.log(response.data.results);
    }
    ////////////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className="ui container" style={ { marginTop: '10px' } } >
                <SearchBar onSubmit={this.onSeachSubmit} />
            </div>            
        );
    }
}
export default App;