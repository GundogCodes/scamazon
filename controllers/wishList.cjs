const WishList = require('../models/wishList.cjs');
const User = require('../models/user.cjs');

module.exports = {
  wishList,
  //create wishList,
  addToWishList,
  // removeItemFromWishList,
};

async function wishList(req, res) {
  try {
    console.log('req.user._id: ', req.user._id);
    const wishList = await WishList.getWishList(req.user._id);
    res.status(200).json(wishList);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

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
