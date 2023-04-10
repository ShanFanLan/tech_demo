import TablePage from "./TablePage.jsx";
import BarPage from "./BarPage.jsx";
import PiePage from "./PiePage.jsx";
import styles from "./Statistic.module.css"

export default function Statistic() {

  return (
  <>
      <div className={styles.statisticGrid}>
        <div className={styles.statisticLeft} id={styles.table}><h4>Shopping List</h4><TablePage /></div>
        <div className={styles.statisticRight}>
          <div className={styles.statisticData} id={styles.pie}><PiePage/></div>
          <div className={styles.statisticData} id={styles.bar}><BarPage/></div>
        </div>      
      </div>
  </>
  );
}
