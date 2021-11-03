// utils/supabaseClient.js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xsymdjkfdepgszqzsfjb.supabase.co' //process.env' //SUPABASE_ANO.NEXT_PUBLIC_SUPABASE_URL'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDY5MjMxMCwiZXhwIjoxOTUwMjY4MzEwfQ.ipXV6sN8PZeJSMIYP-1xYOn4C4LjcgyvkoL6INcAGOQ'//process.env.NEXT_PUBLIC_N_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


