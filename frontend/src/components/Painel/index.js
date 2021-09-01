import React from 'react';
import {Button} from 'antd'
import {Container} from './style';

export default function Painel({btns, children}){
    return(
        <Container>
            <nav>
                {btns.map((btn)=>{
                   return <Button type="primary" black>{btn}</Button>
                })}
            </nav>
            {children}
        </Container>
    );
}