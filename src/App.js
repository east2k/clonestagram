
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className={styles.main_body}>
      <Sidebar />
      <main className={styles.main}>
        <Home />
      </main>
      {/* <Routes>
        <Route path='/' element={<h1 style={{color:"red"}}>Home</h1>} />
        <Route path='/explore' element={<h1 style={{color:"red"}}>Explore</h1>} />
        <Route path='*' element={<h1 style={{color:"red"}}>Error lol</h1>} />
      </Routes> */}
    </div>
  );
}

export default App;
