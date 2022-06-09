import './home.css';
import PersonIcon from '@mui/icons-material/Person';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

function Home(props) {
    return (
        <>
            <Topbar/>
            <div className='homeContainer'>
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    );
}

export default Home;