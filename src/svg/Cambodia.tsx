import { useState } from "react";
import { PropsFunction as passed } from "../App";
import { Ratanakiri_Path, Mondolkiri_path, Kracheh_path, Svayrieng_path, Preyveng_path, Kandal_path, Takev_path, Kampot_path, Odarmeanchey_path, Preahvihea_path, Siemreab_path, Banteaymeanchey_path, Phnompenh_path, Kohkong_path, Pouthisat_path, Battambang_path, Krongpailin_path, Steungtreng_path, Preahsihanouk_path, Kampongchnang_path, Kep_path, Kapongthom_path, Kapongspeur_path, Kapongcham_path, Tbongkhmom_path} from "./provinces";
export const Cambodia:  React.FunctionComponent<passed> = ({latHandler}) =>
{
    const [isActive, setIsActive] = useState<{[key:number]:boolean}>({  });
   
    const statusHandler = (elementId: number, lat:number, long:number) => {
        setIsActive((prevStatus) => {
            if (typeof prevStatus === 'boolean') {
                return prevStatus;  // Return as is if it's a boolean (false)
            }        
                return{
                    [elementId]: !prevStatus[elementId] 
                }

            }
        )
        latHandler(lat, long);
        console.log(isActive[elementId])
    }

    const class_checker = (province_class:string, provinceId:number) => {
        return(`${province_class} ${isActive[provinceId] ? `${province_class}Active` : ``}`)
    }



    return(
        <div className="main_div">
            <svg
      baseProfile="tiny"
      fill="#ececec"
      height={300}
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".1"
      version="1.2"
      viewBox="0 0 1000 830"
      preserveAspectRatio="xMinYMin meet"
      style={{ overflow: 'visible', position:'relative', transform: 'translateY(50%) translateX(10%)'}}
      
      xmlns="http://www.w3.org/2000/svg"
    >
 <g style={{ position: 'relative' }} id="combined">
    <path
        key={1}
        onClick={() => {
            statusHandler(1, 13.8577,  107.1012)
        }}
        className={class_checker("Ratanakiri", 1)} d={Ratanakiri_Path} id="KHM1795" name="Rôtânôkiri">
    </path>
    <path  
        key={2}
        onClick={() => {
            statusHandler(2, 12.7879, 107.1012)
        }}
        className={class_checker("Mondolkiri", 2)} d={Mondolkiri_path} id="KHM1794" name="Môndól Kiri">
    </path>
  <path 
    key={3}
    onClick={()=> {
        statusHandler(3,12.4897, 106.0288)
    }}
    className={class_checker("Kracheh", 3)} d={Kracheh_path} id="KHM1793" name="Krâchéh">
  </path>
  <path 
    key={4}
    onClick={() => {
            statusHandler(4,11.0878, 105.8010)
        }}
    className={class_checker("Svayrieng" , 4)}
    d={Svayrieng_path} id="KHM1801" name="Svay Rieng">
  </path>
  <path    
    key={5}
    onClick={() => {
        statusHandler(5,11.4851,105.3281 )
    }}
    className={class_checker("preyveng", 5)} d={Preyveng_path} id="KHM1790" name="Prey Vêng">
  </path>
  <path 
    key={6}
    onClick={() => {
        statusHandler(6,11.2237,  105.1259)
    }}
    className={class_checker("Kandal", 6)} d={Kandal_path} id="KHM1786" name="Kândal">
  </path>
  <path 
        key={7}
        onClick={() => {
            statusHandler(7,10.9877,104.7871)
        }}
        className={class_checker("Takev", 7)} d={Takev_path} id="KHM1802" name="Takêv">
    </path>
    <path 
        key={8}
        onClick={() => {
            statusHandler(8,10.5942,104.1640)
        }}
        className={class_checker("Kampot", 8)} d={Kampot_path} id="KHM1797" name="Kâmpôt">
    </path>
  <path 
    key={9}
    onClick={() => {
        statusHandler(9,14.1610,103.8216)
    }}
    className={class_checker("Odarmeanchey", 9)} d={Odarmeanchey_path} id="KHM1782" name="Otdar Mean Chey">
  </path>
  <path 
    key={10}
    onClick={() => {
        statusHandler(10,14.0086,104.8455)
    }}
    className={class_checker("Preahvihea",10)} d={Preahvihea_path} id="KHM1791" name="Preah Vihéar">
  </path>
  <path 
    key={11}
    onClick={() => {
        statusHandler(11,13.3633,103.8564)
    }}
    className={class_checker("Siemreab",11)} d={Siemreab_path} id="KHM1781" name="Siemréab">
  </path>
  <path 
    key={12}
    onClick={() => {
        statusHandler(12,13.7532,102.9896)
    }}
    className={class_checker("Banteaymeanchey",12)} d={Banteaymeanchey_path} id="KHM1777" name="Bântéay Méanchey">
  </path>
  <path 
    key={13}
    onClick={() => {
        statusHandler(13, 11.6154, 102.9837)
    }}  
    className={class_checker("Kohkong", 13)} d={Kohkong_path} id="KHM1779" name="Kaôh Kong">
  </path>
  <path 
    key={14}
    onClick={() => {
        statusHandler(14, 12.4652, 103.8912)
    }}
    className={class_checker("Pouthisat", 14)} d={Pouthisat_path} id="KHM1780" name="Pouthisat">
  </path>
  <path
    key={15}
    onClick = {() => {
        statusHandler(15, 13.0957, 103.2022)
    }}
    className={class_checker("Battambang", 15)} d={Battambang_path} id="KHM1778" name="Batdâmbâng">
  </path>
  <path 
    key={16}
    onClick = {() => {
        statusHandler(16, 12.9093, 102.6676)
    }}
    className={class_checker("Krongpailin", 16)} d={Krongpailin_path} id="KHM1783" name="Krong Pailin">
  </path>
  <path 
    key={17}
    onClick = {() => {
        statusHandler(17, 13.5765, 105.9700 )
    }}
  
    className={class_checker("Steungtreng", 17)} d={Steungtreng_path} id="KHM1792" name="Stœng Trêng">
  </path>
  <path 
    key={18}
    onClick = {() => {
      statusHandler(18, 10.6268,103.5116)
    }}
    className={class_checker("Preahsihanouk", 18)} d={Preahsihanouk_path} id="KHM1800" name="Krong Preah Sihanouk">
  </path>
  <path 
    key={19}
    onClick = {() => {
      statusHandler(19, 10.5432, 104.3191)
    }}
    className={class_checker("Kep", 19)} d={Kep_path} id="KHM1798" name="Kep">
  </path>
  <path 
    key={20}
    onClick = {() => {
      statusHandler(20, 12.2614, 104.6763)
    }}
    className={class_checker("Kampongchnang", 20)} d={Kampongchnang_path} id="KHM1785" name="Kâmpóng Chhnang">
  </path>
  <path 
    key={21}
    onClick = {() => {
      statusHandler(21,12.8222, 105.1259)
    }}
    className={class_checker("Kapongthom", 21)} d={Kapongthom_path} id="KHM1788" name="Kâmpóng Thum">
  </path>
  <path 
    key={22}
    onClick = {() => {
      statusHandler(22, 11.4650, 104.5073 )
    }}
    className={class_checker("Kapongspeur", 22)} d={Kapongspeur_path} id="KHM1787" name="Kâmpóng Spœ">
  </path>
  <path 
    key={23}
    onClick = {() => {
        statusHandler(23,11.5564, 104.9282)
    }}
    className={class_checker("Phnompenh",23)} d={Phnompenh_path} id="KHM1789" name="Phnom Penh">
  </path>
  <path 
    key={24}
    onClick = {() => {
      statusHandler(24, 11.9924, 105.4645)
    }}
    className={class_checker("Kampongcham", 24)} d={Kapongcham_path} id="KHM1784" name="Kâmpóng Cham">
  </path>
  <path 
    key={25}
    onClick = {() => {
      statusHandler(25, 11.8891, 105.8760)
    }}
    className={class_checker("Tbongkhmom", 25)} d={Tbongkhmom_path} id="KHM1803" name="Tboung Khmum">
  </path>
 </g>
 <g id="points">
  <circle className="10.630214019250024|102.57827834065009" cx="50.9" cy="788" id="0">
  </circle>
  <circle className="12.345737213250024|105.22682468715008" cx="549.9" cy="458.1" id="1">
  </circle>
  <circle className="14.490141205750023|107.34566176435008" cx="949.1" cy="42.7" id="2">
  </circle>
 </g>
</svg>
        </div>
    )
}