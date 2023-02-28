import React from 'react';
import logo from '../../images/logo.svg'

const Footer = () => {
    return (
        <footer id={'footer'}>
            <div className="container">
                <div className="footer">
                    <div className="footer--first">
                        <img className={'logo'} src={logo} alt=""/>
                        <h1>реквизиты</h1>
                        <p className={'f-p'}>
                            ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул. Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г. Минск, улица Толстого
                        </p>
                    </div>
                    <div className="footer--first">
                        <h1>Каталог</h1>
                        <p>Популярное</p>
                        <p>Сухоцветы</p>
                        <p>Букеты роз</p>
                        <p>Композиции из цветов</p>
                        <p>Индивидуальный букет</p>
                        <p>Букет на праздник</p>
                        <p>Упаковка подарков</p>
                        <p>Шары</p>
                        <p>Открытки</p>
                        <p>Конверты</p>
                    </div>
                    <div className="footer--first">
                        <h1>Букет</h1>
                        <p>Для девушки</p>
                        <p>Для мужчины</p>
                        <p>Для жены</p>
                        <p>Для мамы</p>
                        <p>Для коллеги</p>
                        <p>Для начальника</p>
                        <p>Для дочки</p>
                        <p>Для детей</p>
                        <p>Для женщины</p>
                    </div>
                    <div className="footer--first">
                        <h1>Доставка и оплата</h1>
                        <h1>О нас</h1>
                        <h1>FAQ</h1>
                        <h1>Контакты</h1>
                        <h1>для корпоративных клиентов</h1>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;