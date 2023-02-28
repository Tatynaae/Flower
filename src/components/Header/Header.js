import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../../images/logo.svg'
import {CiSearch} from "react-icons/ci";
import {BsInstagram, BsTelephoneOutbound, BsWhatsapp} from "react-icons/bs";
import {HiOutlineShoppingBag} from "react-icons/hi";

const Header = () => {
    return (
        <header id={'header'}>
            <div className="container">
                <div className="header">
                    <Link to={"/"}>
                        <img src={logo} alt=""/>
                    </Link>

                    <nav className={'header--nav'}>
                        <NavLink className={'header--nav__link'} to={'/catalog'}>Каталог</NavLink>
                        <NavLink className={'header--nav__link'} to={'/payment'}>Доставка и оплата </NavLink>
                        <NavLink className={'header--nav__link'} to={'/about'}>О нас</NavLink>
                        <NavLink className={'header--nav__link'} to={'/contacts'}>Контакты</NavLink>
                        <NavLink className={'header--nav__link'} to={'/faq'}>FAQ</NavLink>
                        <div className="header--nav__search">
                            <CiSearch className={'search'}/>
                            <p>Поиск</p>
                        </div>
                    </nav>

                    <div className="header--contact">
                        <h2>zakaz@loverflower.by</h2>
                        <h5>Доставка 24/7 по договоренности с оператором</h5>

                        <h2>ул. Тимирязева 67</h2>
                        <h6>10:00 до 21:00
                            без выходных</h6>

                        <div className="header--contact__icons">
                            <BsInstagram className={'contact'}/>
                            <BsWhatsapp className={'contact'}/>
                            <BsTelephoneOutbound className={'contact'}/>
                        </div>

                        <h2 className={"call"}>+375 (29) 113-69-69</h2>
                        <button className={'call--btn'}><span style={{margin:'5px 10px 0 0'}}><BsTelephoneOutbound/></span>заказать звонок</button>
                        <HiOutlineShoppingBag className={'call--buy'}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;