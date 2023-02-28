import React from 'react';
import lover from '../../images/lover flower.svg'
import {Link, NavLink} from "react-router-dom";
import bless from '../../images/bless.png'
import MultipleItems from "./Carousel";
import Order from "./Order";
import Questions from "./Questions";
import SocialMedia from "./SocialMedia";


const Main = () => {
    return (
        <>
            <main id={'main'}>
                <div className="container">
                    <div className="main">
                        <h1>lover <br/>flower</h1>
                        <p>Создаём для тех, кто ценит свежесть и изящество цветка</p>
                        <button className={'main--btn'}>смотреть каталог</button>
                        <img className={'lover'} src={lover} alt=""/>
                    </div>
                    <div id="main-second"></div>
                </div>
            </main>

            <section id={'about--catalog'}>
                <div className="about--catalog">
                    <div className="about--catalog__pink"></div>
                    <div className="about--catalog__green"></div>
                    <div className="about--catalog__content">
                        <h1>каталог</h1>
                        <h2 className={'buk'}>букеты</h2>
                        <h2 className={'flo'}>цветы</h2>
                        <h2 className={'add'}>дополнительно</h2>
                        <div className="colors">
                            <p>У нас самый большой выбор цветов, букетов, открыток и подарков.
                                Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас
                                проконсультирует и поможет определиться с выбором</p>
                            <p>Ознакомьтесь с нашими разделами каталога</p>
                        </div>
                        <div className="flowers">
                            <h6 className={'flowers--name'}>Цветы</h6>
                            <ul>
                                <li>Сборные букеты</li>
                                <li>Монобукеты</li>
                                <li>Композиции из цветов</li>
                                <li>розы</li>
                                <li>свадебные</li>
                            </ul>
                            <Link className={'view'}>смотреть каталог</Link>
                        </div>
                        <div className="ready">
                            <h6 className={'flowers--name'}>готовые букеты <br/>из сухоцветов</h6>
                            <ul>
                                <li>букеты</li>
                                <li>для интерьера</li>
                                <li>Композиции</li>
                            </ul>
                            <Link className={'view'}>смотреть каталог</Link>
                        </div>
                        <div className="addition">
                            <h6 className="flowers--name">дополнительно</h6>
                            <ul>
                                <li>шары</li>
                                <li>игрушки</li>
                                <li>открытки</li>
                                <li>упаковка</li>
                            </ul>
                            <Link className={'view'}>смотреть каталог</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id={'popular'}>
                <div className="container">
                    <div className="popular">
                        <img className={'popular--bless'} src={bless} alt=""/>
                        <h1 className={'popular--title first'}>Популярные</h1>
                        <h1 className={'popular--title second'}>букеты</h1>
                        <p className={'popular--text'}>Самые любимые композиции наших клиентов</p>

                        <MultipleItems/>

                        <div className="popular--pink"></div>
                        <div className="popular--green"></div>

                        <NavLink to={'#'} className={'popular--link'}>смотреть весь каталог</NavLink>

                    </div>
                </div>
                <Order/>
            </section>

            <Questions/>

            <SocialMedia/>
        </>
    );
};

export default Main;