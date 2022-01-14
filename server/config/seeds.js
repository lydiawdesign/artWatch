const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Acrylic' },
    { name: 'Mixed Media' },
    { name: 'Watercolor' },
    { name: 'Ink' },
    { name: 'Other' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      title: 'Azaman 1',
      description:
        '36in x 40in mixed media on framed canvas board',
      image: 'Azaman1.jpg',
      category: categories[1]._id,
      startBid: 300
    },
    {
      name: 'Azaman 2',
      description:
        '26in x 30in mixed media on framed canvas board',
      image: 'Azaman2.jpg',
      category: categories[1]._id,
      startBid: 120
    },
    {
      name: 'Faces of Morocco',
      category: categories[0]._id,
      description:
        '26in x 20in acrylic on stretched cotton canvas, 6 part mini series',
      image: 'FacesofMorocco.jpg',
      startBid: 400
    },
    {
      name: 'Money & Maturity',
      category: categories[4]._id,
      description:
        '8in x 10in collage on paper framed',
      image: 'MoneyMaturity.jpg',
      startBid: 40
    },
    {
      name: 'Noodle Girl OG',
      category: categories[0]._id,
      description:
        '8in x 10in acrylic on stretched canvas',
      image: 'NoodleGirlArms.jpg',
      startBid: 40
    },
    {
      name: 'Noodle Girls 1',
      category: categories[0]._id,
      description:
        '20in x 30in acrylic on stretched canvas',
      image: 'NoodleGirls1.jpg',
      startBid: 100
    },
    {
      name: 'Noodle Girls 2',
      category: categories[0]._id,
      description:
        '26in x 20in acrylic on stretched canvas',
      image: 'NoodleGirls2.jpg',
      startBid: 100
    },
    {
      name: 'Noodle Girls 3',
      category: categories[3]._id,
      description:
        '8in x 10in alcohol ink on paper framed',
      image: 'NoodleGirls3.jpg',
      startBid: 40
    },
    {
      name: 'Noodle Girls 4',
      category: categories[3]._id,
      description: 
        '8in x 10in alcohol ink on paper framed',
      image: 'NoodleGirls4.jpg',
      startBid: 40
    },
    {
      name: 'Noodle Girls 5',
      category: categories[3]._id,
      description:
        '8in x 10in alcohol ink on paper framed',
      image: 'NoodleGirls5.jpg',
      startBid: 40
    },
    {
      name: 'Noodle Girls 6',
      category: categories[0]._id,
      description:
        '20in x 26in acrylic on framed stretched canvas',
      image: 'NoodleGirls6.jpg',
      startBid: 150
    },
    {
      name: 'Noodle Girls 7',
      category: categories[0]._id,
      description:
        '12in x 12in acrylic on stretched canvas',
      image: 'NoodleGirls7.jpg',
      startBid: 100
    },
    {
      name: 'Noodle Girls 8',
      category: categories[0]._id,
      description:
        '20in x 26in acrylic on framed stretched canvas',
      image: 'NoodleGirls8.jpg',
      startBid: 150
    },
    {
      name: 'Noodle Heads',
      category: categories[0]._id,
      description:
        '30in x 40in acrylic on stretched canvas',
      image: 'NoodleHeadMosaics.jpg',
      startBid: 300
    },
    {
      name: 'The Blue City 1',
      category: categories[0]._id,
      description:
        'acrylic on framed stretched canvas',
      image: 'TheBlueCity.jpg',
      startBid: 150
    },
    {
      name: 'The Blue City 2',
      category: categories[0]._id,
      description:
        'acrylic on framed stretched canvas',
      image: 'TheBlueCity2.jpg',
      startBid: 100
    },
    {
      name: 'Of Two Minds 1',
      category: categories[2]._id,
      description:
        '8in x 10in watercolor on paper',
      image: 'OfTwoMinds1.jpg',
      startBid: 50
    },
    {
      name: 'Of Two Minds 2',
      category: categories[2]._id,
      description:
        '8in x 10in watercolor on paper',
      image: 'OfTwoMinds2.jpg',
      startBid: 50
    }
  ]);

  console.log('art products seeded');

  await User.deleteMany();

  await User.create({
    name: 'Lydia',
    email: 'lydia@gmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    name: 'Sheri',
    email: 'Sheri@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
