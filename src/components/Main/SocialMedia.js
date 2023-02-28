import React from 'react';
import f1 from '../../images/f1.svg'
import f2 from '../../images/f2.svg'
import f3 from '../../images/f3.svg'
import f4 from '../../images/f4.svg'
import f5 from '../../images/f5.svg'

const SocialMedia = () => {
    return (
        <section id={'social'}>
            <div className="container">
                <div className="social">
                    <h1 className={'social--ins'}>instagram</h1>
                    <div className="social--first"></div>
                    <div className="social--second"></div>
                    <div className="social--third"></div>
                    <div className="social--images">
                        <img className={'social--images__img'} src={f1} alt="#"/>
                        <img className={'social--images__img'} src={f2} alt="#"/>
                        <img className={'social--images__img'} src={f3} alt="#"/>
                        <img className={'social--images__img'} src={f4} alt="#"/>
                        <img className={'social--images__img i-5'} src={f5} alt="#"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;