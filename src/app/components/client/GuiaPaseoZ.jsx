import React from 'react'

const GuiaPaseoZ = () => {
  return (
    <div className="h-full">
    <div
      id="homeTour"
      className="grid justify-items-center z-20 h-full rounded-xl shadow-md bg-white mb-5 sm:mt-5 mt-10 sm:mx-12 "
    >
          <iframe
            id="tour-zapallar"
            name="Zapallar"
            src="https://tour.panoee.com/iframe/zapallar-bB64L5L66"
            frameBorder="0"
            width="100%"
            height="100%"
            scrolling="no"
            allowvr="no"
            allow="vr; xr; accelerometer; gyroscope; autoplay;"
            allowFullScreen="false"
            webkitallowfullscreen="false"
            mozallowfullscreen="false"
            loading="lazy"
            className="rounded-xl shadow-md"
          />
        </div>
        </div>
  )
}

export default GuiaPaseoZ