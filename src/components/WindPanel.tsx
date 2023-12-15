import {useContainer_generator_function} from "../functions/3x3comp";
import { Wind_speed_icon } from "../svg/panel svgs/wind_speed_icon";
import { Wind_direction_icon} from "../svg/panel svgs/wind_direction";
import { Wind } from '../svg/panel svgs/wind';
import { Direction } from '../svg/panel svgs/compass';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
export const WindComponent = ({data}:any) => {
    const Wind_speed_icon_variable = <Wind/>;
    const Wind_direction_icon_variable = <Direction />;
    const wind_speed_container = useContainer_generator_function('wind_speed', Wind_speed_icon_variable, data?.wind.speed, 'm/s');
    const wind_direction_container = useContainer_generator_function('wind_direction', Wind_direction_icon_variable , data?.wind.deg, '°')
    const wind_animation = {
        hidden: { opacity: 0, x: "10%"},
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: "calc(0%)" , 
            type: "spring",
            transition: {
                delay: 0.2
            }
        },
    }


    return(
        <motion.div
            key={data?.wind.speed}
            variants={wind_animation}
            initial= 'hidden'
            animate= 'visible'
            className="wind_speed_direction_container">
            {wind_speed_container}
            {wind_direction_container}
        </motion.div>
    )
}