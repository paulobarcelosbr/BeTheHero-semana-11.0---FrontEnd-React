import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg';

export default function Register(){
    return (
        
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude as pessoas a encontrar os casos das Ongs!</p>
                    <Link className="back-link" to="/">
                            <FiArrowLeft size={18} color="#E02041"/>
                            Voltar   
                        </Link> 
                </section>
                
                <form>
                    <input placeholder=" Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width:80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>

    );
};