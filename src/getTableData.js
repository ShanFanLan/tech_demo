export default function getTableData(favorite) {

    let tableData = [];
      
    for (let i = 0; i < favorite.length; i++) {
      for (let j = 0; j < favorite[i].ingredients.length; j++)
      tableData = [...tableData , favorite[i]["ingredients"][j]];
    }
    
    return tableData
}

// favorite[i].ingredients.length
// favorite[i]["ingredients"][j]
// 以上兩種表示方法都可以