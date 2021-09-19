import Product from '../components/Product';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './HomeScreen.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions';
import ProductApp from './../components/ProductApp';
//import item from '../../../back-end/models/item';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state =>  state.getProducts);

    const {products,loading,error} = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return(
         <div className="homescreen">
        <h2 className="homescreen__title">Latest Products</h2>

        <div className="homescreen__products">
            {loading ? (
                <h2>Loading...</h2>
             ) : error ? (
                <h2>{error}</h2> 
            ): (
                products.map((product) => <product 
                key={product._id}
                productID={product._id}
                name={product.itemname}
                price={product.itemprice}
                description={product.itemdescription}
                imageurl={product.itemimage}
                />)

            )}
        </div>
        <a href="/product">Product</a>
        <Router>
      <div className="App">

    <Route path="/product" exact component={ProductApp} />  

      </div>
    </Router>
    </div>
    );
};

export default HomeScreen