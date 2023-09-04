import {FC} from 'react'

interface Book {
    title ?: string;
    author ?: string;
}


const Section : FC<Book> = ({author = "SasaCodm" , title }) => {
    return (
        <div>
            <h1>Book</h1>
            <p>title {title}</p>
            <p>Author {author}</p>
        </div>
    )
}

export default Section
