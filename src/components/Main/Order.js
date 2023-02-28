import React from 'react';
import lover from '../../images/lover flower.svg'
import gift1 from '../../images/gift.svg'
import gift2 from '../../images/gift1.jpeg'
import gift3 from '../../images/gift2.jpeg'
import gift4 from '../../images/gift3.jpeg'

const Order = () => {
    return (
        <div id={'order'}>
            <div className="container">
                <div className="order">
                    <h1 className={'order--title'}>Как сделать <br/>заказ</h1>
                    <div className="order--block">
                        <div className="order--block__line"></div>
                        <div className="order--block__steps">
                            <div className="order--block__steps--first">
                                <h1 className={'step'}>1 шаг</h1>
                                <p className={'description'}>Выберите какие цветы или подарки <br/>вы хотите купить</p>

                                <h1 className={'step'}>2 шаг</h1>
                                <p className={'description'}>Оформите заказ, и мы отправим вам <br/>подтверждение на
                                    электронную почту, <br/>а так же менеджер свяжется с вами по <br/>телефону или в
                                    WhatsApp</p>

                                <h1 className={'step'}>3 шаг</h1>
                                <p className={'description'}>Наши флористы бережно подойдут к <br/>созданию букета
                                    цветов в самом начале <br/>дня или накануне</p>
                            </div>
                            <div className="order--block__steps--first">
                                <h1 className={'step'}>4 шаг</h1>
                                <p className={'description'}>Один из наших курьеров или <br/>партнёров доставит ваш
                                    заказ по <br/>указанному
                                    адресу. Мы отправим <br/>вам сообщение в Whats App как <br/>только заказ будет
                                    доставлен</p>

                                <h1 className={'step'}>5 шаг</h1>
                                <p className={'description'}>Наслаждайтесь цветами , если <br/>вы заказали их для дома
                                    или <br/>любовью, которой поделились, <br/>если вы заказали для друга</p>
                            </div>
                        </div>

                        <div className="order--block__lover">
                            <img src={lover} alt=""/>
                        </div>
                    </div>

                    <h1 className={'order--title'}>особенный</h1>
                    <h1 className={'order--title p'}>повод?</h1>

                    <div className="order--bless"></div>

                    <img className={'order--gift gift1'} src={gift1} alt="#"/>
                    <img className={'order--gift gift2'} src={gift2} alt="#"/>
                    <img className={'order--gift gift3'} src={gift3} alt="#"/>
                    <img className={'order--gift gift4'} src={gift4} alt="#"/>
                    <hr className={'order--line'}/>
                    <div className="order--des">
                        <p className={'order--des__text'}>Мы готовы прийти на помощь и <br/>собрать уникальный букет, на
                            любой <br/>вкус, бюджет и для любого события <br/>по вашему индивидуальному заказу.</p>

                        <ul>
                            <li>учтем даже самые изысканные <br/>пожелания;</li>
                            <li>подберем свежайшие цветы и сделаем <br/>уникальный букет или композицию;</li>
                            <li>оплатить можно при получении или <br/>онлайн на сайте</li>
                        </ul>

                        <button className={'order--des__btn'}>собрать индивидуальный букет</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;