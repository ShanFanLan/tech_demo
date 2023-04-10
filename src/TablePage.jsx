import React, { useContext} from 'react';
import { AppContext } from './AppContextProvider';
import { Table } from 'antd';
import getTableData from './getTableData';


export default function TablePage() {

    const { favorite  } = useContext(AppContext);

    const columns = [
      {
        title: 'Ingredient_name',
        dataIndex: 'ingredient_name',
        sorter: (a, b) => a.ingredient_name.length - b.ingredient_name.length,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        sorter: (a, b) => a.quantity - b.quantity,
      },
      {
        title: 'Unit',
        dataIndex: 'unit',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        sorter: (a, b) => a.category.length - b.category.length,
      },
    ];

    const tableData = getTableData(favorite);

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <>
          <Table columns={columns} dataSource={tableData} onChange={onChange} />
        </>
    );
}

