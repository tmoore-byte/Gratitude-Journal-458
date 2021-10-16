import { useState } from "react"
export default function input({handleSubmit}){
    const[value, setValue] = useState("")
    


let submitForm = e => {
    e.preventDefault()
    handleSubmit(value)
    setValue("")
}

    return(
        <form onSubmit={ submitForm}>
            <input placeholder="Enter Gratitude" type="text" 
                value={value} 
                onChange={e => setValue(e.target.value)}
                className="rounded px-3 py-2">
            </input>

            <button type="submit" 
                className = "bg-pink-300 rounded px-12 py-2">Save</button>
        </form>
    )
}