import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/56564508?s=460&u=a75c5e4fbf16a5b1b60aa10d2a7287f2a428ecaf&v=4" alt="foto do professor"/>
            <div>
                <strong>Bruno Dhein</strong>
                <span>Computação</span>
            </div>
        </header>

        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
        <br /><br />
        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum
        </p>

    <footer>
        <p>
            Preço/hora
            <strong>R$50,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
    </footer>
    </article>
    )
}

export default TeacherItem