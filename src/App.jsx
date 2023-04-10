import { Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./PageLayout";
import styles from './App.module.css';
import KitchenPage from "./KitchenPage";
import Statistic from "./Statistic";

function App() {

  return (
    <div>
    <header>

      <h1>  
            <span className={styles.menu} id={styles.list}><a href="/kitchen">Receipt List</a></span> 
            <span className={styles.menu} id={styles.statistic}><a href="/pie">Shopping Statistic</a></span>
            <span id={styles.logo}>🍴Andrew's Hell Kitchen&#128298;</span>
      </h1>

    </header>
    <Routes>
      <Route path="/" element={<PageLayout />}>

        <Route index element={<Navigate to="kitchen" replace />} />

        <Route path="kitchen" element={<KitchenPage /> } />

        <Route path="pie" element={<Statistic /> } />
      </Route>
    </Routes>
    </div>
  );
}

export default App;