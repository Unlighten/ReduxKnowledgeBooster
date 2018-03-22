import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

//we want the most parent component that cares about state to be the container

class BookList extends Component {
    renderList = () => {
        return this.props.books.map((book) => {
            return (
                <li 
                 key={book.title} 
                 className={'list-group-item'}
                 onClick={() => this.props.selectBook(book)}
                >
                 {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className={'list-group col-sm-4'}>
                {this.renderList()}
            </ul>
        )
    }
}

//whenever our application state changes, our container/component will automatically re-render
//does not work as an arrow function for some reason
function mapStateToProps(state) {
    //Whatever is returned will show up as props inside of BookList
    return {
        //remember that our array of books is in the reducer
        books: state.books
    }
}

//Anything returned from thsi function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    //whenever selectbook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote booklist from a component to acontainer, 
//it needs to know about this new dispatch method selectbook, 
//make it available as a prop
//exporting using Redux, specifically exporting mapStateToProps and BookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);