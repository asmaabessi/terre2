// import image1 from './images/coffret.jpg'
// import image2 from './images/caviar-de-tomates-et-olives-noires.jpg'
// import image3 from './images/750-ml.jpg'
// import image4 from './images/500-ml.jpg'
// import image5 from './images/ANANTARA.jpg'
// import image6 from './images/3.png'
// import image8 from './images/tomates-sechées.jpg'

export default {
    products: [
      {
          _id: '0',
          name:'coffret saint valentin ',
          category:"coffret" ,
          image: 'https://i.imgur.com/p6MpH2R.jpg',
          price:15 ,
          brand : '3 produits',
          countInStock:0,
      },
      {
          _id: '1',
          name:'caviar tomate et olive noir',
          category:'epicerie fine',
          image:'https://i.imgur.com/IqjCnSk.jpg',
          price:7 ,
          brand : '200g',
          countInStock:6,
      },
      {
          _id: '2',
          name:"huile d'olive",
          category:"huile d'olive",
          image: 'https://i.imgur.com/tLELPSy.jpg',
          price:5 ,
          brand : '750ml',
          countInStock:6,
      },
      {
          _id: '3',
          name:"huile d'olive",
          category:"huile d'olive",
          image: 'https://i.imgur.com/vO7Mjty.jpg',
          price:5,
          brand : '500ml',
          countInStock:0,
      },
      {
          _id: '4',
          name:"anantara",
          category:'epicerie fine',
          image: 'https://i.imgur.com/53K1H5z.jpg',
          price:5,
          brand : '500g',
          countInStock:6,
      },
      {
          _id: '5',
          name:"huile d'olive",
          category:"huile d'olive",
          image: 'https://i.imgur.com/Bc2PhKu.png',
          price:20,
          brand : '3L',
          countInStock:6,
      },
  
      {
          _id: '6',
          name:'tomate sechées',
          category:"epicerie fine" ,
          image: 'https://i.imgur.com/Aobprxs.jpg',
          price:5 ,
          brand : '200g',
          countInStock:10,
      },
    ]
  }