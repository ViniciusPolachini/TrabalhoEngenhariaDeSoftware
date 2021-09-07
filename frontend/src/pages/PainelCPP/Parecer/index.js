import React, { useState } from 'react';

import { Conteudo } from './style';
import Painel from '../../../components/Painel/index';
import Tabela from './TabelaParecer/index';

const btn = [
    {nome: 'Cadastros', url: '/CPP/Cadastrar'},
    {nome: 'Parecer', url: '/CPP/Parecer'},
    {nome: 'Históricos', url: '/CPP/Historicos'},
    {nome: 'Sair', url: '/'},
]

export default function Perfil(){
    const [usuario, setUsuario] = useState('Carlos');

    return(
        <Painel btns={btn}>
            <Conteudo>
                <Tabela></Tabela>
            </Conteudo>
        </Painel>
    );
}