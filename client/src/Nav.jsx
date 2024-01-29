import { Link } from "react-router-dom"; 
import './App.css'

export default function Nav( {homePage} ) {

    return (

        <div className = 'navbar'>
            <Link to = '/' >
               <div className = 'home'> 
                <img src = 'https://cdn-icons-png.flaticon.com/512/29/29302.png' />
               </div>
            </Link>
            <Link to = '/search'> 
                <div className  = 'search'> Search </div>
            </Link>
        </div>

    )
}