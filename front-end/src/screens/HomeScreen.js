// import "./HomeScreen.css";
// import { useEffect } from "react";


// // Components
// import Product from "../components/Product";

// //Actions
// import { getProducts as listProducts } from "../redux/actions/productActions";

// import React from "react";
// //import { useDispatch, useSelector } from "react-redux";
// import {Link , useHistory} from 'react-router-dom';
// import {logout} from "../actions/Cusations";










//   return (
//     <div className="homescreen">
//       <h2 className="homescreen__title">Latest Products</h2>
//       <div className="homescreen__products">
//         {loading ? (
//           <h2>Loading...</h2>
//         ) : error ? (
//           <h2>{error}</h2>
//         ) : (
//           products.map((product) => (
//             <Product
//               key={product._id}
//               itemname={product.itemname}
//               itemdescription={product.itemdescription}
//               itemprice={product.itemprice}
//               itemimage={product.itemimage}
//               productId={product._id}
//             />
//           ))
//         )}
//       </div>
//       <a href = "/">logout</a>
//     </div>
//   );
// };

// export default HomeScreen;