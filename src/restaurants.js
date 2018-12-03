import imageLDC from './assets/image-LDC.jpg';
import imageMLT from './assets/image-MLT.png';
import imageSLB from './assets/image-SLB.jpg';
import imageWF from './assets/image-WF.jpg';
import imageBV from './assets/image-BV.jpg';
import imageTA from './assets/image-TA.jpg';
import imageCAP from './assets/image-CAP.jpg';
import imageTOSF from './assets/image-TOSF.jpg';
import imageSAT from './assets/image-SAT.jpg';
import imagePP from './assets/image-PP.jpg';
import imageTLVR from './assets/image-TLVR.jpg';
import imagePVM from './assets/image-PVM.jpg';
import imageCPO from './assets/image-CPO.jpg';
import imageA8S from './assets/image-A8S.jpg';
import imageBSH from './assets/image-BSH.jpg';

const restaurants = [
    {   
        img: imageLDC,
        name: 'Lazy Daisy\'s Cafe',
        neighbourhood: 'East End',
        address: '1515 Gerrard Street East',
        kfRating: 5,
        highchairs: 7,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imagePVM,
        name: 'Pizzeria Via Mercanti (Gerrard)',
        neighbourhood: 'East End',
        address: '1499 Gerrard St. E.',
        kfRating: 3,
        highchairs: 3,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageMLT,
        name: 'Maple Leaf Tavern',
        neighbourhood: 'East End',
        address: '955 Gerrard Street East',
        kfRating: 3,
        highchairs: 3,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageSLB,
        name: 'Sugar Loaf Bakery',
        neighbourhood: 'East End',
        address: '1062 Gerrard St East',
        kfRating: 4,
        highchairs: 3,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageBSH,
        name: 'Barque Smokehouse',
        neighbourhood: 'West End',
        address: '299 Roncesvalles Ave',
        kfRating: 3,
        highchairs: 3,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageWF,
        name: 'Wallflower',
        neighbourhood: 'West End',
        address: '1665 Dundas St W',
        kfRating: 4,
        highchairs: 3,
        strollerAcc: 'One Step at Entrance',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {   
        img: imageBV,
        name: 'Bar Vespa',
        neighbourhood: 'West End',
        address: '167 East Liberty St.',
        kfRating: 3,
        highchairs: 4,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageTA,
        name: 'The Ace',
        neighbourhood: 'West End',
        address: '231A Roncesvalles Ave',
        kfRating: 1,
        highchairs: 1,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageTLVR,
        name: 'Lakeview Restaurant',
        neighbourhood: 'West End',
        address: '1132 Dundas St. West',
        kfRating: 4,
        highchairs: 3,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageCPO,
        name: 'Cafe Polonez',
        neighbourhood: 'West End',
        address: '195 Roncesvalles Avenue',
        kfRating: 4,
        highchairs: 3,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageA8S,
        name: 'August 8 Spadina',
        neighbourhood: 'Downtown',
        address: '331 Spadina Ave',
        kfRating: 5,
        highchairs: 3,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageCAP,
        name: 'Caplansky\'s',
        neighbourhood: 'Downtown',
        address: '356 College St',
        kfRating: 4,
        highchairs: 7,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageTOSF,
        name: 'The Old Spaghetti Factory',
        neighbourhood: 'Downtown',
        address: '54 The Esplanade',
        kfRating: 4,
        highchairs: 9,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imageSAT,
        name: 'Salt and Tobacoo',
        neighbourhood: 'Downtown',
        address: '521 Parliament St',
        kfRating: 5,
        highchairs: 4,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
    {
        img: imagePP,
        name: 'Piano Piano',
        neighbourhood: 'Downtown',
        address: '88 Harbord St',
        kfRating: 5,
        highchairs: 6,
        strollerAcc: 'yes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis laudantium ipsam ea ad totam et blanditiis ex perspiciatis, fugiat iusto ullam exercitationem nostrum velit natus harum eligendi eveniet aliquam.',
        likes: 0
    },
]

export default restaurants;