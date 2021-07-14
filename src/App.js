import {nanoid} from 'nanoid';
import './App.css';
import ProductList from './components/product-list/product-list';

function App() {

  const products = [
    {id: nanoid(), name: 'Table', price: 150, onSale: true},
    {id: nanoid(), name: 'Pomme', price: 2, onSale: false},
    {id: nanoid(), name: 'Ventilateur', price: 20, onSale: true},
    {id: nanoid(), name: 'Chocolat', price: 10, onSale: false},
    {id: nanoid(), name: 'Ecran', price: 300, onSale: false},
  ];

  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;
