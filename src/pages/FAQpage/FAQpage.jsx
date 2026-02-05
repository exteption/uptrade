import Header from "../../components/header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion  } from "@fortawesome/free-solid-svg-icons"; 
import { useState } from "react";



function FAQpage () {
    const [show,setshow] = useState(false)

     


    return (

        <div className="main-content">
            <Header></Header>
            <div className="faq-page">
            <div className="faq-buttons-div">
                <button onClick={() => setshow(!show)} className="faq-button"><FontAwesomeIcon icon={faCircleQuestion} className="circlequestion"/>Основное</button>
                 {show &&<div className="answer-button">Как продать скины через ваш сервис?</div> }
                <button className="faq-button"><FontAwesomeIcon icon={faCircleQuestion} className="circlequestion"/>Пpодажа скинов</button>
                <button className="faq-button"><FontAwesomeIcon icon={faCircleQuestion} className="circlequestion"/>Покупка скинов</button>
                <button className="faq-button"><FontAwesomeIcon icon={faCircleQuestion} className="circlequestion"/>Политики Steam Trade Protection</button>
                <button className="faq-button"><FontAwesomeIcon icon={faCircleQuestion} className="circlequestion"/>Выплаты и pеквизиты</button>
                <button className="faq-button"><FontAwesomeIcon icon={faCircleQuestion} className="circlequestion"/>Pефеpальная пpогpамма</button>
                <button className="faq-button"><FontAwesomeIcon icon={faCircleQuestion} className="circlequestion"/>Поддеpжка и обpатная связь</button>
                <button className="faq-button"><FontAwesomeIcon icon={faCircleQuestion} className="circlequestion"/>Мгновенная пpодажа и выплаты</button>
           </div>
           <div className="answer-div-text">
            <p className="answer-text-info">Мы работаем с тремя самыми популярными играми: CS2, Dota 2 и Rust. Вы можете продавать и покупать скины из этих игр напрямую на нашей платформе.</p>
           </div>

           </div>
        </div>
    )
} 
export default FAQpage