import { Cloudy_night_icon_1 } from '../svg/animated/animated_tsx/Cloudy_night1';
import { Condition_svg } from '../functions/weather_condition_logic';
import { motion } from "framer-motion";
import { useEffect } from 'react';

export const TemperatureComponent = ({data}:any) => {
    
    const temperature = Math.round(data?.main?.temp  - 273.15);

    const temp_animation = {
        hidden: {opacity: 0, x: "-20%"},
        visible: {opacity: 1, scale: 1, x: "calc(4vw - 50%)" , type: "spring"}
    }
    
    return(
        <div className="temperature_container">
            <motion.div 
                key={temperature}
                variants={temp_animation} 
                className="temperature"
                initial="hidden"
                animate="visible"
                >
                {temperature} 
                <span style={{fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: '28px', position: 'absolute', top: '-10px', right: '-20px'}}>
                    °C
                </span>
            </motion.div>
            <div style={{position: 'relative'}}>
                <Condition_svg data={data}/>                  
            </div>
        </div>
    )
}