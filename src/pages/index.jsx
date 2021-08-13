import Head from 'next/head'
import { useCallback, useState } from 'react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [text,setText] = useState("");
  const [array, setArray] = useState([]);

  const handleAdd = useCallback(() => {
    setArray((array) => {
      if(array.some(item => item === text)) {
        alert("同じ要素が既に存在します")
        return array;
      }  
      return [...array, text]
    }
    )
  },[text])

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="index" />
      <Footer/>

    </div>
  )
}
