import React from 'react';
import {Button} from 'antd';

import { Conteudo } from './style';



export default function Relatorio(){

    return(
        <Conteudo>
            <Button type='primary'><a href='/Orientador/Parecer'>Orientador</a></Button>
            <Button type='primary'><a href='/Aluno/Perfil'>Aluno</a></Button>
            <Button type='primary'><a href='/CPP/Parecer'>CPP</a></Button>
        </Conteudo>
    );
}