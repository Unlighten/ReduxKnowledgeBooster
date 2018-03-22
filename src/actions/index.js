export function selectBook(book) {
    //selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property

    //Every action usually have two values: type and payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}