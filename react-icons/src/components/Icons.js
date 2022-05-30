import React from 'react';
import {IconContext} from 'react-icons';
import {FaAcquisitionsIncorporated} from 'react-icons/fa';
import {FaCloudscale} from 'react-icons/fa';

const Icons = () => {
    return (
        <IconContext.Provider value={{color:'blue',size:'10rem'}}>
          <div className="icons">
            <FaAcquisitionsIncorporated/>
            <FaCloudscale/>
          </div>
        </IconContext.Provider>
      );
}

export default Icons;