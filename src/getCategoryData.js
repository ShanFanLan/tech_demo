export default function getCategoryData(ingredients) {

    const categoryData = [];
    const statisticsData = [];
    
        ingredients.forEach(ingredient => {
        const isCategory = categoryData.find( c => c.ingredient.category === ingredient.category);

        if (isCategory) {
            isCategory.categoryCount++;
        }
        else {
            categoryData.push({ ingredient, categoryCount: 1 });
        }
        
    });

        for (let index = 0; index < categoryData.length; index++) {
            statisticsData[index] = {type:categoryData[index]["ingredient"].category , 
                                     value:categoryData[index].categoryCount}
        };
        
    
    console.log("statisticsData = "+ JSON.stringify(statisticsData));

    return statisticsData;
}