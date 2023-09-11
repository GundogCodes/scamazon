require('dotenv').config();
require('./database.cjs');

const Category = require('../models/category.cjs');
const Item = require('../models/item.cjs');

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Electronics', sortOrder: 10 },
    { name: 'Sporting Goods', sortOrder: 20 },
    { name: 'Mens Clothing', sortOrder: 30 },
    { name: 'Womens Clothing', sortOrder: 40 },
    { name: 'Toys', sortOrder: 50 },
    { name: 'Tools/Auto', sortOrder: 60 }
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: 'Used PS5',
      description:
        'The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
      category: categories[0],
      price: 547.9,
      rating: 4.9,
      image: '/img/PS5.png',
    },
    {
      name: 'Football',
      description:
        'Get outdoors for football fun with the Franklin Sports Official Size 1000 Outdoor Football! This official size football is perfect for all players to grip and throw the ball with ease. Constructed with a durable, synthetic leather surface, these footballs are built to stand up to all-weather play year after year. The deep-pebble surface increases grip so players can easily pass and catch the football even in the rain. This outdoor football is also designed with hand sewn laces for a professional feel that will help all players throw their best spirals. Available in single footballs and (12) football bulk packs, you can find official size outdoor footballs for you and your whole flag football team! The bulk football packs also come with an air pump with an inflation needle included, so you can keep your footballs in perfect condition. This football season, get out in the yard with the best outdoor football equipment and grab yourself a Franklin Sports Official Size 1000 Outdoor Football today!',
      category: categories[1],
      price: 9.71,
      rating: 4.7,
      image: '/img/football.png',
    },
    {
      name: 'Hanes Mens Originals Tri-blend Jersey Hoodie',
      description:
        'Look good and feel good in these distinctive mens t-shirt hoodies from our Hanes® Originals line. Spun with recycled polyester, these Henley-style hooded t-shirts are the perfect marriage between a long-sleeve tee and a classic hoodie. This mens long sleeve tee has a 3-button Henley placket, roomy front kanga pocket, and knotted twill drawcords for an authentic Hanes look youll love. The tri-blend fabric formula is buttery soft, lightweight, and made for layering under a jacket when the weather is cool. Even better when you want to wear a hoodie, but its t-shirt weather - this is the one for you!',
      category: categories[2],
      price: 14,
      rating: 4.3,
      image: '/img/menshirt.png',
    },
    {
      name: 'ZESICA Womens Dress',
      description:
        'ZESICA Summer Bohemian Floral Crew Neck Smocked High Waist Beach Long Maxi Dress',
      category: categories[3],
      price: 49.99,
      rating: 4.3,
      image: '/img/womensdress.png',
    },
    {
      name: 'Muppets Animal Puppet',
      description:
        'Beat Dave Grohl in drum battle',
      category: categories[4],
      price: 499.99,
      rating: 5.0,
      image: '/img/animal-puppet.png',
    },
    {
      name: 'Gnome on Dragon',
      description:
        'There is no reason to NOT have one',
      category: categories[4],
      price: 33.33,
      rating: 4.8,
      image: '/img/gnome.png',
    },
    {
      name: 'Pokemon Emerald',
      description:
        'Relive your childhood',
      category: categories[4],
      price: 1234.56,
      rating: 4.9,
      image: '/img/pokemon-emerald.png',
    },
    {
      name: 'Lego Barbie',
      description:
        'The collaboration we never realized we needed.',
      category: categories[4],
      price: 300.56,
      rating: 4.5,
      image: '/img/lego-barbie.png',
    },
    {
      name: 'Rey Mysterio POP Doll',
      description:
        'The best wrestler of all time. He deserved more belts :(',
      category: categories[4],
      price: 75.33,
      rating: 5.0,
      image: '/img/rey.png',
    },
    {
      name: 'Ball-in-a-Cup!',
      description:
        'Your Pop-Pop kept himself entertained for days upon days with this. Only 4 left in the world because nobody makes them anymore',
      category: categories[4],
      price: 100.00,
      rating: 5.0,
      image: '/img/ball.png',
    },
    {
      name: 'DIY Potato Cannon',
      description: 
        'Can be retrofitted for coconuts in case you want to feel like you are in Donkey Kong 64',
      category: categories[5],
      price: 100.00,
      rating: 5.0,
      image: '/img/cannon.png',
    },
    {
      name: 'Completely Legal Fireworks',
      description: 
        'Yup. There is nothing illicit about these things at all!',
      category: categories[5],
      price: 1000.00,
      rating: 4.5,
      image: '/img/fireworks.png',
    },
    {
      name: 'Moon Shoes',
      description: 
        'Relive the 90s baby!!',
      category: categories[5],
      price: 777.77,
      rating: 5.0,
      image: '/img/moonshoes.png',
    },
    {
      name: 'Wells For Boys (As seen on SNL)',
      description: 
        '"Wells for sensitive little boys to wish upon, condife in, and reflecy by".',
      category: categories[5],
      price: 470.00,
      rating: 4.5,
      image: '/img/well.png',
    },



  ]);
  console.log(items);

  process.exit();
})();
