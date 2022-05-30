import React,{useRef} from 'react';
import CountUp, { useCountUp } from 'react-countup';
function CountReact(props) {
    const ref = useRef(null);
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        ref:ref,
        duration: 5,
        end: 10000,
        startOnMount: false
      })
      return (
        <div className='App'>
          <div ref={ref}/>
            <h1>{countUp}</h1>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pauseResume}>Pause/Resume</button>
            <button onClick={() => update(2000)}>Update to 2000</button>
          <h1>
            <CountUp end={1000} duration={5} suffix='USD' decimals={2} />
          </h1>
        </div>
      )
}

export default CountReact;