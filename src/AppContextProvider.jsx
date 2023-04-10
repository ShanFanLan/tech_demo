import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import recipes from './Recipes.json'

export const AppContext = React.createContext({});

export function AppContextProvider({ children }) {

    const [favorite, setFavorite] = useLocalStorage('favorite', []);
    let tableData = [];

    function addToFavorite(item){
        if(!checkDuplicatedFavorite(item))
        {   
            setFavorite([...favorite, item]);
        }
    }
    
    function checkDuplicatedFavorite(item){

        for (let index = 0; index < favorite.length; index++) {
            if (item.id == favorite[index].id)
                {return true;}
        }
        return false;
    }

    function clearFavorite(){
        setFavorite([]);
    }

    function onRemoveFavorite(removefavorite){

        const newCart = favorite.filter((item) => (item.id !== removefavorite.id));
        // 保留不是要移除的pokemon ID的其他資料

        setFavorite(newCart);
    }

    const context = {
        recipes,
        favorite,
        addToFavorite,
        clearFavorite,
        onRemoveFavorite
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}