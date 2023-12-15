import React from 'react';

export const Clear_sun: React.FC = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      display="inline-block"
      overflow="visible"
      height= "200px"
      viewBox="3 7 62 62"
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
            @keyframes am-weather-cloud-1 {
              0% {
                transform: translate(-5px, 0px);
              }
              50% {
                transform: translate(10px, 0px);
              }
              100% {
                transform: translate(-5px, 0px);
              }
            }

            .am-weather-cloud-1 {
              animation-name: am-weather-cloud-1;
              animation-duration: 7s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            @keyframes am-weather-cloud-2 {
              0% {
                transform: translate(0px, 0px);
              }
              50% {
                transform: translate(2px, 0px);
              }
              100% {
                transform: translate(0px, 0px);
              }
            }

            .am-weather-cloud-2 {
              animation-name: am-weather-cloud-2;
              animation-duration: 3s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            /*
            ** SUN
            */
            @keyframes am-weather-sun {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .am-weather-sun {
              animation-name: am-weather-sun;
              animation-duration: 9s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            @keyframes am-weather-sun-shiny {
              0% {
                stroke-dasharray: 3px 10px;
                stroke-dashoffset: 0px;
              }
              50% {
                stroke-dasharray: 0.1px 10px;
                stroke-dashoffset: -1px;
              }
              100% {
                stroke-dasharray: 3px 10px;
                stroke-dashoffset: 0px;
              }
            }

            .am-weather-sun-shiny line {
              animation-name: am-weather-sun-shiny;
              animation-duration: 2s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
          `}
        </style>
      </defs>
      <g filter="url(#blur)" id="day">
        <g transform="translate(32,32)">
          <g className="am-weather-sun am-weather-sun-shiny">
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
      </g>
    </svg>
  );
};