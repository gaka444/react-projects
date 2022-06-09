import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData';
import {useState} from 'react';

function Post({post}) {
    const [like,setLike] = useState(post.like);
    const [liked, setLiked] = useState(false);

    const likeHandler = () => {
        setLike(liked ? like - 1 : like + 1);
        setLiked(!liked);
    }
    
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt=""/>
                        <span className='postUsername'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className='postDate'>5 mins ago</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVertIcon />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="Some image"/>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img className='likeIcon' src="assets/like.png" onClick={likeHandler}/>
                        <img className="likeIcon" src="assets/heart.png" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people liked this</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post?.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;