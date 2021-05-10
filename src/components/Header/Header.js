import classes from './Header.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../../store/index';
import avatar from '../../images/avatar.jpg'


const Header = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.isAuthenticated);
  const profile = useSelector(state => state.auth.isProfile);


  const logout = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>SURFLIX</h1>
      <nav>
      {auth && ( 
        <ul>
          {profile && (<li>      
            <div className={classes.avatarWrapper}>
              <img src={avatar} className={classes.avatar} alt="avatar"/>
            </div>    

              </li>)}

              <li>
                <button onClick={logout}>Logout</button>
              </li>
              
        </ul>

 )} 

      </nav>
    </header>
  );
};

export default Header;
