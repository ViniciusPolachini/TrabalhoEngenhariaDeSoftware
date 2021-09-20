import React, { useState } from 'react';
import {Table, Button, Space, notification, message} from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Conteudo } from './style';
import ModalComentario from './Modal/index';
import Relatorio from './Relatorio/index';
import Painel from '../../../components/Painel/index';

const btn = [
    {nome: 'Perfil', url: '/Aluno/Perfil'},
    {nome: 'Relatório', url: '/Aluno/Relatorio'},
    {nome: 'Histórico', url: '/Aluno/Historico'},
    {nome: 'Sair', url: '/'},
]

export default function Historico(){
    const [visible, setVisible] = useState(false);
    const [orientador, setOrientador] = useState('');
    const [CPP, setCPP] = useState('');
    const [relatorio, setRelatorio] = useState(false);

    const data = [
        {
          data: '25/07/2021',
          parecerOrientador: 'Adequado com ressalvas',
          parecerCPP: 'Inadequado',
          comentarioOrientador: 'Achei bom, mas tem uns defeitos',
          comentarioCPP: ''
        }
    ]

    function abreModal(comentarioCPP, comentarioOrientador){
        setOrientador(comentarioOrientador);
        setCPP(comentarioCPP);
        setVisible(true);
    }

    const columns = [
        {
          title: 'Data',
          dataIndex: 'data',
          key: 'data',
        },
        {
          title: 'Parecer Orientador',
          dataIndex: 'parecerOrientador',
          key: 'parecerOrientador',
        },
        {
          title: 'Parecer CPP',
          dataIndex: 'parecerCPP',
          key: 'parecerCPP',
        },
        {
          title: 'action',
          key: 'action',
          render: (text, record) => (
          <Space size="middle">
            <Button onClick={()=>abreModal(record.comentarioCPP, record.comentarioOrientador)}>Comentários</Button>
            <Button onClick={()=>setRelatorio(true)}>Refazer</Button>
            </Space>
          ),
        },
      ];

    return(
        <Painel btns={btn}>
            <Conteudo>
                {
                    relatorio ?
                    (<Relatorio setRelatorio={setRelatorio}></Relatorio>)
                    :(<div><Table 
                    columns={columns} 
                    dataSource={data} 
                    pagination={{ pageSize: 8 }}
                    >
                    </Table>
                    <ModalComentario 
                    setVisible={setVisible} 
                    visible={visible}
                    comentarioCPP={CPP}
                    comentarioOrientador={orientador}
                    ></ModalComentario></div>)
                }
            </Conteudo>
        </Painel>
    );
}