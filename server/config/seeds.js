const db = require('./connection');
const { User, Product,  } = require('../models');
import Azaman1 from "../../client/public/images/Azaman1.jpg"
import Azaman2 from "../../client/public/images/Azaman2.jpg"

db.once('open', async () => {
  // await Category.deleteMany();

  // const categories = await Category.insertMany([
  //   { title: 'Acrylic' },
  //   { title: 'Mixed Media' },
  //   { title: 'Watercolor' },
  //   { title: 'Ink' },
  //   { title: 'Other' }
  // ]);

  // console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      title: 'Azaman 1',
      description:
        '36in x 40in mixed media on framed canvas board',
      image: Azaman1,
      category: "Oil",
      startBid: 300
    },
    {
      title: 'Azaman 2',
      description:
        '26in x 30in mixed media on framed canvas board',
      image: Azaman2,
      category: "Finger paint",
      startBid: 120
    },
    {
      title: 'Faces of Morocco',
      category: "Painting",
      description:
        '26in x 20in acrylic on stretched cotton canvas, 6 part mini series',
      image: 'FacesofMorocco.jpg',
      startBid: 400
    },
    {
      title: 'Money & Maturity',
      category: "Oil",
      description:
        '8in x 10in collage on paper framed',
      image: 'MoneyMaturity.jpg',
      startBid: 40
    },
    {
      title: 'Noodle Girl OG',
      category: "Clay",
      description:
        '8in x 10in acrylic on stretched canvas',
      image: 'NoodleGirlArms.jpg',
      startBid: 40
    },
    {
      title: 'Noodle Girls 1',
      category: "Acrylic",
      description:
        '20in x 30in acrylic on stretched canvas',
      image: 'NoodleGirls1.jpg',
      startBid: 100
    },
    {
      title: 'Noodle Girls 2',
      category: "Acrylic",
      description:
        '26in x 20in acrylic on stretched canvas',
      image: 'NoodleGirls2.jpg',
      startBid: 100
    },
    {
      title: 'Noodle Girls 3',
      category: "Acrylic",
      description:
        '8in x 10in alcohol ink on paper framed',
      image: 'NoodleGirls3.jpg',
      startBid: 40
    },
    {
      title: 'Noodle Girls 4',
      category: "Acrylic",
      description: 
        '8in x 10in alcohol ink on paper framed',
      image: 'NoodleGirls4.jpg',
      startBid: 40
    },
    {
      title: 'Noodle Girls 5',
      category: "Oil",
      description:
        '8in x 10in alcohol ink on paper framed',
      image: 'NoodleGirls5.jpg',
      startBid: 40
    },
    {
      title: 'Noodle Girls 6',
      category: "Oil",
      description:
        '20in x 26in acrylic on framed stretched canvas',
      image: 'NoodleGirls6.jpg',
      startBid: 150
    },
    {
      title: 'Noodle Girls 7',
      category: "Oil",
      description:
        '12in x 12in acrylic on stretched canvas',
      image: 'NoodleGirls7.jpg',
      startBid: 100
    },
    {
      title: 'Noodle Girls 8',
      category: "Oil",
      description:
        '20in x 26in acrylic on framed stretched canvas',
      image: 'NoodleGirls8.jpg',
      startBid: 150
    },
    {
      title: 'Noodle Heads',
      category: "Oil",
      description:
        '30in x 40in acrylic on stretched canvas',
      image: 'NoodleHeadMosaics.jpg',
      startBid: 300
    },
    {
      title: 'The Blue City 1',
      category: "Oil",
      description:
        'acrylic on framed stretched canvas',
      image: 'TheBlueCity.jpg',
      startBid: 150
    },
    {
      title: 'The Blue City 2',
      category: "Mixed media",
      description:
        'acrylic on framed stretched canvas',
      image: 'TheBlueCity2.jpg',
      startBid: 100
    },
    {
      title: 'Of Two Minds 1',
      category: "Mixed media",
      description:
        '8in x 10in watercolor on paper',
      image: 'OfTwoMinds1.jpg',
      startBid: 50
    },
    {
      title: 'Of Two Minds 2',
      category: "Mixed media",
      description:
        '8in x 10in watercolor on paper',
      image: 'OfTwoMinds2.jpg',
      startBid: 50
    }
  ]);

  console.log('art products seeded');

  await User.deleteMany();

  await User.create({
    username: 'Lydia',
    email: 'lydia@gmail.com',
    password: 'password12345',
    watchlist: [
      'Of Two Minds 2', 'The Blue City 1'
    ]
  });

  await User.create({
    username: 'Sheri',
    email: 'Sheri@email.com',
    password: 'password12345'
  });

  await User.create({
    username: 'test',
    email: 'test@email.com',
    password: 'pass1234'
  });


  console.log('users seeded');

  process.exit();
});
