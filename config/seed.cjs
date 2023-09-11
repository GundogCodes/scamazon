require('dotenv').config();
require('./database.cjs');

const Category = require('../models/category.cjs');
const Item = require('../models/item.cjs');

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Electronics', sortOrder: 10 },
    { name: 'Sporting Goods', sortOrder: 20 },
    { name: 'Make-up and Cosmetics', sortOrder: 30 },
    { name: 'Books', sortOrder: 40 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: 'Sony Playstation 5',
      description:
        'The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
      category: categories[0],
      price: 548,
      rating: 4.9,
      image: '/img/PS5.png',
      countInventory: 25,
    },
    {
      name: 'SAMSUNG 75-Inch Class Crystal UHD 4K CU8000',
      description:
        'The SAMSUNG 75-Inch Class Crystal UHD 4K CU8000 Series  smart tv  features PurColor Object Tracking, Sound Lite, Q-Symphony, Motion Xcelerator, Ultra Slim, Solar Remote and Alexa Built-in',
      category: categories[0],
      price: 947.99,
      rating: 4.2,
      image: '/img/TV.png',
      countInventory: 9,
    },
    {
      name: 'Apple AirPods Pro (2nd Generation) Wireless Earbuds',
      description:
        'The Apple-designed H2 chip pushes advanced audio performance even further, resulting in smarter noise cancellation and more immersive sound. The low-distortion, custom-built driver delivers crisp, clear high notes and deep, rich bass in stunning definition. So every sound is more vivid than ever.',
      category: categories[0],
      price: 199,
      rating: 4.7,
      image: '/img/AirPods.png',
      countInventory: 50,
    },
    {
      name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
      description:
        'Smooth, responsive Super Retina display with ProMotion. Huge camera system upgrade for dramatic new possibilities. Exceptional durability. The ultra fast A15 Bionic chip. And breakthrough battery life.',
      category: categories[0],
      price: 1199,
      rating: 4,
      image: '/img/iphone.png',
      countInventory: 100,
    },
    {
      name: 'Echo Pop | Full sound compact smart speaker with Alexa',
      description:
        'This compact smart speaker with Alexa features full sound thats great for bedrooms and small spaces. Small enough to blend in and mighty enough to stand out.',
      category: categories[0],
      price: 39.99,
      rating: 4.6,
      image: '/img/echodot.png',
      countInventory: 25,
    },
    {
      name: 'Ring Video Doorbell 3 ',
      description:
        '1080p HD video doorbell with enhanced features that let you see, hear, and speak to anyone from your phone, tablet, or PC.',
      category: categories[0],
      price: 149.99,
      rating: 4.6,
      image: '/img/ring.png',
      countInventory: 75,
    },
    {
      name: 'Sonos Arc - The Premium Smart Soundbar',
      description:
        'All-new Sonos Arc - Bring all your entertainment to life with the brilliantly realistic sound of Arc, featuring Dolby Atmos. Enjoy control with your TV remote, voice, the Sonos app, Apple AirPlay 2, and more.',
      category: categories[0],
      price: 899,
      rating: 4.6,
      image: '/img/sonos.png',
      countInventory: 7,
    },
    {
      name: 'Apple 2023 MacBook Pro Laptop M2 Pro',
      description:
        'Take on demanding projects with the M2 Pro or M2 Max chip. M2 Pro has up to 12 CPU cores, up to 19 GPU cores, and up to 32GB unified memory. M2 Max has 12 CPU cores, up to 38 GPU cores, and up to 96GB unified memory.',
      category: categories[0],
      price: 2299,
      rating: 4.8,
      image: '/img/macbook.png',
      countInventory: 100,
    },
    {
      name: 'Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB',
      description:
        'Meta Quest is for ages 13+. Certain apps, games and experiences may be suitable for a more mature audience. Keep your experience smooth and seamless, even as high speed action unfolds around you with a super-fast processor and high-resolution display.',
      category: categories[0],
      price: 349,
      rating: 4.7,
      image: '/img/oculus.png',
      countInventory: 100,
    },
    {
      name: 'Amazon Fire TV Stick 4K Max with 2-Year Protection Plan',
      description:
        'Our first-ever streaming stick with Wi-Fi 6 support means reduced congestion for smoother, more fluid streaming and gaming across multiple Wi-Fi 6-connected devices.',
      category: categories[0],
      price: 32.48,
      rating: 4.7,
      image: '/img/firestick.png',
      countInventory: 25,
    },
    {
      name: 'Big Black Foam Roller',
      description:
        'Coming exclusively in the black colorway, this foam roller is guaranteed to provide penetrating relief to all the sore spots on your body.',
      category: categories[1],
      price: 69.69,
      rating: 5.0,
      image: '/img/bbfr.png',
      countInventory: 10,
    },
    {
      name: 'The Penetrator',
      description:
        'As the name suggests, this massage gun is designed to penetrate in your muscle and help work out those kinks. Comes with all kinds of attachments to adapt to any and all massaging needs!',
      category: categories[1],
      price: 23.43,
      rating: 5.0,
      image: '/img/penetrator.png',
      countInventory: 12,
    },
    {
      name: 'Ribbed Foam Roller',
      description:
        'Providing ribbed relief, this foam roller incorporates ridges in its design. Its peaks and ridges are sure to hit the spot.',
      category: categories[1],
      price: 16.96,
      rating: 5.0,
      image: '/img/bbfr.png',
      countInventory: 10,
    },
    {
      name: 'Basketball',
      description:
        'With practice you can impress your friends with your ball handling skills!',
      category: categories[1],
      price: 15.99,
      rating: 5.0,
      image: '/img/basketball.png',
      countInventory: 10,
    },
    {
      name: 'SkateBoard',
      description: 'With practice maybe you could be the next Tony Hawk?',
      category: categories[1],
      price: 12.39,
      rating: 5.0,
      image: '/img/skateboard.png',
      countInventory: 10,
    },
    {
      name: 'Jaw Exerciser',
      description:
        'Get an ultra defined jaw trainer with this product. Clinically proven to get you ladies',
      category: categories[1],
      price: 100.0,
      rating: 2.3,
      image: '/img/jaw.png',
      countInventory: 10,
    },
    {
      name: 'Foam Roller',
      description:
        'For those with more modest foam rolling needs. Recommended if you only rarely need stretching.',
      category: categories[1],
      price: 69.69,
      rating: 5.0,
      image: '/img/foamroller.png',
      countInventory: 10,
    },
    {
      name: "L'Oréal Paris True Match Super-Blendable Foundation",
      description:
        'Achieve a flawless complexion with this super-blendable foundation. It offers a wide range of shades to match your skin tone perfectly, providing a natural finish that lasts all day.',
      category: categories[2],
      price: 12.99,
      rating: 4.5,
      image: '/img/loreal-foundation.png',
      countInventory: 100,
    },
    {
      name: 'MAC Ruby Woo Lipstick',
      description:
        "Make a bold statement with this iconic red lipstick from MAC. It's long-lasting, highly pigmented, and adds a touch of glamour to any look.",
      category: categories[2],
      price: 19.99,
      rating: 4.7,
      image: '/img/mac-lipstick.png',
      countInventory: 100,
    },
    {
      name: 'NARS Radiant Creamy Concealer',
      description:
        'Conceal imperfections and brighten your under-eye area with this creamy concealer from NARS. It provides buildable coverage and a radiant finish.',
      category: categories[2],
      price: 30.0,
      rating: 4.8,
      image: '/img/nars-concealer.png',
      countInventory: 100,
    },
    {
      name: 'Anastasia Beverly Hills Modern Renaissance Eyeshadow Palette',
      description:
        'Create stunning eye looks with this highly pigmented eyeshadow palette. It features a mix of warm and neutral shades in both matte and shimmer finishes.',
      category: categories[2],
      price: 42.5,
      rating: 4.9,
      image: '/img/anastasia-eyeshadow.png',
      countInventory: 100,
    },
    {
      name: 'Fenty Beauty Killawatt Freestyle Highlighter',
      description:
        "Get that gorgeous glow with Fenty Beauty's highlighter. It's available in a variety of shades and can be used on the cheeks, eyes, and more.",
      category: categories[2],
      price: 34.99,
      rating: 4.6,
      image: '/img/fenty-highlighter.png',
      countInventory: 100,
    },
    {
      name: 'Urban Decay All Nighter Long-Lasting Makeup Setting Spray',
      description:
        "Keep your makeup in place all day and night with this setting spray from Urban Decay. It's oil-free and suitable for all skin types.",
      category: categories[2],
      price: 32.0,
      rating: 4.7,
      image: '/img/urban-decay-setting-spray.png',
      countInventory: 100,
    },
    {
      name: 'Maybelline Great Lash Mascara',
      description:
        "Achieve fuller, longer-looking lashes with Maybelline's Great Lash Mascara. Its iconic pink and green tube is a beauty classic.",
      category: categories[2],
      price: 5.99,
      rating: 4.3,
      image: '/img/maybelline-mascara.png',
      countInventory: 100,
    },
    {
      name: 'Too Faced Born This Way Foundation',
      description:
        "Get a natural, radiant complexion with this foundation from Too Faced. It's infused with coconut water and provides medium to full coverage.",
      category: categories[2],
      price: 39.5,
      rating: 4.8,
      image: '/img/too-faced-foundation.png',
      countInventory: 100,
    },
    {
      name: 'Revlon Super Lustrous Lip Gloss',
      description:
        "Add shine and dimension to your lips with Revlon's Super Lustrous Lip Gloss. It's available in a range of beautiful shades for any occasion.",
      category: categories[2],
      price: 7.49,
      rating: 4.4,
      image: '/img/revlon-lip-gloss.png',
      countInventory: 100,
    },
    {
      name: 'Clinique Dramatically Different Moisturizing Lotion+',
      description:
        "Hydrate your skin with Clinique's iconic moisturizing lotion. It helps strengthen the skin's moisture barrier for a healthy, radiant look.",
      category: categories[2],
      price: 28.5,
      rating: 4.6,
      image: '/img/clinique-moisturizer.png',
      countInventory: 100,
    },
    {
      name: 'Moby Click',
      description:
        'In a world where the vast digital seas dominate every aspect of life, Captain Ahabrowser, a seasoned net-surfer, is haunted by a legendary and elusive digital entity known as Moby Click',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/MobyClick.png',
      countInventory: 100,
    },
    {
      name: 'To Grill A MockingBird',
      description:
        'In the avian culinary world, a determined mockingbird chef rises to fame. As he preps for the ultimate "Fly & Fry Cook-off," he faces fierce competition and kitchen drama. "To Grill a Mockingbird" is a tale of passion, perseverance, and perfecting the art of bird gourmet.',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/ToGrillAMockingBird.png',
      countInventory: 100,
    },
    {
      name: 'War and Peas',
      description:
        'In a vegetable kingdom torn by conflict, two peas in a pod, Percy and Penelope, embark on a quest to unite their divided land. As they navigate a world of carrot cavalries and tomato treacheries, the duo learns the true meaning of unity and sacrifice. "War and Peas" is a whimsical tale of veggie valor, friendship, and the quest for peace on the dinner plate.',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/WarAndPeas.png',
      countInventory: 100,
    },
    {
      name: 'The Count Of Mint Tea Cristo',
      description:
        'After being wrongly accused and imprisoned, Edmond Dantès escapes and discovers a treasure of the worlds finest teas. Adopting the identity of the enigmatic "Count," he returns to Parisian society, wielding cups of his revitalizing mint tea as a tool for revenge, reconciliation, and redemption. Amidst balls and soirées, each sip reveals secrets, alliances, and a taste of sweet vengeance.',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/MintTeaCristo.png',
      countInventory: 100,
    },
    {
      name: 'Tails Of Two Kitties',
      description:
        'In the bustling metropolis of Catropolis, whisker-twitching twins Whiskers and Mittens embark on a fur-raising adventure, navigating the challenges of tangled yarn mysteries and laser pointer heists. Its a purrfect storm of feline antics as the two try to outsmart alley cats and avoid the dreaded bath time!',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/TailsOfTwoKitties.png',
      countInventory: 100,
    },
    {
      name: 'Game of Throne',
      description:
        'In a kingdom where everyone obsesses over a grand chair, feuds erupt over who has the coziest cushion. Dragons are mostly annoyed because no one made them a comfy recliner.',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/GOT.png',
      countInventory: 100,
    },
    {
      name: 'I am smart',
      description:
        'In I Am Smart, readers delve into a complex tapestry of pseudo-intellectual words and expertly designed blank pages, ensuring youll look deeply contemplative at every gathering. Perfect for those moments when you want to nod thoughtfully while contributing absolutely nothing to the conversation!',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/ImSmart.png',
      countInventory: 100,
    },
    {
      name: 'It',
      description:
        'In the town of Derry, a clown offers balloon animal tutorials with a terrifying twist. Kids band together to confront their deepest fears: a never-ending childhood birthday party gone awry.',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/It.png',
      countInventory: 100,
    },
    {
      name: 'AntiSocial',
      description:
        'Dive deep into a gripping anthology of blank pages and the art of pretending to be engrossed. The ultimate guide for introverts and book lovers who just need a minute... or an hour... or a whole day.',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/AntiSocial.png',
      countInventory: 100,
    },
    {
      name: 'How To Basic Code',
      description:
        'Discover the thrilling world of live debugging and caffeine-induced panic. An essential guide for those who believe sleep is overrated and that users are the best QA testers!',
      category: categories[3],
      price: 9.99,
      rating: 5,
      image: '/img/HowToBasicCode.png',
      countInventory: 100,
    },
  ]);
  console.log(items);

  process.exit();
})();
