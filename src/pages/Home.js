import React from 'react';
import './home.scss'

const Home = () => {
    return (
        <main>
            <div className='heroHome'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <div class="Gallery">

                <ul class="image-gallery">
                    <li>
                        <img src="img/Carrousel-m.png" alt="" />
                        <div class="overlay"><span>Image title</span></div>
                    </li>
                    <li>
                        <img src="img/Carrousel-m.png" alt="" />
                        <div class="overlay"><span>Image title</span></div>
                    </li>
                    <li>
                        <img src="img/Carrousel-m.png" alt="" />
                        <div class="overlay"><span>Image title</span></div>
                    </li>
                    <li>
                        <img src="img/Carrousel-m.png" alt="" />
                        <div class="overlay"><span>Image title</span></div>
                    </li>
                    <li>
                        <img src="img/Carrousel-m.png" alt="" />
                        <div class="overlay"><span>Image title</span></div>
                    </li>
                    <li>
                        <img src="img/Carrousel-m.png" alt="" />
                        <div class="overlay"><span>Image title</span></div>
                    </li>

                </ul>
            </div>

        </main>
    );
};

export default Home;