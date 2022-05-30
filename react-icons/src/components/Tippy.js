import React, { forwardRef } from 'react';
import Tip from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const ColorContent = () => {
    return <span style={{color: 'blue'}}>ColorContent</span>
}

const ChildContent = forwardRef((props,ref) => {
    return (
        <div ref={ref}>
            <span>1st line</span>
            <span>2nd line</span>
        </div>
    )
})

function Tippy(props) {
    return (
        <div>
            <div style={{ paddingBottom: '20px' }}>
                <Tip arrow={false} delay={2000} content='Basic tooltip'>
                    <button type="button">Hover</button>
                </Tip>
            </div>
            <div style={{ paddingBottom: '10px' }}>
                <Tip content={<span style={{color : 'orange'}}>Colored</span>}>
                    <button type="button">Hover</button>
                </Tip>
            </div>
            <div style={{ paddingBottom: '10px' }}>
                <Tip content={<ColorContent/>}>
                    <button type="button">Hover</button>
                </Tip>
            </div>
            <div style={{ paddingBottom: '10px' }}>
                <Tip placement='top-start' content={<ColorContent/>}>
                    <ChildContent/>
                </Tip>
            </div>
        </div>
    );
}

export default Tippy;