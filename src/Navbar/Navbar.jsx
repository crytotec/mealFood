import { Link } from "react-router-dom"
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa"
import { useState,useEffect } from "react"



function Navbar(){
const [menu, setMenu]=useState(false);
 const createmenu = () =>{
    setMenu(!menu)
 }

 const OnclickMenu= () =>{
    setMenu(false)
 }

 useEffect(()=>{
   if(menu){
    document.body.style.overflow='hidden'
   }else{
    document.body.style.overflow='scroll'
   }
 },[menu])
return(
    <div className="setbody">
        <ul>
            <div className="logo">
                Crytotec
            </div>
            <div className="hamburger" onClick={createmenu}>
              {menu ? <FaTimes/>:
                <FaBars/>}  
            </div>            
   </ul>
{menu &&
    <div onChange={menu} className="list">
    <li> 
<Link className='link' to='/' onClick={OnclickMenu}>
Home
</Link>
</li>
<li>
<Link className='link' to='/about' onClick={OnclickMenu}>
 About
</Link>
</li>
<li>
<Link className='link' to='/contact' onClick={OnclickMenu}>
 Contact
</Link>
</li>
<li>
<Link className='link' to='/plans' onClick={OnclickMenu}>
 Plans
</Link>
</li>
<li>
<Link className='link' to='/meals' onClick={OnclickMenu}>
 Meals
</Link>
</li>
 </div>
   }
   


               </div>
)
}
export default Navbar