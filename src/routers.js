import OnProduct from "./pages/onproduct/onproduct"
import Home from "./pages/home/home"
import NewUser from "./pages/newuser/newuser"
import Product from "./pages/product/product"
import Users from "./pages/users/users"


let MainRout = [
    {path: '/' , element: <Home/>},
    {path: '/users' , element: <Users/>},
    {path: '/newuser' , element: <NewUser/>},
    {path: '/product' , element: <Product/>},
    {path: '/product/:productId' , element: <OnProduct/>},
 ]
 export default MainRout