import {} from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function Nav(){
    return(
        <>
        <nav className='menu'>
            <Link to='produtos' id='tlink'>Produtos</Link>
        </nav>
        
        </>
    )
}

export default Nav