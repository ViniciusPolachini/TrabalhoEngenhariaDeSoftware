import React, { useEffect } from 'react';
import {List, Button, notification, message } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import {Container} from './style';
import {data} from './questoes';

export default function Relatorio({setLeitura}){
   
    let relatorio = data;

    useEffect(() => {
        message.loading('Carregando relatorio', 'load')
        try{
            const response = []; //dados da api pegando respostas do aluno
            for( let i=0; i<relatorio.length; i++){
                relatorio[i].resposta = response[i];
            }
        }
        catch(err){
            console.log(err);
            message.destroy('load');
            notification.open({
                message: 'Erro ao carregar relatório',
                description: 'Tente novamente ou entre em contato com a assistencia tecnica',
                icon: <ExclamationCircleFilled  style={{ color: 'red' }}/>
            })
            setLeitura(false);
        }
        message.destroy('load');
    });

    return(
        <Container>
            <Button onClick={()=>setLeitura(false)} type="primary">Voltar</Button>
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={relatorio}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        title={<h3>{item.pergunta}</h3>}
                        description={<p>{item.resposta}</p>}
                        />
                    </List.Item>
                    )}
                />
            </div>
            <Button onClick={()=>setLeitura(false)} type="primary">Voltar</Button>
        </Container>
    );
}