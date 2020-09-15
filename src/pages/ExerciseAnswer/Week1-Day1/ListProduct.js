import React from 'react';


let data =[
    {
        name:"Guitar 1",
        price: 2000000,
        img:'https://unsplash.com/photos/YStboKiFPVw'
    },
    {
        name:"Guitar 2",
        price: 3000000,
        img:'https://unsplash.com/photos/-6cScQvixFY'
    },
    {
        name:"Guitar 3",
        price: 5000000,
        img:'https://unsplash.com/photos/6WOtQjsxlpU'
    }
]

const ListProduct = () =>{
    return(
       data.map((item)=>(
           <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <img src={item.img} alt="image"/>
           </div>
        ))
    )
}

export default ListProduct;