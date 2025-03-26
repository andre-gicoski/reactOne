import './global.css';
import styles from "./App.module.css";
import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
          <Sidebar />
          <main>
              <Post
              author="André Gicoski"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam voluptate recusandae,"
            />
            <Post
              author="Andrezada"
              content="Um novo post muito legal"
            />
          </main>
 
      </div>
    </div>
  )
}
