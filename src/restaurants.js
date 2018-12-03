


const restaurants = [
    {   
        img: './assets/image-LDC.jpg',
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
        img: './assets/image-PVM.jpg',
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
        img: './assets/image-MLT.png',
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
        img: './assets/image-SLB.jpg',
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
        img: './assets/image-BSH.jpg',
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
        img: './assets/image-WF.jpg',
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
        img: './assets/image-BV.jpg',
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
        img: './assets/image-TA.jpg',
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
        img: './assets/image-TLVR.jpg',
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
        img: './assets/image-CPO.jpg',
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
        img: './assets/image-A8S.jpg',
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
        img: './assets/image-CAP.jpg',
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
        img: './assets/image-TOSF.jpg',
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
        img: './assets/image-SAT.jpg',
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
        img: './assets/image-PP.jpg',
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