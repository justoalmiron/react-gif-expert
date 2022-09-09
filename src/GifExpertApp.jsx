import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    // no hacer eso por que pierde relacion con los hooks
    //no poner hooks condicionales
    //  if(true){
    //      const [categories1, setcategories1] = useState([ 'Chavo', 'DragonBall' ]);

    //  }

    const [categories, setCategories] = useState(['Chavo']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }





    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>


            <AddCategory onNewCategory={(event) => onAddCategory(event)} />
            {  /* <button onClick={onAddCategory}> Agregar   </button> */}


            {/* Input */}


            {/* Listado de Gif */}
        
                {categories.map((category) => <GifGrid key={category} category={category} />

                )}

           

            {/* Gif Item */}

        </>



    )





}