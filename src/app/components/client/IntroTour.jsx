import React from 'react'

const IntroTour = () => {
  return (
    <div id="homeTour" className='grid justify-items-center z-20 rounded-xl shadow-md bg-white mb-5 sm:mt-5 mt-10 sm:mx-12 '>
      <iframe
        id="panoee-tour-embeded"
        name="Depto Bilbao, Quilpué"
        src="https://tour.panoee.com/iframe/depto-bilbao-quilpue"
        frameBorder="20"
        width="100%"
        height="400px"
        scrolling="yes"
        allowvr="yes"
        allow="vr; xr; accelerometer; gyroscope; autoplay;"
        allowFullScreen="false"
        webkitallowfullscreen="false"
        mozallowfullscreen="false"
        loading="eager"
        className='rounded-xl sm:w-[100%] w-[90%] '
      />

    </div>
  );
  
}

export default IntroTour