import './global.css';
import { Post } from './Post';
import { Header } from './components/header';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam voluptate recusandae,"
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
    </div>
  )
}

