
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import routes from './router/routes'
import HomePage from './pages/HomePage/HomePage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ItemPage from './pages/ItemPage/ItemPage'
import LoginPage from './pages/LoginPage/LoginPage'
import OrderPage from './pages/OrderPage/OrderPage'
import SearchPage from './pages/SearchPage/SearchPage'
import WishlistPage from './pages/WishlistPage/WishlistPage';
import UserPage from './pages/UserPage/UserPage'
import CartPage from './pages/CartPage/CartPage'
import AddressFormPage from './pages/AddressFormPage/AddressFormPage'
import YourPaymentPage from './pages/YourPaymentsPage/YourPaymentsPage'
import EditUserPage from './pages/EditUserPage/EditUserPage'
import {getUser} from '../src/utilities/users-service.cjs'

import LogOut from './components/LogOut/LogOut';

function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <>
      <NavBar routes={routes} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/user" element={<UserPage user={user} setUser={user} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/address" element={<AddressFormPage />} />
        <Route path="/payments" element={<YourPaymentPage />} />
        <Route path="/edit" element={<EditUserPage />} />
        <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
        <Route path="/cart" element={<CartPage user={user} setUser={setUser}/>} />
      </Routes>
      <LogOut user={user} setUser={setUser} />
    </>
  );
}

export default App;
