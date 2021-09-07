import React, { useState, useEffect} from 'react';
import {Button} from 'antd'
import { Table, Space, notification, message} from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import {Container} from './style';
import Relatorio from '../Relatorio/index';
import Parecer from '../Modal/index';

export default function Tabela(){
    const [leitura, setLeitura] = useState(false);
    const [visible, setVisible] = useState(false);
    const [relatorios, setRelatorios] = useState([]);
    const [ra, setRa] = useState(0);

    useEffect(() =>{
      message.loading('Carregando relatorios', 'load')
      try{
          let data = [];
          for(let i=0; i<40; i++){
            data.push({
              aluno: 'Rafael',
              email: 'Rafael@gmail.com',
              ra: i,
              curso: 'mestrado',
              orientador: 'Celso'
            })
          }
          const response = data; //pega dados da api
          setRelatorios(response);
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
    }, [])


    const columns = [
        {
          title: 'aluno',
          dataIndex: 'aluno',
          key: 'aluno',
          render: aluno => <a>{aluno}</a>,
        },
        {
          title: 'email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'ra',
          dataIndex: 'ra',
          key: 'ra',
        },
        {
          title: 'curso',
          dataIndex: 'curso',
          key: 'curso',
        },
        {
          title: 'orientador',
          dataIndex: 'orientador',
          key: 'orientador',
        },
        {
          title: 'action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button onClick={()=>setLeitura(true)}>Ler</Button>
              <Button onClick={()=>{
                setVisible(true);
                setRa(record.ra);
              }} >Parecer</Button>
            </Space>
          ),
        },
      ];

    return(
        <Container>
            {leitura ? <Relatorio setLeitura={setLeitura}></Relatorio>:
            <Table columns={columns} dataSource={relatorios} pagination={{ pageSize: 8 }}  />}
            <Parecer 
              visible={visible} 
              setVisible={setVisible} 
              setRelatorios={setRelatorios} 
              relatorios={relatorios} 
              RA={ra}>
            </Parecer>
        </Container>
    );
}