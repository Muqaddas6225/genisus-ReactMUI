
import React, {useState} from 'react';
import { Container } from '@mui/system'
import { Button,Box } from '@mui/material';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';
import {useNavigate} from 'react-router-dom';


import DirectorAppBar from 'components/DirectorAppbar'
import AuthorizationReport from './AuthorizationReport';
import InsuranceCoverage from './InsuranceCoverage';
import SpaiDataEngine from './SpaiDataEngine';
import { profilelogo } from 'assets/images';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import './logPreauth.scss'






const LogPreauth = () => {

  const navigate = useNavigate()
  // const [currentButtonVariant, setCurrentButtonVariant] = useState('outlined');
  // const [navigationColor, setNavigationColor] = useState('#1A97DC')
  // const [currentButtonVariant1, setCurrentButtonVariant1] = useState('outlined');
  const [saveIndex, setsaveIndex] = useState(0)
  // const [buttoncolor, setButtoncolor] = useState('#1A97DC')

  // const handleButtonVariantChange = () => {
  //   (currentButtonVariant === 'outlined')?
  //     setCurrentButtonVariant('contained') && setNavigationColor('#FFFFFF') :
  //     setCurrentButtonVariant('outlined') && setNavigationColor('#1A97DC') 
    
  // }

  // const handleButtonVariantChange1 = () => {
  //   (currentButtonVariant1 === 'outlined')? 
  //   setCurrentButtonVariant1('contained'):
  //   setCurrentButtonVariant1('outlined')
  // }
  
  const submitToHome = () =>{
    
    const el = document.querySelector('submitButton');
    el.classList.remove("swiper-button-disabled");
    return saveIndex === 2 ? navigate(`/`): null
  }

  
 
  return (
    <>
      <DirectorAppBar
        img={profilelogo}
        name="David Smith"
      />
        <section className='logPreauth-Section'>
          <Container maxWidth='1290px'>
            <Box mb='30px'>
              <Swiper style={{paddingBottom : '40px'}}
              // install Swiper modules
                  spaceBetween={50}
                  slidesPerView={1}
                  // onReachEnd={() => {nextEL : 'Submit'}}
                  onChange={(value , index) => console.log(value , index , 'index') }
                  onCall
                  navigation = {{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  virtual
                  pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                  modules={[Pagination, Navigation, Virtual]}
                  onSwiper={(swiper , index) => console.log(swiper , index)}
                  onSlideChange={(value) => setsaveIndex(value.activeIndex)}
               >

                  <SwiperSlide >
                      <SpaiDataEngine/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <AuthorizationReport/>
                  </SwiperSlide>
                  <SwiperSlide  >
                      <InsuranceCoverage/>
                  </SwiperSlide> 
                          
              </Swiper>
            </Box>
            <Box display='flex'
                flexDirection='row'
                justifyContent='space-around'
                flexWrap = 'wrap'
                >
                <Button className="swiper-button-prev"
                    variant = 'outlined'
                        // color = {navigationColor}
                        // color : `${( currentButtonVariant === 'contained')? 'white' : 'primary.main'}` 
                    sx={{textTransform:'capitalize', mb:'15px' }}
                  
                      //  onClick={handleButtonVariantChange}
                    >Back
                </Button>
                <Button 
                    onClick={(Button.value === 'Submit'? ()=> submitToHome() :null) }  className="swiper-button-next "
                    id='submitButton' 
                    sx={{textTransform:'capitalize', color : '#1A97DC', mb:'15px'}}
                    variant ='outlined'
                    >{saveIndex === 2 ? 'Submit': 'Next'}
                </Button>   
            </Box> 
          </Container>
          
        </section>
    </>
  )
}

export default LogPreauth