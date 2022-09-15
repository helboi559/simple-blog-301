import React from 'react'

const Login = ({name,setName,url,setUrl,show,setShow}) => {
  return (
    <div className='login'>
        
        <div className="login-page">
            <h1>Login</h1>
            <div>

                <label>Name</label>
                <input type="text" value={name} onChange={(e)=> {
                    setName(e.target.value)
                }}/>
            </div>
            <div>

                <label>Url</label>
                <input type="text" value={url} onChange={(e)=> {
                    setUrl(e.target.value)
                }}/>
            </div>
            <div>
                
                <button onClick={(()=> {
                    setShow(true)
                })}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login