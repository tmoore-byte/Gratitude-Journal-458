// homepage if person is logged in


import Greeting from '../components/my-greeting'
import History from '../components/History'
import { useEffect, useState } from 'react'
import Input  from '../components/Input'
import Delete from '../components/Delete'
import  {supabase}  from '../components/Utils/supabaseClient'


export default function GraditudeApp({user}) {
  /* user is data value, updater fucntion is setUser,
   default value of var is useState */
   /* like getter setter */

  


  const[gratitudes, setGratitudes] = useState([])
  const[hasSubmittedToday, setSubmittedToday] = useState(false)

  /* writing a function to fetch data for useState */
  useEffect(() =>{
    // run the fetchGratitudes() 
    // adter teh initial render of the app
    // so we have access to the logged in user
    fetchGratitudes()
  }, [])

// writing fetch function
const fetchGratitudes = async() => {
  // get the graditudes data from supabase
  // set the value of gratitudes state to that data
  let {data: gratitudes, error } = await supabase
  .from('gratitudes')
  .select('entry, date_insert_ts')
  
  if (!error) {
    setGratitudes(gratitudes)
  }else{
    //there was an error
    console.log(error)
    setLoading(false)
    setError(error)
  }
  console.log();
}

  const removeGratitude = async(entry) => {
    const { data, error } = await supabase
  .from('gratitudes')
  .delete()
  .eq('some_column', 'someValue')
  }

  const addGratitude = async (entry) => {
    const { data, error } = await supabase
    .from('gratitudes')
    .insert([
      { id: user.id, entry: entry },
  ])

  if (error) { console.log(error)}
  else {
    //deconstructs to every element in array
    // and updates entry and sends to db
    // and state client on 
    setGratitudes([...gratitudes, {'entry': entry, 'date_insert_ts': null}]) 
    
  }
  }


  return (
    <div className="bg-gray-700 min-h-screen min-w-screen">

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
          gratitudes.length > 0 &&(
            <History
            className="p-3"
            gratitudes={gratitudes}
          ></History>
          )}
      </main>

      <style jsx>{`
        .spacer{
          height: 20px;
        }
      `}</style>

    </div>
  )
}