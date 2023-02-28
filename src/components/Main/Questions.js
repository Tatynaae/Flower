import React from 'react';
import lover from '../../images/loverfl.svg'
import {NavLink} from "react-router-dom";

const Questions = () => {
    return (
        <section id={'questions' }>
            <div className="container">
                <div className="questions">
                    <h1 className={'questions--title'}>остались</h1>
                    <div className="span">
                        <hr className={'span--span'}></hr>
                        <p className={'span--text'}>Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной связи, и наш специалист свяжется с вами в течение 15 минут.</p>
                    </div>

                    <h1 className={'questions--title title'}>вопросы?</h1>

                    <div className="questions--ellipse">
                        <div className="questions--ellipse__f"></div>
                        <div className="questions--ellipse__s"></div>
                        <img className="questions--ellipse__i" src={lover} alt=""/>
                        <div className="questions--ellipse__in">
                            <input className={'write'} type="name" placeholder={'Ваше имя'}/>
                            <input className={'write'} type="tel" placeholder={'+7 (977) 777-77-77'}/>
                            <textarea className={'write'} cols="40" rows="5" placeholder={'Ваш комментарий'}></textarea>
                            <button className={'questions--ellipse__in--btn'}>отправить</button>
                            <p className={"questions--ellipse__in--press"}>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span><NavLink className={'n'} to={'#'}>Политикой конфиденциальности</NavLink></span></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Questions;