import React from 'react';

export const Cloudy_icon_1: React.FC = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      viewBox="0 0 64 64"
    >
    <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <style type="text/css">
                {`
                /*
                ** CLOUDS
                */
                @keyframes am-weather-cloud-2 {
                    0% {
                    -webkit-transform: translate(0px,0px);
                    -moz-transform: translate(0px,0px);
                    -ms-transform: translate(0px,0px);
                    transform: translate(0px,0px);
                    }
                    /* Rest of the CSS animations for clouds */
                }

                /*
                ** SUN
                */
                @keyframes am-weather-sun {
                    0% {
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -ms-transform: rotate(0deg);
                    transform: rotate(0deg);
                    }
                    /* Rest of the CSS animations for the sun */
                }
                `}
            </style>
            </defs>
            <g filter="url(#blur)" id="cloudy-day-1">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                <g className="am-weather-sun">
                    <g>
                    <line
                        fill="none"
                        stroke="orange"
                        strokeLinecap="round"
                        strokeWidth="2"
                        transform="translate(0,9)"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="3"
                    />
                    </g>
                    {/* Rest of the sun SVG content */}
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g className="am-weather-cloud-2">
                <path
                    d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3 c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                    fill="#C6DEFF"
                    stroke="white"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                    transform="translate(-20,-11)"
                />
                </g>
            </g>
            </g>
    </svg>
  );
};