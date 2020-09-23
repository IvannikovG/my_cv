import React from 'react'
import Book from './Book'

const styles = {
    book: {
            fontFamily: '"Lucida Sans Unicode", "Lucida Grande", Sans-Serif',
            textAlign: 'left',
            borderCollapse: 'separate',
            borderSpacing: '5px',
            background: '#ECE9E0',
            color: '#656665',
            border: '16px solid #ECE9E0',
            borderRadius: '20px',
    }
}


function BookList() {

    const books = [
        {id: 0, about: 'Django framework', name: 'Django for APIs',
         author: 'William S. Vincent'},
        {id: 1, about: 'Django framework',
         name: 'The Definitive Guide to Django, Second edition',
         author:'Adrian Holovaty, Jacob Kaplan-Moss'},
        {id: 2, about: 'Flask framework',
         name: 'Flask Mega Tutorial',
         author: 'Miguel Grinberg'},
        {id: 3, about: 'Javascript',
         name: 'JavaScript for impatient programmers',
         author: 'Dr. Axel Rauschmayer'},
        {id: 4, about: 'Programming in general',
         name: 'Structure and interpretation of computer programs',
         author: 'Harold Abelson, Gerald Jay, Sussman, Julie Sussman'},
        {id: 5, about: 'Programming in general',
         name: 'Grokking algorithms',
         author: 'Aditya Bhargava'},
    ]
    return (
        <div>
            <table style={styles.book}
             class='element'>    
            <tr>
                <th>Book name</th>
                <th>Book about</th>
                <th>Authors</th>
            </tr>
            {books.map((book, index) => {
                return <Book book={book} index={index}/>
            })}
            </table>
        </div>
    )
}

export default BookList