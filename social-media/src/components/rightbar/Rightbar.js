import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

function Rightbar(props) {
    const HomeRightbar = () => {
        return (
            <>
                <div className='birthdayContainer'>
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className='birthdayText'>
                        <b>Parth Savla</b> and <b> 3 others</b> have birthday today
                    </span>
                </div>
                <img className='rightbarAd' src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online user={u} key={u.id} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className='rightbarInfo'>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>City:</span>
                        <span className='rightbarInfoValue'>New York</span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>From:</span>
                        <span className='rightbarInfoValue'>Madrid</span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>Relationship:</span>
                        <span className='rightbarInfoValue'>Single</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User friends</h4>
                <div className='rightbarFollowings'>
                    <div className='rightbarFollowing'>
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <ProfileRightBar/>
            </div>
        </div>
    );
}

export default Rightbar;