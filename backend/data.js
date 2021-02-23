import bcrypt from 'bcryptjs';
const data={
    users:[
        {
            name:'Brayan',
            email:'brayanboukhman@yahoo.ca',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'John',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products:[
        {
            name: 'cool shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock: 10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description: 'high quality product'
        },
        {
            name: 'less cool shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:120,
            countInStock: 20,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description: 'high quality product'
        },
        {
            name: 'third shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            countInStock: 0,
            price:100,
            brand:'Nike',
            rating:4.0,
            numReviews:10,
            description: 'high quality product'
        },
        {
            name: 'math is fun pants',
            category:'Pants',
            image:'/images/p4.jpg',
            price:120,
            countInStock: 8,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description: 'high quality product'
        },
        {
            name: 'the last shirt',
            category:'Shirts',
            image:'/images/p5.jpg',
            price:120,
            countInStock: 10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description: 'high quality product'
        },
        {
            name: 'normal Pants',
            category:'Pants',
            image:'/images/p6.jpg',
            price:10,
            countInStock: 230,
            brand:'Nike',
            rating:1.0,
            numReviews:10,
            description: 'high quality product'
        }
    ]
}

export default data;