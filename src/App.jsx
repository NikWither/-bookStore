import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import BookFilter from './components/BookFilter/BookFilter.jsx';
import Book from './components/Book/Book.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {

  const [booksData, setBooksData] = useState([]);
//  const [orderBy, setOrderBy] = useState(false);
  const [totalOrders, setTotalOrders] = useState([]);
  const [ordersPrice, setOrdersPrice] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  // запрос на получение данных
  async function getData() {
    try {
      const responce = await axios.get(
        '../public/books.json'
        );
      setBooksData(responce.data);
    } catch(err) {
      console.log(err);
    }
  }

  // фильтр по категориям
  const filterBooks = (value, reset) => {
    if (reset) {
      const filteredBooks = booksData.filter(book => {
        return book.country.toLowerCase().includes(value.toLowerCase());
      })
      setBooksData(filteredBooks);
    } else {
      getData();
    }
  }
  // сортировка по возрастанию/убыванию цены
  const sortBooks = (typeOfSorting) => {
    const copyData = booksData.slice();
    console.log(typeOfSorting);

    if (typeOfSorting === 'priceDown') {
      const sortedByAsc = copyData.sort((a, b) => a.price > b.price ? 1 : -1);
      setBooksData(sortedByAsc);
    } 
    if (typeOfSorting === 'priceUp') {
      const sortedByDesc = copyData.sort((a, b) => a.price > b.price ? -1 : 1);
      setBooksData(sortedByDesc);
    }
    if (typeOfSorting === 'default') {
      const sortedByAsc = copyData.sort((a, b) => a.id > b.id ? 1 : -1);
      setBooksData(sortedByAsc);
    }
  }

  // корзина
  const totalPrice = (book) => {
    totalOrders.push(book.price);
    // setTotalOrders([...totalOrders, book.price]) //без мутации массива
    let ordersSum = totalOrders.reduce((sum, current) => sum + current, 0);
    setOrdersPrice(ordersSum);
    // console.log('Сумма ', ordersSum, "Цена книги ", book.price, 'сама книга', book.name);
  }

  return (
    <div className="app">
      <div className="app__body">
        <div className="app__wrapper">
          
          <div className="app__filters">
            <BookFilter 
              filterBooks={filterBooks} 
              sortBooks={sortBooks} 
              books={booksData} />
          </div>

          <div className="app__books">
            {booksData.map(book => (
              <Book key={book.id} book={book} totalPrice={totalPrice} />
            ))}
          </div>

          <div className="app__cart">
            <Cart ordersPrice={ordersPrice} />
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default App
