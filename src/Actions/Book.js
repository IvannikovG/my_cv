import React from 'react'
import PropTypes from 'prop-types'

function Book({book}) {
    return (
            <tr>
                <td class="td-book">{book.name}</td>
                <td class="td-book">{book.about}</td>
                <td class="td-book">{book.author}</td>
            </tr>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book