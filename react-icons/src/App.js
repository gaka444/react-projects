import Tippy from './components/Tippy';
import './App.css';
import Icons from './components/Icons';
import ModalReact from './components/ModalReact';
import Toast from './components/Toast';
import CountReact from './components/CountReact';
import IdleTimerContainer from './components/IdleTimerContainer';
import ColorPicker from './components/ColorPicker';
import DatePickerContainer from './components/DatePickerContainer';
import Player from './components/Player';
import Loading from './components/Loading';
import LineChart from './components/LineChart';
import BarChart from './components/Barchart';
import DoughnutChart from './components/DoughnutChart';

function App() {
  return (
      <div className="App">
        {/* <LineChart/> */}
        {/* <BarChart /> */}
        <DoughnutChart />
      </div>
  );
}

export default App;