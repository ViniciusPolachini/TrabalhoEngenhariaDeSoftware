import React, { useState, useEffect} from 'react';

import { Conteudo } from './style';
import { Table, Button, Space, notification, message } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

import TabelaAluno from './TabelaAluno/index'

export default function TabelaHistorico(){
    const [historico, setHistorico] = useState([])
    const [vermais, setVermais] = useState(false);
    const [raAluno, setRaAluno] = useState(0);
    const [nomeAluno, setNomeAluno] = useState('');

    useEffect(()=>{
        async function getInfo(){
            message.loading('Carregando relatorio', 'load')
        try{
            const response = []; //dados da api pegando respostas do aluno
        }
        catch(err){
            console.log(err);
            message.destroy('load');
            notification.open({
                message: 'Erro ao carregar históricos',
                description: 'Tente novamente ou entre em contato com a assistencia tecnica',
                icon: <ExclamationCircleFilled  style={{ color: 'red' }}/>
            })
        }
        message.destroy('load');
        }
    },[])

    function handleVerMais(ra, nome){
        setRaAluno(ra);
        setNomeAluno(nome);
        setVermais(true);
    }

    const data = [
        {
            nome: 'Rogerio',
            ra: '18123466',
            orientador: 'milton',
            orientadorI: 1,
            orientadorAR:  1,
            orientadorA:  3,
            CPPI: 1,
            CPPAR: 1,
            CPPA: 3,
        }
    ]

    const columns = [
        {
          title: 'Nome',
          dataIndex: 'nome',
          key: 'nome',
        },
        {
          title: 'RA',
          dataIndex: 'ra',
          key: 'ra',
        },
        {
          title: 'Orientador',
          dataIndex: 'orientador',
          key: 'orientador',
        },
        {
          title: 'Pareceres Orientador',
          dataIndex: 'parecerOrientador',
          key: 'parecerOrientador',
          children: [
            {
              title: 'Nº I',
              dataIndex: 'orientadorI',
              key: 'orientadorI'
            },
            {
              title: 'Nº AR',
              dataIndex: 'orientadorAR',
              key: 'orientadorAR'
            },
            {
              title: 'Nº A',
              dataIndex: 'orientadorA',
              key: 'orientadorA'
            }
          ]
        },
        {
            title: 'Pareceres CPP',
            dataIndex: 'parecerCPP',
            key: 'parecerCPP',
            children: [
              {
                title: 'Nº I',
                dataIndex: 'CPPI',
                key: 'CPPI'
              },
              {
                title: 'Nº AR',
                dataIndex: 'CPPAR',
                key: 'CPPAR'
              },
              {
                title: 'Nº A',
                dataIndex: 'CPPA',
                key: 'CPPA'
              }
            ]
          },
          {
            title: 'action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button>Desligar</Button>
                <Button onClick={()=>handleVerMais(record.ra, record.nome)}>Ver mais</Button>
              </Space>
            ),
          },
      ];

    return(
        <Conteudo>
        {   vermais ?
            (<TabelaAluno ra={raAluno} nome={nomeAluno} setVermais={setVermais}></TabelaAluno>):
            (<Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
                pagination={{ pageSize: 8 }} 
                />)
        }  
        </Conteudo>
    );
}