import React, {Component}  from "react";
import Slider from "react-slick";
import c1 from'../../images/carousel1.svg'
import c2 from'../../images/carousel2.svg'
import c3 from'../../images/carousel3.svg'
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div className={'popular--carousel'}>
                <Slider {...settings}>
                    <div>
                        <img className={'c'} src={c1} alt=""/>
                        <h1 className={'best'}>лучший день</h1>
                        <h2 className={'price'}>167.000 ₽</h2>
                        <button className={'toBasket'}>В корзину</button>
                    </div>
                    <div>
                        <img className={'c'} src={c2} alt=""/>
                        <h1 className={'best'}>лучший день</h1>
                        <h2 className={'price'}>167.000 ₽</h2>
                        <button className={'toBasket'}>В корзину</button>
                    </div>
                    <div>
                        <img className={'c'} src={c3} alt=""/>
                        <h1 className={'best'}>лучший день</h1>
                        <h2 className={'price'}>167.000 ₽</h2>
                        <button className={'toBasket'}>В корзину</button>
                    </div>
                    <div>
                        <img className={'c'} src={c1} alt=""/>
                        <h1 className={'best'}>лучший день</h1>
                        <h2 className={'price'}>167.000 ₽</h2>
                        <button className={'toBasket'}>В корзину</button>
                    </div>
                    <div>
                        <img className={'c'} src={c2} alt=""/>
                        <h1 className={'best'}>лучший день</h1>
                        <h2 className={'price'}>167.000 ₽</h2>
                        <button className={'toBasket'}>В корзину</button>
                    </div>
                    <div>
                        <img className={'c'} src={c3} alt=""/>
                        <h1 className={'best'}>лучший день</h1>
                        <h2 className={'price'}>167.000 ₽</h2>
                        <button className={'toBasket'}>В корзину</button>
                    </div>

                </Slider>
            </div>
        );
    }
}