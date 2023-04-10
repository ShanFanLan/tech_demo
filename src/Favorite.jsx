import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import styles from './Favorite.module.css';
import { Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


/**
 * Displays the items in user's shopping favorite, grouped by item - i.e. instead of displaying "Abra, Abra, Abra", it would display "Abra x3".
 * Also displays the total cost of items in the favorite.
 */
export default function Favorite() {

    const { favorite , clearFavorite} = useContext(AppContext);

    return (
        <div className={styles.favorite}>
            <h3>My Favorite</h3>
            {favorite.map((favorite, index) => (
                <DisplayFavorite key={index} favorite={favorite} />
            ))}

            <Tooltip title="Reset Favorite">
                <Button shape="primary" icon={<DeleteOutlined />} style={{ background: "#502206"}}
                onClick={() => clearFavorite()}>Reset Favorite</Button>
            </Tooltip>
        </div>
    );
}

function DisplayFavorite({favorite}) {

    const {onRemoveFavorite} = useContext(AppContext);

    return (
        <div className={styles.cartItem}>
            <h3>{favorite.recipe_name}</h3>
            <Tooltip title="Double click to remove">
                <img width="60%" height="100" src={favorite.image} className={styles.image}
                onDoubleClick={() => onRemoveFavorite(favorite)} />
            </Tooltip>
        </div>
    )
}