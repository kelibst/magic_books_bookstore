import React from 'react'
import PropTypes from 'prop-types'

const BookList = ({books}) => {
    return (
    <table className="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">category</th>
        </tr>
        </thead>
        <tbody>
        {books.map(book => (
            <Book book={book} key={book.id} />
        ))}
        </tbody>
    </table>
    );
}

const mapStateToProps = (state) => ({ books: state.books, filter: state.filter });

BooksList.defaultProps = {
    books: [],
};

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
}

export default connect(mapStateToProps)(BookList)
