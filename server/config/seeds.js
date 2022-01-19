const db = require('./connection');
const { User, Product,  } = require('../models');
// import Azaman1 from "../../client/public/images/Azaman1.jpg"
// import Azaman2 from "../../client/public/images/Azaman2.jpg"
// import FacesofMorocco from "../../client/public/images/FacesofMorocco.jpg"
// import MoneyMaturity from "../../client/public/images/MoneyMaturity.jpg"
// import NoodleGirlArms from "../../client/public/images/NoodleGirlArms.jpg"
// import NoodleGirls1 from "../../client/public/images/NoodleGirls1.jpg"
// import NoodleGirls2 from "../../client/public/images/NoodleGirls2.jpg"
// import NoodleGirls3 from "../../client/public/images/NoodleGirls3.jpg"
// import NoodleGirls4 from "../../client/public/images/NoodleGirls4.jpg"
// import NoodleGirls5 from "../../client/public/images/NoodleGirls5.jpg"
// import NoodleGirls6 from "../../client/public/images/NoodleGirls6.jpg"
// import NoodleGirls7 from "../../client/public/images/NoodleGirls7.jpg"
// import NoodleGirls8 from "../../client/public/images/NoodleGirls8.jpg"
// import NoodleHeadMosaics from "../../client/public/images/NoodleHeadMosaics.jpg"
// import OfTwoMinds1 from "../../client/public/images/OfTwoMinds1.jpg"
// import OfTwoMinds2 from "../../client/public/images/OfTwoMinds2.jpg"
// import TheBlueCity from "../../client/public/images/TheBlueCity.jpg"
// import TheBlueCity2 from "../../client/public/images/TheBlueCity2.jpg"


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
      image: 'Azaman1.jpg',
      category: "Oil",
      startBid: 300
    }
    // {
    //   title: 'Azaman 2',
    //   description:
    //     '26in x 30in mixed media on framed canvas board',
    //   image: '../../client/public/images/Azaman1.jpg',
    //   category: "Finger paint",
    //   startBid: 120
    // },
    // {
    //   title: 'Faces of Morocco',
    //   category: "Painting",
    //   description:
    //     '26in x 20in acrylic on stretched cotton canvas, 6 part mini series',
    //   image: FacesofMorocco,
    //   startBid: 400
    // },
    // {
    //   title: 'Money & Maturity',
    //   category: "Oil",
    //   description:
    //     '8in x 10in collage on paper framed',
    //   image: MoneyMaturity,
    //   startBid: 40
    // },
    // {
    //   title: 'Noodle Girl OG',
    //   category: "Clay",
    //   description:
    //     '8in x 10in acrylic on stretched canvas',
    //   image: NoodleGirlArms,
    //   startBid: 40
    // },
    // {
    //   title: 'Noodle Girls 1',
    //   category: "Acrylic",
    //   description:
    //     '20in x 30in acrylic on stretched canvas',
    //   image: NoodleGirls1,
    //   startBid: 100
    // },
    // {
    //   title: 'Noodle Girls 2',
    //   category: "Acrylic",
    //   description:
    //     '26in x 20in acrylic on stretched canvas',
    //   image: NoodleGirls2,
    //   startBid: 100
    // },
    // {
    //   title: 'Noodle Girls 3',
    //   category: "Acrylic",
    //   description:
    //     '8in x 10in alcohol ink on paper framed',
    //   image: NoodleGirls3,
    //   startBid: 40
    // },
    // {
    //   title: 'Noodle Girls 4',
    //   category: "Acrylic",
    //   description: 
    //     '8in x 10in alcohol ink on paper framed',
    //   image: NoodleGirls4,
    //   startBid: 40
    // },
    // {
    //   title: 'Noodle Girls 5',
    //   category: "Oil",
    //   description:
    //     '8in x 10in alcohol ink on paper framed',
    //   image: NoodleGirls5,
    //   startBid: 40
    // },
    // {
    //   title: 'Noodle Girls 6',
    //   category: "Oil",
    //   description:
    //     '20in x 26in acrylic on framed stretched canvas',
    //   image: NoodleGirls6,
    //   startBid: 150
    // },
    // {
    //   title: 'Noodle Girls 7',
    //   category: "Oil",
    //   description:
    //     '12in x 12in acrylic on stretched canvas',
    //   image: NoodleGirls7,
    //   startBid: 100
    // },
    // {
    //   title: 'Noodle Girls 8',
    //   category: "Oil",
    //   description:
    //     '20in x 26in acrylic on framed stretched canvas',
    //   image: NoodleGirls8,
    //   startBid: 150
    // },
    // {
    //   title: 'Noodle Heads',
    //   category: "Oil",
    //   description:
    //     '30in x 40in acrylic on stretched canvas',
    //   image: NoodleHeadMosaics,
    //   startBid: 300
    // },
    // {
    //   title: 'The Blue City 1',
    //   category: "Oil",
    //   description:
    //     'acrylic on framed stretched canvas',
    //   image: TheBlueCity,
    //   startBid: 150
    // },
    // {
    //   title: 'The Blue City 2',
    //   category: "Mixed media",
    //   description:
    //     'acrylic on framed stretched canvas',
    //   image: TheBlueCity2,
    //   startBid: 100
    // },
    // {
    //   title: 'Of Two Minds 1',
    //   category: "Mixed media",
    //   description:
    //     '8in x 10in watercolor on paper',
    //   image: OfTwoMinds1,
    //   startBid: 50
    // },
    // {
    //   title: 'Of Two Minds 2',
    //   category: "Mixed media",
    //   description:
    //     '8in x 10in watercolor on paper',
    //   image: OfTwoMinds2,
    //   startBid: 50
    // }
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
