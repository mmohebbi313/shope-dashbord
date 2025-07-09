let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]

let Members = [
    {
        id:1 , username : "Mohamad Mohebbi" ,title:"Front-end Developer" , img: "img/myimg.jpg"
    },
    {
        id:2 , username : "Mohammad Babai" ,title:"Back-end Developer" , img: "img/myimg.jpg"
    },
    {
        id:3 , username : "ali Rostami" ,title:"Hacker" , img: "img/myimg.jpg"
    },
    {
        id:4 , username : "morteza Kakavand" ,title:"Ui/Ux Desiner" , img: "img/myimg.jpg"
    },
]

const transactions = [
    {
        id: 1,
        customer: 'morteza Kakavand',
        date: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: "img/myimg.jpg"
    },
    {
        id: 2,
        customer: 'ali Rostami',
        date: '23 Jul 2022',
        amount: 123,
        status: 'Declined',
        img: "img/myimg.jpg"
    },
    {
        id: 3,
        customer: 'Mohammad Babai',
        date: '28 May 2022',
        amount: 123,
        status: 'Pending',
        img: "img/myimg.jpg"
    },
    {
        id: 4,
        customer: 'Mohamad Mohebbi',
        date: '1 Feb 2022',
        amount: 123,
        status: 'Approved',
        img: "img/myimg.jpg"
    },
]

let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar: 'img/myimg.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: 'img/myimg.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: 'img/myimg.jpg',
        status: 'active',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: 'img/myimg.jpg',
        status: 'active',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: 'img/myimg.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'img/myimg.jpg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'img/myimg.jpg',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'img/myimg.jpg',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'img/myimg.jpg',
        price: 890
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export {xAxisData , Members , transactions , userRows , products , productsData}