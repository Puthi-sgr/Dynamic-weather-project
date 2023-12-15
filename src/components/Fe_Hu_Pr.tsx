import { useContainer_generator_function} from '../functions/3x3comp';
import { HumidityIcon } from '../svg/panel svgs/humidity';
import { Feels_like_icon } from '../svg/panel svgs/feels_like';
import { Pressure_icon } from '../svg/panel svgs/pressure';
import { motion } from 'framer-motion';
export const FeelsLike_Humidity_Pressure = ({data}: any) => {
    const feels_like_icon_variable = <Feels_like_icon />;
    const pressure_icon_variable = <Pressure_icon />;
    const humidity_icon_variable = <HumidityIcon />;

    const feels_like_container_variable = useContainer_generator_function('feels_like', feels_like_icon_variable , Math.round(data?.main.feels_like - 273.15), 'C°');
    const humidity_container_variable = useContainer_generator_function('humidity', humidity_icon_variable , data?.main.humidity, '%');
    const pressure_container_variable = useContainer_generator_function('pressure', pressure_icon_variable , data?.main.pressure, 'hPa');

    const feels_like_animation = {
        hidden: { opacity: 0, x: "10%"},
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: "calc(0%)" , 
            type: "spring",
            transition: {
                delay: 0.4
            }
        },
    }

    return (
        <motion.div 
            key={data?.sys?.sunrise}
            variants={feels_like_animation}
            initial={'hidden'}
            animate={'visible'}
            className="feels_like_humidity_pressure_container">
            {feels_like_container_variable}
            {humidity_container_variable}
            {pressure_container_variable}
        </motion.div>
    )
}