import React from 'react';
import {Modal ,Button, Form, Input, Radio, notification, message} from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons';

export default function Parecer({ RA, visible, setVisible, setRelatorios, relatorios}){
    
    const enviaParecer = async (values) => {
        message.loading('Enviando', 'load');
        try{
            //enviar dados

            const novoRelatorios = relatorios.filter((value) => {return value.ra!=RA});
            setRelatorios(novoRelatorios);

            message.destroy('load');
            message.success('Parecer enviado!', 2);
            setVisible(false);    
        }catch(err){
            message.destroy('load');
            notification.open({
                message: 'Erro ao enviar parecer',
                description: 'Tente novamente ou entre em contato com a assistencia tecnica',
                icon: <ExclamationCircleFilled  style={{ color: 'red' }}/>
            })
        }
    };
      
    return(
        <Modal 
            visible={visible}
            title="Parecer"
            onCancel={()=>setVisible(false)}
            footer={[
                <Button form="FormParecer" key="submit" htmlType="submit">
                    Submit
                </Button>,
                <Button onClick={()=>setVisible(false)}>
                    Cancelar
                </Button>
            ]}
        >
            <Form 
                onFinish={enviaParecer}
                id="FormParecer"
            >
                <Form.Item 
                label="Indicacao"
                name="Indicacao"
                 rules={[
                    {
                      required: true,
                      message: 'Por favor, faça sua avaliação!',
                    },
                  ]}

                >
                    <Radio.Group>
                        <Radio value={'A'}>adequado(A)</Radio>
                        <Radio value={'AR'}>adequado com ressalvas(AR)</Radio>
                        <Radio value={'I'}>inadequado(I)</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item 
                label="Comentario"
                name="Comentario"

                >
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Modal>
    );
}