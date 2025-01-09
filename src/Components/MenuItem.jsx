import React from 'react';

const MenuItem = ({item}) => {
    const {price,category,image,recipe,name} = item
    return (
        <div className='flex space-x-4'>
            <img className='w-28 rounded-bl-[200px] rounded-tr-[200px] rounded-br-[200px] ' src={image} alt="" />
            <div>
                <h3 className='uppercase text-[#151515] text-xl'>{name}-----------------</h3>
                <p className='text-[#737373] '>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;