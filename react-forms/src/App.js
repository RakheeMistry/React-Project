import React from 'react';
import './App.css';
import ProductForm from './components/productform/ProductForm';
import Product from './components/product/Product';

const products = [
  {
    pId: 1,
    pName: 'Fresh Milk',
    desc: 'Proident ipsum et aliquip consequat qui veniam Lorem. Magna nisi sunt deserunt aliqua veniam labore est quis incididunt tempor. Incididunt ipsum commodo deserunt magna. Duis adipisicing anim in ex officia minim amet ea nisi. Magna eiusmod laborum mollit sit voluptate adipisicing excepteur pariatur deserunt velit do laboris. Nisi eu in culpa cillum ex aliqua.',
    isAvailable: true,
    image: 'https://tse2.mm.bing.net/th?id=OIP.bGtoA03MDPnURo_Vqt4xrwHaGq&pid=Api&P=0&h=180',
    price: 12
  },
  {
    pId: 2,
    pName: 'Cottage Cheese',
    desc: 'Velit Lorem sint nostrud dolor aute aliqua eu eu amet veniam do culpa reprehenderit cillum. Ex pariatur consectetur dolor nulla anim duis sit. Incididunt non veniam aliquip sit Lorem dolor amet duis consectetur consectetur eu. Ullamco amet sint ex est id non ea do elit nisi laboris exercitation aliqua commodo. Esse culpa tempor proident sint esse enim reprehenderit culpa elit. Nostrud nisi amet reprehenderit non esse aute duis eiusmod do eu sunt id proident laboris. Tempor ad veniam cillum ullamco Lorem ad aute sit.',
    isAvailable: false,
    image: 'https://tse4.mm.bing.net/th?id=OIP.ZGSN51eDqDQ5qJ2zRlYXYwHaHN&pid=Api&P=0&h=180',
    price: 10
  },
  {
    pId: 3,
    pName: 'Brocoli',
    desc: 'Mollit aliquip in cupidatat nulla non amet quis adipisicing officia est consequat dolor. Aliqua elit et ex dolore incididunt id irure minim est exercitation. Incididunt culpa velit exercitation proident. Officia proident adipisicing proident reprehenderit cillum consectetur quis consectetur do quis voluptate tempor. Reprehenderit sint aute incididunt aliquip nulla nulla ad pariatur dolore dolore nostrud. Dolor pariatur adipisicing veniam tempor. Magna proident pariatur velit ut adipisicing reprehenderit deserunt tempor sint anim.',
    isAvailable: true,
    image: 'https://tse4.mm.bing.net/th?id=OIP.os6rT89mcI-ImBoB9sns2gHaEm&pid=Api&P=0&h=180',
    price: 15
  },
  {
    pId: 4,
    pName: 'Oranges',
    desc: 'Labore aliquip quis nostrud enim pariatur non nisi quis consequat proident laboris non nisi. Anim et exercitation consequat est tempor amet qui est eiusmod anim reprehenderit consectetur consequat consectetur. Sunt id velit laborum esse minim commodo qui commodo. Sint nulla deserunt nisi sit. Laboris ullamco laboris adipisicing ipsum incididunt proident.',
    isAvailable: true,
    image: 'https://tse3.mm.bing.net/th?id=OIP.DsdFEw2-2VUE_4Krmzo1agHaFj&pid=Api&P=0&h=180',
    price: 20
  },

]
function App() {
  return (
    <div className='row'>
      <ProductForm />
      <div className="col-lg-8 mx-auto">
        <Product
          id={products[0].pId}
          name={products[0].pName}
          description={products[0].desc}
          isAvailable={products[0].isAvailable}
          imageUrl={products[0].image}
          price={products[0].price} />

        <Product
          id={products[1].pId}
          name={products[1].pName}
          description={products[1].desc}
          isAvailable={products[1].isAvailable}
          imageUrl={products[1].image}
          price={products[1].price} />

        <Product
          id={products[2].pId}
          name={products[2].pName}
          description={products[2].desc}
          isAvailable={products[2].isAvailable}
          imageUrl={products[2].image}
          price={products[2].price} />

        <Product
          id={products[3].pId}
          name={products[3].pName}
          description={products[3].desc}
          isAvailable={products[3].isAvailable}
          imageUrl={products[3].image}
          price={products[3].price} />
      </div>
    </div>
  );
}

export default App;
