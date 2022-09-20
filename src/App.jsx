import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './styles/global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Post 1</h1>
          <h1>Post 2</h1>
          <h1>Post 3</h1>
        </main>
      </div>  
    </>
  )
}
