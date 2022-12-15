import React from 'react';
import {FiThumbsUp} from 'react-icons/fi'

import{
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = ()=>{
    return(
        <CardContainer>
            <ImageBackground src="https://img.freepik.com/vetores-premium/conceito-de-empresa-de-programacao-3d-isometrico-web-banner-as-pessoas-desenvolvem-software-e-programas_9209-8473.jpg?w=826"/>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/95251132?v=4'/>
                    <div>
                        <h4>Tailine Maria</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de HTML e CSS no bootcamp da DIO...<strong>Ver Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                </HasInfo>
                <p>
                   <FiThumbsUp /> 10
                </p>
            </Content>
        </CardContainer>
    )
}

export {Card}
