import React from 'react'

function SearchBar({city,setCity,handleSubmit}) {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter City" />
            <button type='submit'>Search</button>
        </form>
      
    </div>
  )
}

export default SearchBar
