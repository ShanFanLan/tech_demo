export default function getTableData(favorite) {

    let tableData = [];
      
    for (let i = 0; i < favorite.length; i++) {
      for (let j = 0; j < favorite[i]["ingredients"].length; j++)
      tableData = [...tableData , favorite[i]["ingredients"][j]];
    }
    
    return tableData
}