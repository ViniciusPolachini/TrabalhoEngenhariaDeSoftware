import React, { useState, useEffect } from 'react';

import { Conteudo } from './style';
import { Table, Button, notification, message  } from 'antd';

import { ExclamationCircleFilled } from '@ant-design/icons';


export default function HistoricoAluno({nome, ra, setVermais}){
    const [relatorios, setRelatorios] = useState({})

    useEffect(()=>{
      async function getRelatorios(){
        message.loading('Carregando relatorio', 'load')
          try{
            const response = []; //dados da api pegando respostas do aluno
          }
          catch(err){
            console.log(err);
            message.destroy('load');
            notification.open({
                message: 'Erro ao carregar relatórios',
                description: 'Tente novamente ou entre em contato com a assistencia tecnica',
                icon: <ExclamationCircleFilled  style={{ color: 'red' }}/>
            })
          }
          message.destroy('load');
      }
    },[])

    const data = [

    ]
    
    for(let i=0; i<40; i++){
      data.push({
        data: '21/07/2021',
        parecerOrientador: 'Adequado',
        parecerCPP: 'Adequado'
    },)
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
          title: 'Parecer Orientador',
          dataIndex: 'parecerOrientador',
          key: 'parecerOrientador',
        },
    
      ];

    return(
        <Conteudo>
            <div className='info'>
              <h3>Relatorios do aluno {nome}</h3>
              <Button type='primary' onClick={()=>setVermais(false)}>Voltar</Button>
            </div>
            <Table
            style={{ whiteSpace: 'pre'}}
            columns={columns}
            dataSource={data}
            bordered
            size="middle"
            pagination={{ pageSize: 9 }} 
            />
        </Conteudo>
    );
}