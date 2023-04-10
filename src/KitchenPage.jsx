import { useContext, useState } from 'react';
import { AppContext } from './AppContextProvider';
import RecipeCard from './ReceipeCard';
import styles from './KitchenPage.module.css';
import Favorite from './Favorite';
import RecipeToday from './RecipeToday';


export default function KitchenPage() {

    const { recipes } = useContext(AppContext);

    return (
        <>
            <div className={styles.mainGrid}>

                <div className={styles.productContainer}>
                    {recipes.map((recipe, index) => (
                        <RecipeCard  key={index} item={recipe} />
                    ))}
                </div>

                <div className={styles.rightside}>
                    <div>
                    <RecipeToday />
                    </div>
                    <Favorite />
                </div>
            </div>
        </>
    );
}
