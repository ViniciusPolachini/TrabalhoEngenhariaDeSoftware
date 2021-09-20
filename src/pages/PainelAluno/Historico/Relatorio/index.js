import React, { useState } from 'react';
import {Radio, Space, Form, Input, Button, notification, message} from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Conteudo } from './style';
import {questoes} from './questionario';


export default function Relatorio({setRelatorio, data}){
    const [form] = Form.useForm();

    const enviaRelatorio = async (value) => {
        message.loading('Enviando', 'load');
        try{
            //enviar dados
            message.destroy('load');
            message.success('Relatório enviado!', 2);
            form.resetFields();
            setRelatorio(false);
        }catch(err){
            message.destroy('load');
            notification.open({
                message: 'Erro ao enviar relatório',
                description: 'Tente novamente ou entre em contato com a assistencia tecnica',
                icon: <ExclamationCircleFilled  style={{ color: 'red' }}/>
            })
        }
    }

    return(
        <Conteudo>
            <Button type='primary' onClick={()=>setRelatorio(false)}>Voltar</Button>
            <Form
            layout="vertical"
            onFinish={enviaRelatorio}
            form={form}
            > 
                {questoes.map((item)=>
                    item.tipo==="texto" ? 
                    <Form.Item  label={item.questao} name={item.numero} rules={item.regra}>
                        <Input.TextArea rows={4} className="textarea"></Input.TextArea>
                    </Form.Item>:
                    <Form.Item label={item.questao} name={item.numero} rules={item.regra}>
                        <Radio.Group>
                            <Space direction="vertical">
                                {item.opcoes.map((opcao) =>
                                    <Radio value={opcao}>{opcao}</Radio>
                                )}
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                )}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Conteudo>
    );
}