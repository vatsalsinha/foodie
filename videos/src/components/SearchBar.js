import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }; 
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.ontermsubmit(this.state.term);
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}  className="ui form">
                    <div className="field">
                        <label>Search for the recipe videos here!!</label>
                        <input type = 'text' value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
                <br/>
                <a href = "/">Go to home </a>
            </div>
        );
    }
}
export default SearchBar;