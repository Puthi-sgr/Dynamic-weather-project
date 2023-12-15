import React from 'react';

export const Rainy_icon_1: React.FC = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height= "175px"
      viewBox="-4 0 62 62"
      display="inline-block"
      overflow="visible"
      preserveAspectRatio="xMidYMid meet"
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
            ** SUN
            */
            @keyframes am-weather-sun {
              0% {
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                transform: rotate(0deg);
              }

              100% {
                -webkit-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                -ms-transform: rotate(360deg);
                transform: rotate(360deg);
              }
            }

            .am-weather-sun {
              -webkit-animation-name: am-weather-sun;
              -moz-animation-name: am-weather-sun;
              -ms-animation-name: am-weather-sun;
              animation-name: am-weather-sun;
              -webkit-animation-duration: 9s;
              -moz-animation-duration: 9s;
              -ms-animation-duration: 9s;
              animation-duration: 9s;
              -webkit-animation-timing-function: linear;
              -moz-animation-timing-function: linear;
              -ms-animation-timing-function: linear;
              animation-timing-function: linear;
              -webkit-animation-iteration-count: infinite;
              -moz-animation-iteration-count: infinite;
              -ms-animation-iteration-count: infinite;
              animation-iteration-count: infinite;
            }

            /*
            ** RAIN
            */
            @keyframes am-weather-rain {
              0% {
                stroke-dashoffset: 0;
              }

              100% {
                stroke-dashoffset: -100;
              }
            }

            .am-weather-rain-1 {
              -webkit-animation-name: am-weather-rain;
              -moz-animation-name: am-weather-rain;
              -ms-animation-name: am-weather-rain;
              animation-name: am-weather-rain;
              -webkit-animation-duration: 8s;
              -moz-animation-duration: 8s;
              -ms-animation-duration: 8s;
              animation-duration: 8s;
              -webkit-animation-timing-function: linear;
              -moz-animation-timing-function: linear;
              -ms-animation-timing-function: linear;
              animation-timing-function: linear;
              -webkit-animation-iteration-count: infinite;
              -moz-animation-iteration-count: infinite;
              -ms-animation-iteration-count: infinite;
              animation-iteration-count: infinite;
            }

            .am-weather-rain-2 {
              -webkit-animation-name: am-weather-rain;
              -moz-animation-name: am-weather-rain;
              -ms-animation-name: am-weather-rain;
              animation-name: am-weather-rain;
              -webkit-animation-delay: 0.25s;
              -moz-animation-delay: 0.25s;
              -ms-animation-delay: 0.25s;
              animation-delay: 0.25s;
              -webkit-animation-duration: 8s;
              -moz-animation-duration: 8s;
              -ms-animation-duration: 8s;
              animation-duration: 8s;
              -webkit-animation-timing-function: linear;
              -moz-animation-timing-function: linear;
              -ms-animation-timing-function: linear;
              animation-timing-function: linear;
              -webkit-animation-iteration-count: infinite;
              -moz-animation-iteration-count: infinite;
              -ms-animation-iteration-count: infinite;
              animation-iteration-count: infinite;
            }
          `}
        </style>
      </defs>
      <g filter="url(#blur)" id="rainy-1">
        <g transform="translate(20,10)">
          <g transform="translate(0,16), scale(1.2)">
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
              <g transform="rotate(45)">
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
              <g transform="rotate(90)">
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
              <g transform="rotate(135)">
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
              <g transform="rotate(180)">
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
              <g transform="rotate(225)">
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
              <g transform="rotate(270)">
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
              <g transform="rotate(315)">
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
            </g>
            <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
          </g>
          <g>
            <path
              d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
              fill="#57A0EE"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="1.5"
              transform="translate(-15,-5), scale(0.85)"
            />
          </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
          <line
            className="am-weather-rain-1"
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            transform="translate(-6,1)"
            x1="0"
            x2="0"
            y1="0"
            y2="8"
          />
          <line
            className="am-weather-rain-2"
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            transform="translate(0,-1)"
            x1="0"
            x2="0"
            y1="0"
            y2="8"
          />
        </g>
      </g>
    </svg>
  );
};