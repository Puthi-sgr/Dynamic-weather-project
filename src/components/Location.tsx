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

    return(
        <div className="Location_name" data-text="text">
            {
                Province_name(data?.name, data?.coord?.lon)
            }
        </div>
    )
}