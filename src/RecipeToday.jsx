import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import styles from './RecipeToday.module.css';
import { Carousel } from 'antd';

const contentStyle = {
    // height: '200',
    width:"100%" ,
    height:"60",
    color: 'red',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#34416a',
  };

export default function RecipeToday() {

    const { recipes } = useContext(AppContext);

    function randomRecipe(recipes){

        const id= Math.floor(Math.random() * (recipes.length));

        return id
    }

    return (

        <div className={styles.carousel}>
        <Carousel autoplay>
            <div>
            <img src={recipes[randomRecipe(recipes)].image} style={contentStyle} className={styles.carouselimg}></img>
            </div>
            <div>
            <img src={recipes[randomRecipe(recipes)].image} style={contentStyle} className={styles.carouselimg}></img>
            </div>
            <div>
            <img src={recipes[randomRecipe(recipes)].image} style={contentStyle} className={styles.carouselimg}></img>
            </div>
            <div>
            <img src={recipes[randomRecipe(recipes)].image} style={contentStyle} className={styles.carouselimg}></img>
            </div>
        </Carousel>
        </div>
    );

}