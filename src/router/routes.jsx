import LoginPage from '../pages/LoginPage/LoginPage'
import UserPage from '../pages/UserPage/UserPage';
import HomePage from '../pages/HomePage/HomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import ItemPage from '../pages/LoginPage/LoginPage';
import CategoryPage from '../pages/LoginPage/LoginPage';
import OrderPage from '../pages/LoginPage/LoginPage';
import WishlistPage from '../pages/LoginPage/LoginPage';
import CartPage from '../pages/LoginPage/LoginPage';

const routes = [
	{//Contains the signup as well
		Component: LoginPage,
		key: 'Login',
		path: '/login'
	},
	{
		Component: UserPage,
		key: 'User',
		path: '/user/:id'
	},
	{
		Component: HomePage,
		key: 'Home',
		path: '/home'
	},
	{
		Component: SearchPage,
		key: 'Search',
		path: '/search'
	},
	{
		Component: ItemPage,
		key: 'Item',
		path: '/item/:id'
	},
	{
		Component: CategoryPage,
		key: 'Category',
		path: '/categories'
	},
	{
		Component: OrderPage,
		key: 'Order',
		path: '/orders'
	},
	{
		Component: WishlistPage,
		key: 'Wishlist',
		path: '/wishlist'
	},
	{
		Component: CartPage,
		key: 'Cart',
		path: '/cart'
	}
];

export default routes;
