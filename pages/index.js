import Head from 'next/head'
import Greeting from '../components/my-greeting'
import History from '../components/History'
import { useState } from 'react'
import Input  from '../components/Input'


export default function Home() {
  /* user is data value, updater fucntion is setUser,
   default value of var is useState */
   /* like getter setter */
const[user, setUser] = useState({
    "name": "Thomas",
    "email": "tmoore@chapman.edu",
  })


  const[gratitudes, setGratitudes] = useState([])
  const[hasSubmittedToday, setSubmittedToday] = useState(false)

  const addGratitude = (entry) => {
    let newGratitudes = [...gratitudes, entry]
    setGratitudes(newGratitudes)
    setSubmittedToday(true)
  }

  return (
    <div className="bg-gray-700 min-h-screen min-w-screen">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-prose px-4 mt-10">
        <Greeting 
        color="text-pink-300"
          user={user}
          gratitudes={gratitudes}
          hasSubmittedToday={hasSubmittedToday}
        ></Greeting>
        <div className="spacer" />
      {
        !hasSubmittedToday && <Input handleSubmit={addGratitude}/>
      }

      <div className="spacer"/>

        {
          gratitudes.length > 0 &&
        <History gratitudes={gratitudes}></History>
        }
      </main>

      <style jsx>{`
        .spacer{
          height: 20px;
        }
      `}</style>

    </div>
  )
}
