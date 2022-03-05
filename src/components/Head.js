import classes from './Head.module.css';
import { Link} from 'react-router-dom';
function Head(){
    return(
        <header className ={classes.headder}>
            <div className ={classes.logo}>
                <h3>
                    DBS Schedulear
                </h3>
            </div> 
            <nav>
                <ul>
                    <li>
                        <Link to='/'> HNIlogin</Link>
                    </li>
                    <li>
                        <Link to='/add-new-meetups'>VM login</Link>
                    </li>
                </ul>
              
             
            </nav>         
        </header>
    );
}

export default Head;