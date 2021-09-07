import React, { useState } from 'react';

import { Conteudo } from './style';
import Painel from '../../../components/Painel/index';
import Tabela from './TabelaParecer/index';

const btn = [
    {nome: 'Parecer', url: '/Orientador/Parecer'},
    {nome: 'Historico', url: '/Orientador/Historico'},
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