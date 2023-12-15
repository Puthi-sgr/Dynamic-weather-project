import { Sunny_icon_1 } from '../svg/animated/animated_tsx/Sunny1';
import { Cloudy_icon_1 } from '../svg/animated/animated_tsx/Cloudy1';
import { Cloudy_night_icon_1 } from '../svg/animated/animated_tsx/Cloudy_night1';
import { Rainy_icon_1 } from '../svg/animated/animated_tsx/Rainy_icon_1';
import { Rain_with_no_cloud_icon_1 } from '../svg/animated/animated_tsx/Rain_with_no_cloud';
import { Cloudy_sun } from '../svg/animated/animated_tsx/Cloudy_sun';
import { Clear_sun } from '../svg/animated/animated_tsx/Clear_sun';
import { Clear_moon } from '../svg/animated/animated_tsx/Clear_moon';
import { Thunder_storm } from '../svg/animated/animated_tsx/Thunderstorm';
;
export const Condition_svg =   ({data}:any) => {
    const Hour = new Date().getHours();
    console.log(Hour)
    const weather_condition_determiner_logic = () => {
        if(data){         
            const condition_id =  data?.weather[0].id;
            console.log(condition_id)
            const split_string_id = condition_id.toString().split('');
            if(split_string_id[0] === '8'){ 
                console.log('cloudy category')
                if(split_string_id[2] >= '1'){
                    console.log('cloud')
                    return Hour >= 18 ? <Cloudy_night_icon_1 /> : <Cloudy_sun />
                }else if(split_string_id[2] === '0'){
                    console.log('clear')
                    return Hour >= 18 ? <Clear_moon /> : <Clear_sun />
                }
            }else if(split_string_id[0] === '5'){
                return Hour <= 18 ? <Rainy_icon_1 /> : <Rain_with_no_cloud_icon_1 />
            }else if(split_string_id[0] === '3'){
                return <Rain_with_no_cloud_icon_1 />
            }else if(split_string_id[0] === '2'){
                console.log('Thunderstorm category')
                return <Thunder_storm /> 
            }
        } 
    }
    const result = weather_condition_determiner_logic();
    return(
        <div style={{position:'absolute', height: '100%', width: '100%'}}>   
            {result}
        </div>
    )
}