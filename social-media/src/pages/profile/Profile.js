import React from 'react';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css';

function Profile(props) {
    return (
        <>
            <Topbar/>
            <div className='profile'>
                <Sidebar/>
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img className='profileCoverImg' src="assets/post/3.jpeg" />
                            <img className='profileUserImg' src="assets/person/7.jpeg" />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>rOhan Waghmare</h4>
                            <span className='profileInfoDesc'>Hey frenz</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Profile;