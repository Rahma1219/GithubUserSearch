import './Darkmode.css'
import moon from '/images/icon-moon.svg'
import sun from '/images/icon-sun.svg'
import { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import Content from '../Content/Content';


function Darkmode() {
    const passedValue = useContext(ThemeContext)

    function handleChange(event) {
        var newValue;
        if (event.target.checked == true) {
            newValue = "DARK"
        } else {
            newValue = "LIGHT"

        }
        passedValue.ChangeTheme(newValue)

        setDarkMode(!DarkMode)

    }
    const [DarkMode, setDarkMode] = useState(false)

    return (
        <>
            <div id='total' className={DarkMode ? "lightmood" : "darkmood"}>

                <div id='header' >
                    <div>
                        <h1>devfinder </h1>
                    </div>

                    <div className='icon'>

                        <div>
                            <label className='icon2' >
                                <span>
                                    {passedValue.Theme}
                                </span>
                                <input type="checkbox" onChange={handleChange} />
                                <img src={sun} alt="" className='sun' />
                                <img src={moon} alt="" className='moon' />
                                <span id='toggle'></span>
                            </label>
                        </div>
                    </div>
                </div>
                <Content></Content>

            </div>


        </>

    )
}

export default Darkmode