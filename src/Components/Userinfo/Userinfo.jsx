import './Userinfo.css'
import { useState, useContext } from 'react'
import location from '../../../public/images/icon-location.svg'
import twitter from '../../../public/images/icon-twitter.svg'
import website from '../../../public/images/icon-website.svg'
import company from '../../../public/images/icon-company.svg'

function Userinfo({ profile }) {
    return (
        <div className='userinfo'>
            <div>
                {profile &&
                    <>
                        <div>
                            <div id='data'>
                                <div>
                                    <img src={profile.avatar_url} id='avatar'></img>
                                </div>
                                <div >
                                    <div id='text'>
                                        <p>{profile.name} </p>
                                        <p id='date'>Joined:{new Date(profile.created_at).toLocaleDateString()}</p>

                                    </div>

                                    <a id='link' href={profile.html_url} target='blank'>@{profile.login}</a>
                                </div>


                            </div>

                            <div id='bio'>
                                <p>{profile.bio}</p>
                            </div>
                            <div id='tochange'>
                         
                                <div className='profile-states'>
                                    <p>Repos
                                        <p id='num'>{profile.public_repos}</p>
                                    </p>
                                    <p>Followers
                                        <p id='num'>{profile.followers}</p>
                                    </p>
                                    <p>Following
                                        <p id='num'>{profile.following}</p>
                                    </p>
                                </div>

                                <div className='profileinfo'>
                                <div>
                                    <p><img src={location} alt="" />{profile.location}</p>
                                    <p><img src={website} alt="" />{profile.website}</p>

                                </div>

                                <div>
                                    <p><a id='link2' href={`https://twitter.com/${profile.twitter_username}`} target='_blank'><img src={twitter} alt="" />{profile.twitter_username}</a></p>
                                    <p> <a id='link2' href={profile.html_url} target='_blank'><img src={company} alt="" />{profile.company}</a></p>

                                </div>

                            </div>

                            </div>
                         

                         

                        </div>

                    </>

                }

            </div>
        </div>
    )
}

export default Userinfo