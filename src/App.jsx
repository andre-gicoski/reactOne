import './global.css';
import styles from "./App.module.css";
import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andre-gicoski.png',
      name: 'André Gicoski',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2025-03-26 16:23:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gustavohariel.png',
      name: 'Gustavo Hariel',
      role: 'Mobile developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2025-03-25 14:12:30'),
  }

];


export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
          <Sidebar />
          <main>
            {posts.map(post => {
              return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
            })}
          </main>
      </div>
    </div>
  )
}
