import { useContext} from 'react';
import { AppContext } from './AppContextProvider';
import { Pie, G2 } from '@ant-design/plots';
import getTableData from './getTableData.js';
import getCategoryData from './getCategoryData.js';
import { notification } from 'antd';

const G = G2.getEngine('canvas');

export default function PiePage() {

  const { favorite } = useContext(AppContext);

  const ingredients = getTableData(favorite);

  const data = getCategoryData(ingredients);

      const pieconfig = {
        appendPadding: 10,
        data,
        // theme: 'dark',
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        innerRadius: 0.4,

        legend: {
          layout: 'horizontal',
          position: 'top',
          offsetX: 0
        },

        label: {

          type: 'spider',
          labelHeight: 40,

          formatter: (data, mappingData) => {
            const group = new G.Group({});
            group.addShape({
              type: 'circle',
              attrs: {
                x: 0,
                y: 0,
                width: 40,
                height: 50,
                r: 5,
                fill: mappingData.color,
              },
            });
            group.addShape({
              type: 'text',
              style: {
              fontSize: 14,
              textAlign: 'center',
              },
              attrs: {
                x: 10,
                y: 8,
                text: `${data.type}`,
                fill: mappingData.color,
              },
            });
            group.addShape({
              type: 'text',
              attrs: {
                x: 0,
                y: 25,
                text: `${(data.percent * 100).toFixed(2)}% (Quantity: ${data.value})`,
                fill: 'rgba(0, 0, 0, 0.65)',
                fontWeight: 700,
                
              },
            });
            return group;
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-highlight', //element-active
          },
        ],
      };

function openNotification() {

  let totalIngredient = 0;
  let meatNum = 0;

  for (let index = 0; index < data.length; index++) {
    totalIngredient += data[index].value;
    if(data[index].type == "meat")
    { meatNum = data[index].value}
  } 

  if((meatNum/totalIngredient) > 0.02)
  {
    notification.open({
      message: 'Too Much Meat !!!',
      description:
        'You need more Vegetables🥦Fruit🍎 or Beer 🍺.',
    });
  }
};

openNotification(data);

  return (
    <>
        <Pie {...pieconfig}/>
    </>
  );
}
