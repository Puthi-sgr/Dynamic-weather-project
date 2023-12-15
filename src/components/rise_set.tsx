import { format } from 'date-fns';
import { Visibility } from './Visibility';
import { useContainer_generator_function } from '../functions/3x3comp';
import { Sunrise_icon } from '../svg/panel svgs/sunrise';
import { Sunset_icon } from '../svg/panel svgs/sunset';
import { motion } from 'framer-motion'

export const Sun_rise_set = ({data}: any) => {
    type unix_time_converter = (millisecond: number) => string;
    const Unix_time_converter:unix_time_converter = (millisecond) => {
        if(millisecond){
            const convert_millisecond = millisecond * 1000;
            const date = new Date(convert_millisecond);
            const handle_format = format(date, "HH:mm");
            if(parseInt(format(date, "HH")) > 12)
            {
                const handle_format_hour = parseInt(format(date, "HH")) - 12;
                const handle_format_minute = format(date, "mm");
                const handle_format = `${handle_format_hour}:${handle_format_minute}`;
                return handle_format;
            }
            return handle_format;   
        }   
        return "00:00";	   
    }
    const sunrise = data?.sys?.sunrise;
    const sunrise_converted = Unix_time_converter(sunrise);
    const sunset = data?.sys?.sunset;
    const sunset_converted =  (Unix_time_converter(sunset));

    const sunset_icon_variable = <Sunset_icon />;
    const sunrise_icon_variable = <Sunrise_icon />;

    const sunrise_container_variable = useContainer_generator_function('sunrise', sunrise_icon_variable , sunrise_converted, 'am');
    const sunset_container_variable = useContainer_generator_function('sunset', sunset_icon_variable, sunset_converted, 'pm');

    const sun_animation = {
        hidden: { opacity: 0, x: "10%"},
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: "calc(0%)" , 
            type: "spring",
            transition: {
                delay: 0.3
            }
        },
    }
    return(
        <motion.div 
            key={data?.sys?.sunrise}
            variants={sun_animation}
            initial={'hidden'}
            animate={'visible'}
            className="sunrise_sunset_container">
            {sunrise_container_variable}
            {sunset_container_variable}
            <Visibility data={data} />
            
        </motion.div>
    )
}