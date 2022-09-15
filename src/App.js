import './App.css';
import {useState} from "react"
import Login from './pages/Login';
import Home from './pages/Home';

//https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52

function App() {
  const [name,setName] = useState('')
  const [url,setUrl] = useState('')
  const [show,setShow] = useState(false)
  
  // const [loggedIn,setLoggedIn] = useState(false)
  return (
    <div className="App">
      {/* shows before login */}
      {!show && <Login show={show} setShow={setShow} name={name} setName={setName} url={url} setUrl={setUrl}/>} 
      {/* after login */}
      {show && <Home  url={url} name={name} />}
      
      
    </div>
  );
}

export default App;
// const user = (name,url,signInClick,postClick,text,BlogList,deleteClick)=> {
//   if (signInClick) {
//     if (name & url ) {
//     return "logged in page "
//       if (postClick) {
//         if (text) {
//           add to BlogList (w/id)[{id:1,text:'hi there'}]
//           if (deleteClick) {
//             delete BlogList by id via map
//           }
//         }else {
//           dont add to list
//         }
//       }
//     }else {
//     return "login page"
//    }
//   }
   
// }