import { useContext} from 'react';
import { AppContext } from './AppContextProvider';
import { Bar } from '@ant-design/plots';
import getTableData from './getTableData.js';
import getCategoryData from './getCategoryData.js';

export default function BarPage() {

  const { favorite } = useContext(AppContext);

  const ingredients = getTableData(favorite);

  const data = getCategoryData(ingredients);

      const barconfig = {
        data,
        autoFit: true,
        tickInterval: 200,
        barWidthRatio: 0.5,
        xField: 'value',
        yField: 'type',
        seriesField: 'type',
        legend: {
          position: 'top',
        },
      };

  return (
    <>
      <Bar {...barconfig} />  
    </>
  );
}
