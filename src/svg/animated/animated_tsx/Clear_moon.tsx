import React from 'react';

export const Clear_moon: React.FC = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"   
      display="inline-block"
      overflow="visible"
      height= "200px"
      viewBox="0 8 62 62"
    >
      {/* ... (omitted some parts for brevity) */}
      <g filter="url(#blur)" id="night">
        <g transform="translate(20,20)">
          <g className="am-weather-moon-star-1">
            <polygon
              fill="orange"
              points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
              stroke="none"
              strokeMiterlimit="10"
            />
          </g>
          <g className="am-weather-moon-star-2">
            <polygon
              fill="orange"
              points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
              stroke="none"
              strokeMiterlimit="10"
              transform="translate(20,10)"
            />
          </g>
          <g className="am-weather-moon">
            <path
              d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z"
              fill="orange"
              stroke="orange"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

