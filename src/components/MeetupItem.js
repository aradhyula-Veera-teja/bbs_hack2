import classes from './MeetupItem.module.css';
import {MdDelete} from 'react-icons/md';
function MeetupItem(){
    return(
        <div className={classes.container}>
            <div className={classes.imageBox}> 
            
            </div>
            <div className={classes.textBox}>
                <h3>
                    title
                </h3>
                <address>xyz </address>
                <p>discription </p>
            </div>
            <div className={classes.buttonBox}>
                <button> <MdDelete size='1.5em'/></button>
            </div>
        </div>
    );
}
export default MeetupItem;