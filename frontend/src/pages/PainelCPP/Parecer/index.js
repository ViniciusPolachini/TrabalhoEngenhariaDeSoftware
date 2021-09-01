import React, { useState } from 'react';

import { Conteudo } from './style';
import Painel from '../../../components/Painel/index';
import Tabela from './TabelaParecer/index';

export default function Perfil(){
    const [usuario, setUsuario] = useState('Carlos');

    return(
        <Painel btns={['Cadastros', 'Parecer', 'Históricos', 'Sair']}>
            <Conteudo>
                <Tabela></Tabela>
            </Conteudo>
        </Painel>
    );
}