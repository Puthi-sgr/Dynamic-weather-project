import { motion } from 'framer-motion';
export const LocationComponent = ({data}:any) => {
    type Province_return = (province: string, lattitude: number) => string;
    const Province_name: Province_return = (data: string, lat: number) => {
        if(data === "Tbeng Meanchey"){
            return "Preah Vihea"
        }else if(data === "Sen Moronom"){
            return "Mondol Kiri"
        }else if(lat === 105.876){
            return "Tbong Khmom"
        }else if(data === "Kap Choeng"){
            return "Odar Meanchey"
        }
        return data;
    }
    const location_animation = {
        hidden: { 
            opacity: 0, 
            x: "-40%",
            scale: 0.8
        
        },
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: "calc(0%)" , 
        },
    }

    return(
        <motion.div 
            key={data?.name}
            variants={location_animation}
            initial={'hidden'}
            animate={'visible'}
            className="Location_name" data-text="text">
            {
                Province_name(data?.name, data?.coord?.lon)
            }
        </motion.div>
    )
}