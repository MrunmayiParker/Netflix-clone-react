import React from 'react';
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { LaptopWindows } from '@material-ui/icons';
// import './public/netflixlogo.png';
const Navbar = () => {
    const [isscrolled, setisscrolled] = useState(false);
    // console.log(window.pageYOffset)

    window.onscroll = () => {
        setisscrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
   };

//    console.log(isscrolled);
  return (

    <div className={isscrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="navcontainer">
            <div className="leftnav">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflixlogo"></img>
                <span>HomePage</span>
                <span>TV Shows</span>
                <span>Movies</span>     
                <span>New and Popular</span>
                <span>My List</span>


            </div>
            <div className="rightnav">
                <SearchIcon className="iconshome"/>
                <span>Children</span>
                <NotificationsActiveIcon className="iconshome" />
                <img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="profile" />
                <div className="profile">
                    <KeyboardArrowDownIcon className="iconshome downarrow" />
                    <div className="options">
                        <span>Settings</span>
                        <span>LogOut</span>

                    </div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Navbar;