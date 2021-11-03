import Head from 'next/head'
import Greeting from '../components/my-greeting'
import History from '../components/History'
import { useState } from 'react'
import Input  from '../components/Input'
import Delete from '../components/Delete'
import {supabase}  from '../components/Utils/supabaseClient'
import GraditudeApp from '../components/GraditudeApp'
import { Auth, Button } from '@supabase/ui'



export default function Home() {
  //gets the logged in user form auth.usercontext provider
  // if no user is logged in, user will be null
  // if someone is logged in, user will be an object with user info
  const{user} = Auth.useUser()
  /* user is data value, updater fucntion is setUser,
   default value of var is useState */
   /* like getter setter */

   

  return (
    <div className="bg-gray-700 min-h-screen min-w-screen">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-prose px-4 mt-10">
        {
          user ? (
            <div>
            <GraditudeApp user={user}/>
            <button className="text-pink-300 font-semibold"
            onClick={async () => {
              const { error } = await supabase.auth.signOut()
              if (error) console.log('Error logging out: ', error.message)
            }}>Logout</button>
            </div>

          ): (
            <div className="bg-white">
          <Auth supabaseClient={supabase} socialLayout= "horizontal" socialButtonSize="xlarge"/>
        </div>
          )
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
