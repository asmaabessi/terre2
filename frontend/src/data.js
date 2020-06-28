import image1 from './images/coffret.jpg'
import image2 from './images/caviar-de-tomates-et-olives-noires.jpg'
import image3 from './images/750-ml.jpg'
import image4 from './images/500-ml.jpg'
import image5 from './images/ANANTARA.jpg'
import image6 from './images/3.png'
import image7 from './images/tomates-sechées.jpg'

export default {
  products: [
    {
        _id: '0',
        name:'coffret saint valentin',
        category:"coffret" ,
        image: image1,
        price:15 ,
        brand : '3 produits',
    },
    {
        _id: '1',
        name:'caviar tomate et olive noir',
        category:'epicerie fine',
        image: image2,
        price:7 ,
        brand : '200g',
    },
    {
        _id: '2',
        name:"huile d'olive",
        category:"huile d'olive",
        image: image3,
        price:5 ,
        brand : '750ml',
    },
    {
        _id: '3',
        name:"huile d'olive",
        category:"huile d'olive",
        image: image4,
        price:5,
        brand : '200g',
    },
    {
        _id: '4',
        name:"anantara",
        category:'epicerie fine',
        image: image5,
        price:5,
        brand : '500g',
    },
    {
        _id: '5',
        name:"huile d'olive",
        category:"huile d'olive",
        image: image6,
        price:20,
        brand : '3L',
    },

    {
        _id: '6',
        name:'tomate sechées',
        category:"epicerie fine" ,
        image: image7,
        price:5 ,
        brand : '200g',
    },
  ]
}