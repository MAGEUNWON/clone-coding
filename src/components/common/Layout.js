import {Outlet} from 'react-router-dom';
import {MdWifi} from 'react-icons/md'
import{MdOutlineScreenLockRotation} from 'react-icons/md'
import {IoBatteryHalfOutline} from 'react-icons/io5';
import './Layout.css';

const Layout = () => {
  return(
    <div>
      <header className='header'>
        <div class="grid">
          <div class="item">
            <div>No Service</div>
            <div className='icons'>
              <MdWifi />
            </div>
          </div>
          <div class="item">
            <div>18:43</div>
          </div>
          <div class="item">
            <div className='icon'>
              <MdOutlineScreenLockRotation />
            </div>
            <div>11%</div> 
            <div className='icons'>
              <IoBatteryHalfOutline />
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;