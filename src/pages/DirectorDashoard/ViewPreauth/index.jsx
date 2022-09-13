import React from 'react'
import { bellIcon } from 'assets/images';
import DirectorAppBar from 'components/DirectorAppbar'
import PreauthMRN from './PreauthMRN';
const ViewPreauth = () => {
  return (
    <>
        <DirectorAppBar
          img={bellIcon}
        />
        <PreauthMRN/>
        
    </>
  )
}

export default ViewPreauth