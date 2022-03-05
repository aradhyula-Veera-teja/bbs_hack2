import {BsMoonFill} from 'react-icons/bs';
import {classes} from './Theme.module.css';
function Theme(){
return (
    <div className={classes.DarkMode}>
        <BsMoonFill />
    </div>
);
}
export default Theme;