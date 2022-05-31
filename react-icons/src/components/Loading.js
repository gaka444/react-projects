import React from 'react';
import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners';
import {css} from '@emotion/react';

const loaderCss = css`
    margin: 25px 0;
`

function Loading(props) {
    return (
        <div style={{display : 'flex', flexDirection: 'column'}}>
            <BounceLoader css={loaderCss} color='blue' loading />
            <BarLoader css={loaderCss} color='red' loading/>
            <BeatLoader css={loaderCss} color='yellow' loading/>
        </div>
    );
}

export default Loading;