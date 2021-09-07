import React, { useState } from 'react';
import {Radio, Form, Input, Button, notification, message} from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Conteudo } from './style';
import Painel from '../../../components/Painel/index';

const btn = [
    {nome: 'Perfil', url: '/Aluno/Perfil'},
    {nome: 'Relatório', url: '/Aluno/Relatorio'},
    {nome: 'Histórico', url: '/Aluno/Historico'},
    {nome: 'Sair', url: '/'},
]

export default function Relatorio(){
    const testUser = {
        nome: 'Carlos',
        RA: '172533312',
        curso: 'mestrado',
        orientador: 'Almir',
        Latter: 'http:/fakeLatter.br',
        email: 'Carlos@fake.com.br',
    }
    const [usuario, setUsuario] = useState(testUser);
    const [campos, setCampos] = useState(true);
   
    const editar = () => {
        setCampos(false);
    }

    const enviarEdicao = async (values) => {
        message.loading('Enviando', 'load');
        try{
            let info = usuario;
            usuario.email= values.email;
            usuario.curso = values.curso;
            usuario.orientador = values.orientador;
            usuario.Latter = values.latter;
            setUsuario({...info});
            //enviar dados
            console.log(usuario)

            message.destroy('load');
            message.success('Edição realizada!', 2);
            setCampos(true);    
        }catch(err){
            message.destroy('load');
            notification.open({
                message: 'Erro ao salvar edição',
                description: 'Tente novamente ou entre em contato com a assistencia tecnica',
                icon: <ExclamationCircleFilled  style={{ color: 'red' }}/>
            })
        }
    }

    return(
        <Painel btns={btn}>
            <Conteudo>
              <div className='info'>
                  <h4>Aluno:{usuario.nome}</h4>
                  <h4>RA:{usuario.RA}</h4>
                  <Button className='editar' type="primary" onClick={editar}>Editar</Button>
              </div>
              <div className='editaInfo'>
                    <Form
                    initialValues={{email: usuario.email, curso: usuario.curso, orientador: usuario.orientador, latter: usuario.Latter}}
                    onFinish={enviarEdicao}
                    >
                        <Form.Item label='Email' name='email'>
                            <Input disabled={campos} className='input'></Input>
                        </Form.Item>
                        <Form.Item label='Curso' name='curso'>
                            <Radio.Group disabled={campos}>
                                <Radio className='input' value='mestrado'>Mestrado</Radio>
                                <Radio className='input' value='doutorado'>Doutorado</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label='Orientador' name='orientador'>
                            <Input disabled={campos} className='input' ></Input>
                        </Form.Item>
                        <Form.Item label='Latterr' name='latter'>
                            <Input disabled={campos} className='input' ></Input>
                        </Form.Item>
                        <Form.Item >
                            <Button className='input' disabled={campos} type="primary" key="submit" htmlType="submit">
                                Salvar
                            </Button>
                        </Form.Item>
                    </Form>
              </div>
            </Conteudo>
        </Painel>
    );
}