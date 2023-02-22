import { useState } from "react";
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

export default function Home() {
    const [books, setBooks] = useState([
        { title: 'little women', id: 1 },
        { title: 'the dragon reborn', id: 2 },
        { title: 'when breath becomes air', id: 3 },
        { title: 'book eaters', id: 4 }
    ])
  return (
    <div className="App">
        {books && <BookList books={books} />}
        <BookForm />
    </div>
  )
}
