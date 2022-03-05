import classes from './MenuButton.module.css';
import {MdMenu} from 'react-icons/md';
function MenuButton(){
    return(
        <div className={classes.MenuButton}>
            <MdMenu size='1.5em' color='red'/>
        </div>
    );
}
export default MenuButton;