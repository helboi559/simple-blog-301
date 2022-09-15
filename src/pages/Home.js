import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList'

const Home = ({url,name}) => {
    const [text,setText] = useState('')
    const [blogs,setBlogs] = useState([])
    
    const createBlog = () => {
        console.log("blogs",blogs)
        
        const newBlog = {
                id:blogs.length + 1,
                data:text
        }
        console.log("newBlog",newBlog)
        setBlogs([...blogs,newBlog])
    }
    const deleteBlog = (id) => {
        // const remove = blogs
        setBlogs(blogs.filter((blog)=> {
            return blog.id !== id
        }))
    }
    return (
    <div>
        <div className="header">
            <p>Simple Blog</p>
            <img src={url} width="50px" alt="" />
        </div>
        <div className='blog-input'>

            <h1>Welcome {name}!</h1>
            <label>Blog</label>
            <textarea type="text"  placeholder='Enter your text here' value={text} onChange={(e)=> {
                setText(e.target.value)
            }}/>
            <button onClick={(()=> {
                // add to blog
                createBlog()

            })}>create blog</button>
        </div>
        {/* <hr /> */}
        {blogs.map((blog)=> {
            <hr />
            return (
                
                <div className='card'>
                    
                    <div className="card-header">

                        <img src={url} width="25px" alt="" />
                        <span><strong>{name}</strong></span>
                    </div>
                    <div className='card-body'>
                        <span>{blog.data}</span>
                        <button onClick={()=> {
                        // setBlogId({blog.id})
                        deleteBlog(blog.id)
                        }}>delete</button>
                    </div>
                    
                </div>
            )
        })}
        {/* {blogs.length > 0 && <BlogList blogs={blogs} url={url}/>} */}
        {/* <BlogList blogs={blogs} url={url}/> */}
    </div>
  )
}

export default Home