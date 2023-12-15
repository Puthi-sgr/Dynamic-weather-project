import { TemperatureComponent } from "./TemperaturePanel";
import { TimeComponent } from "./Time";
import { LocationComponent } from "./Location";
import { WindComponent } from "./WindPanel";
import { Sun_rise_set } from "./rise_set";
import "../styles/Weatherpanel.css"
import { FeelsLike_Humidity_Pressure } from "./Fe_Hu_Pr";
import { motion  } from "framer-motion";

export const WeatherPanel = ({data}:any) => {
    const panel_animation = {
        hidden: {opacity: 0, x: "10%"},
        visible: {opacity: 1, scale: 1, x: "calc(4vw - 17%)" , type: "spring"}
    }
    const data_info = data;
    return (
        <div  className="Weather-panel">
            <div className="province_map_name_container">
                <div className="province_map">
                    
                </div>
                <div className="province_name_container">
                    <LocationComponent data={data} />
                </div>
            </div>
            
            <div className="lower_class_container">
                <div className= "Lower_half">
                    <div className="date_time_container">
                        <TimeComponent data={data} />
                    </div>
                    <motion.div 
                        className="middle_to_lower_container">
                        <TemperatureComponent data={data} />
                        <FeelsLike_Humidity_Pressure data={data}/>
                        <WindComponent data={data} />
                        <Sun_rise_set data={data} />
                    </motion.div>  
                </div>
            </div>  
            
            
            
              
        </div>
    )
}