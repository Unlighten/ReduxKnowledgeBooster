import React, {Component} from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className={'search-bar'}>
                <input 
                 value={this.state.term}
                 onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;

//when the state of something changes, the render will rerender. This means the whole component will rerender