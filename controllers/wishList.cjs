const WishList = require('../models/wishList.cjs');
const User = require('../models/user.cjs');

module.exports = {
  wishList,
  //create wishList,
  addToWishList,
  removeItemFromWishList,
};

// A cart is the unpaid order for a user
async function wishList(req, res) {
  try {
    console.log('req.user._id: ', req.user._id);
    const wishList = await WishList.getWishList(req.user._id);
    res.status(200).json(wishList);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

// async function createCart(req, res) {
//     try {
//         console.log('req.user._id:', req.user._id);
//         console.log('req.body:', req.body);

//         req.body.user = req.user._id;
//         const cart = await Order.create(req.body);

//         console.log('cart created:', cart);

//         req.user.cart = { _id: cart._id };
//         await req.user.save();

//         console.log('user cart updated:', req.user);

//         res.json(cart);
//     } catch (error) {
//         console.error('Error creating cart:', error);
//         res.status(400).json({ message: error.message });
//     }
// }

//Add an item to the cart
async function addToWishList(req, res) {
  try {
    const wishList = await WishList.getWishList(req.user._id);
    wishList.user = await User.findById(req.user._id);
    await wishList.addItem(req.params.id);
    res.status(200).json(wishList);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
}
