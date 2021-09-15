import React, { useState } from 'react';

import { Conteudo } from './style';
import Painel from '../../../components/Painel/index';
import TabelaHistorico from './TabelaHistorico/index'

const btn = [
    {nome: 'Cadastros', url: '/CPP/Cadastrar'},
    {nome: 'Parecer', url: '/CPP/Parecer'},
    {nome: 'Históricos', url: '/CPP/Historicos'},
    {nome: 'Sair', url: '/'},
]

export default function Historico(){

    return(
        <Painel btns={btn}>
            <Conteudo>
                <TabelaHistorico></TabelaHistorico>
            </Conteudo>
        </Painel>
    );
}