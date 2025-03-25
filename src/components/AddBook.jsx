import React, { useState } from 'react'

const AddBook = () => {

    const [title,settitle]=useState("")
    const [author,setautor]=useState("")
    const [description,setdescription]=useState("")
    const [image,setimage]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log({title,author,description,image})
    }

  return (
    <div style={{color: 'black'}}>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="title" >Title</label>
        <input type="text"  value={title} onChange={(e)=>settitle(e.target.value)}/>
        
        <label htmlFor="author">Author</label>
        <input type="text" value={author} onChange={(e)=>setautor(e.target.value)}/>

        <label htmlFor="Description">Description</label>
        <input type="text-area" value={description} onChange={(e)=>setdescription(e.target.value)}/>

        <label htmlFor="coverimage">Coverimage</label>
        <input type="file" value={image} onChange={(e)=>setimage(e.target.value)}/>

        <button type='submit'> submit</button>

      </form>
    </div>
  )
}

export default AddBook
