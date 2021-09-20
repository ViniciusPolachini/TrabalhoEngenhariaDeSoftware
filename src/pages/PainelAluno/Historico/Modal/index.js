import React from 'react';
import {Modal ,Button, Form, Input, Radio, notification, message} from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons';

import { Container } from './style';

export default function ModalComentario({ visible, setVisible, comentarioOrientador, comentarioCPP}){
    
      
    return(
        <Modal 
            visible={visible}
            title="Comentarios"
            onCancel={()=>setVisible(false)}
        >
            <Container>
                <label htmlFor='orientador'><h3>Orientador</h3></label>
                <div id='orientador'>
                        {
                        comentarioOrientador=='' ? 
                        (<p>Sem comentário</p>):
                        (<p>{comentarioOrientador}</p>)
                        }
                </div>
                <label htmlFor='CPP'><h3>CPP</h3></label>
                    <div id='CPP'>
                        {
                        comentarioCPP=='' ? 
                        (<p>Sem comentário</p>):
                        (<p>{comentarioCPP}</p>)
                        }
                    </div>
            </Container>
        </Modal>
    );
}