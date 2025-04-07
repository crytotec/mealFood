import { Link } from "react-router-dom"
import './contact.css'


function Contact(){
   return(
    <div className="body">
        <div className="bodyset">
                <form className='Form'>
                    <div className='formset'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' placeholder='Input your name' />
                    </div>
                    <div className='formset'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' placeholder='Input your email' />
                    </div>
                    <div className='formset'>
                        <label htmlFor='phone'>Phone Number:</label>
                        <input type='tel' id='phone' placeholder='Input your phone number' />
                    </div>
                    <div className='formset'>
                        <label htmlFor='comment'>Comment:</label>
                        <textarea id='comment' placeholder='Input your comment' />
                    </div> 
                    <Link to=''>
                    <button type='submit'  className='submit'>Submit</button>
                    </Link>
                    <div className="personaldetails">
                    <div className='details'>
                    <h2>Email:</h2>
                   <p>Seyioladimeji790@gmail.com</p>
                    </div>
                    <div className='line'>|</div>
                    <div className='details'>
                    <h2>Phone:</h2>
                   <p>+2349062051901</p>
                    </div>
                    </div>
                    
                </form>
                           </div>

    </div>
   )
}
export default Contact