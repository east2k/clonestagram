import styles from './App.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className={styles.main_body}>
      <Sidebar />
    </div>
  );
}

export default App;
