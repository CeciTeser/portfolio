import { useState } from 'react';
import cinema from '../../assets/img/cinema/cinema.jpg';


import './style.scss';

const Cinema = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    return (

        <div className='container cinema'>  
            <div className='img-info'>
                { (toggle === false)?
                <img src={cinema} alt="cinema" />
                :

                (toggle === true)?

                <div className='project-detail pt-5 pe-5'>
                    <h5>CINEMA PROJECT</h5>
                    <div className='d-flex flex-row pt-md-5'>
                        <div className='d-flex flex-column detail-text'>
                            <h4>INFO</h4>
                            <p className='info-text me-lg-5'>
                                In this project I have created an application based on the management and use of a movie content platform. Connecting with an api of movies and series (TMDB) I got all the necessary information to nurture my content application.
                                It has two types of actors: administrator and user.<br />
                                <br />
                              
                                <strong>Administrator</strong><br />
                                Login with "role admin". Access to all pages of the site. Select items (movies or series) from the api to add to the playback platform (Firebase). Delete items (movies or series) from the Firebase platform. Delete users. E-mail: mcteser@gmail.com Password: ceci2323 <br />
                                <br />
                                <strong>User</strong><br />
                                Login with "role user". Access only to movies, series and details. Items (movies and series) can be marked as watched or unwatched. You can sign in or try it with email: joaquin@gmail.com - Password: joaqui22 <br />
                                <br />
                                <strong>Screens: </strong>Signup, Login, Admin, Home, Movies, Series, Detail

                            </p>
                        </div>
                        <div className='d-flex flex-column ps-5'>
                            <h4>SKILLS</h4>
                            <ul className='skills'>
                                <li>REACT</li>
                                <li>TYPESCRIPT</li>
                                <li>REDUX</li>
                                <li>API REST</li>
                                <li>FIREBASE</li>
                                <li>SASS</li>
                                <li>BOOTSTRAP</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :{}
                }
            </div>
            
            <div className='img-text d-flex flex-lg-row justify-content-between'>
                <p className='pt-lg-2'><strong>CINEMA:</strong> REACT / TYPESCRIPT / REDUX / API REST / FIREBASE / SASS / BOOTSTRAP </p>
                <ul className='row info-demo '>
                    <li><button onClick={triggerToggle} >INFO</button></li>
                    <li><a href="https://ceciteser.github.io/Tmdb/" target="_blank">DEMO</a></li>
                    <li><a href="https://github.com/CeciTeser/Tmdb" target="_blank">CODE</a></li>
                </ul>
            </div>
        </div>

    )
}

export { Cinema }
