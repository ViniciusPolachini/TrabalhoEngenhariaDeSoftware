import React, { useState } from 'react';

import { Conteudo } from './style';
import Painel from '../../../components/Painel/index'

export default function Perfil(){
    const [usuario, setUsuario] = useState('Carlos');

    return(
        <Painel btns={['Perfil', 'Parecer', 'Históricos', 'Sair']}>
            <Conteudo>
                <h2>Olá {usuario}</h2>
            </Conteudo>
        </Painel>
    );
}