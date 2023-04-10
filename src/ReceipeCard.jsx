import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import styles from './ReceipeCard.module.css';
import React, { useState } from 'react'
import { Card } from 'antd';
import { Button, Tooltip, Drawer, Space} from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { Modal} from 'antd';
import { YoutubeOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function RecipeCard({ item }) {

    const { addToFavorite } = useContext(AppContext);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        // console.log("111recipe_name = " + item.recipe_name);
        setIsModalVisible(true);
    };
    //Function that makes the modal invisible
    const handleOk = () => {
        setIsModalVisible(false);
    };
    //Function that makes the modal invisible
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function displayIngredient(item){
        let displayContent =[];

        for (let index = 0; index < item.ingredients.length; index++) {
            displayContent[index] = item.ingredients[index].ingredient_name;
        }

        return displayContent
    }

    return (
        <div id={styles.popularCards} className={styles.popularBlock}>
            <Card className={styles.cards}
                hoverable
                style={{ width: 300 ,}}
                cover={<img alt="" src={item.image} width="100%" height="200"/>}
            >
                <Meta title={item.recipe_name}/>

                <div id="video_button">
                    <div>
                        <Button type="text" onClick={showModal} className={styles.youtubeButton}><YoutubeOutlined/></Button>
                        <Modal  title={item.recipe_name} open={isModalVisible} footer = {null} onOk={handleOk} onCancel={handleCancel}  destroyOnClose={true}>
                            <iframe width="100%" height="315" src={item.recipe_url} title={item.recipe_name} 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen></iframe>
                        </Modal>
                    </div>
                </div>
                <div id="favorite_button">
                <Space>
                    <Tooltip title="Show Ingredients">
                        <Button type="primary" onClick={showDrawer} className={styles.pressButton} style={{ background: "#2183d8"}}>Ingredients</Button>
                            <Drawer title={item.recipe_name} placement="right" onClose={onClose} open={open}>
                            <span>Ingredients:</span>
                            {displayIngredient(item).map((ingredient, index) => (<ul><li>{ingredient}</li></ul>))}
                            </Drawer>
                    </Tooltip>
                    <Tooltip title="Add Favorite">
                        <Button shape="primary" icon={<StarOutlined/>} className={styles.pressButton} style={{ background: "#f86d3c"}}
                        onClick={() => addToFavorite(item)} >Add Favorite</Button>
                    </Tooltip>
                </Space>
                </div>
            </Card>
        </div>
    )
}

