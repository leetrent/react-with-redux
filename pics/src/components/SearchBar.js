import React from 'react';

class SearchBar extends React.Component {

    ////////////////////////////////////////////////////////
    // Legacy way of binding 'this'
    ////////////////////////////////////////////////////////
    // constructor() {
    //     super();
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    // onFormSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }
    ////////////////////////////////////////////////////////

    state = { term: '' };

    ////////////////////////////////////////////////////////
    // ES2015 way of binding 'this'
    // Assures that the value of 'this' is always equal to
    // the value of the enclosing class instance, in this
    // case, SearchBar.
    ////////////////////////////////////////////////////////
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);      
    }
    ////////////////////////////////////////////////////////

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;