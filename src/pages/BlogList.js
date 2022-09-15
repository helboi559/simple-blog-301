import React from 'react'

const BlogList = ({blogs,url}) => {
  return (
    <div>
        {blogs.map((blog)=> {
            return (
                <div>
                    <img src={url} width="25px" alt="" />
                    <div><span>{blog}</span></div>
                    <button onClick={()=> {
                        // deleteBlog(id)
                    }}>delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default BlogList