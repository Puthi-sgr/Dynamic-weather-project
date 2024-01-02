import "./styles/Hero.css";
import {Get_started_Button} from "../src/components/Hero_button";
export const Hero_page = () => {
    return (
    <div 
        className="Hero_page_container"
    >
        <div className="Text_container">
            <h1 className="Hero_heading">Welcome to</h1>
            <h1 className="Hero_heading">Cambodia's weather forecast</h1>
            <p className="Heading_small">This is a dynamic weather forecast website which created for users to dynamically check the weather in every province</p>
            <div className="Hero_button_section">
                
                <button className="About_button">
                    About
                </button>
                <Get_started_Button />
            </div>
               
        </div>
        <div className="Picture_container">
            <h1>
                pic
            </h1>
        </div>
      
    </div>
  )
}