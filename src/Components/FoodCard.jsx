import React from 'react';

const FoodCard = ({item}) => {
    const {price,category,image,recipe,name} = item
    return (
        <div className=" card bg-base-100 md:w-96 w-72   shadow-xl">
            <figure className='w-full'>
                <img className='w-full'
                    src={image}
                    alt={name} />
            </figure>
            <p  className='bg-slate-950 text-white absolute top-0 right-0 z-10 mr-4 mt-4 px-3 py-1'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button className='btn border-0 text-[#D99904]  bg-transparent px-5 py-3 border-b-4 border-[#D99904] rounded-lg hover:bg-black font-semibold' > Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;