import { format, milliseconds } from 'date-fns';
import { useState } from 'react';
import { motion } from 'framer-motion';
export const TimeComponent = ({data}:any) => {
        const [currentTime, setCurrentTime] =  useState('')
        const date = new Date(); //pulls out current time
        const formattedDate = format(date, 'dd MMMM HH:mm:ss'); //formats it using date fns library
        const formattedArray = formattedDate.split(' '); // split the formats
        const day = formattedArray[0]
        const month = formattedArray[1]
        const interval_id = setInterval(async () => {
            const Hour = format(date, 'HH')
                if(parseInt(Hour) > 12 /* converts Hour (string) into (int) */ ){
                    const newFormattedHour = parseInt(format(date, "HH")) - 12;
                    const minuteAndSecond = format(date, 'mm:ss')
                    setCurrentTime(`${newFormattedHour}:${minuteAndSecond}`)
                }else{
                    setCurrentTime(formattedArray[2])
                }
            clearInterval(interval_id)
        },1000)
        const unix_time_stamp = data?.dt;
        const unix_time_stamp_milli = unix_time_stamp * 1000;
        const date_object = new Date(unix_time_stamp_milli);
        const day_of_the_week = date_object.toLocaleString('default', {weekday: 'long'})

        const panel_animation = {
            hidden: {opacity: 1, y: "10%"},
            visible: {opacity: 1, scale: 1, y: "calc(0%)" , type: "spring"}
        }
     //turns it into milliseconds
    return(
        <>
            <h4 className='Date'>
               {day_of_the_week}&nbsp;&nbsp;{day}&nbsp;&nbsp;{month}
            </h4>
            <motion.h1 
                key={currentTime}
                variants={panel_animation}
                initial='hidden'
                animate='visible'
                className='Hour'>
                {currentTime}
            </motion.h1>
        </>
    )
}