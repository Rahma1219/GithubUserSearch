import Userinfo from '../Userinfo/Userinfo'
import './Searchbar.css'
import axios from 'axios'
import search from '../../../public/images/icon-search.svg'
import { useState, useContext } from 'react'



function Searchbar() {
    const [username, setUsername] = useState("")
    const [profile, setProfile] = useState(null)
    const [error, setError] = useState(null)


    async function handlesubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            setProfile(response.data)
            setError(null)
        } catch (error) {
            setProfile(null)
            setError('This profile has no bio')


        }

    }

    function handlechange(event) {
        setUsername(event.target.value)
    }


    return (
        <div className='sec2'>
            <div id='inputsearch' >
            <div>
                <form id='searchform' onSubmit={handlesubmit}>
                    <div>
                        <img src={search} alt="" id='iconsearch' />
                        <input type="text" placeholder='Search Github username...' value={username} onChange={handlechange} />
                    </div>
                    <div>
                        <button id='searchbtn' type='submit'>
                            Search
                        </button>

                    </div>

                </form>

            </div>

                     
            {/* <p>
                {error && <p>{error}</p>}

            </p> */}

            <br /><br />
          
            <div>
                <Userinfo
                profile={profile}></Userinfo>

            </div>



        </div>


        </div>
        

    )
}

export default Searchbar