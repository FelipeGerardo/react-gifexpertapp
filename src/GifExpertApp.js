import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch','Bleach', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);


    // const handleAdd = () => {
    //     setCategories([...categories,'Death Note']);
    //     // setCategories( cats => [...cats, 'Death Note']);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
