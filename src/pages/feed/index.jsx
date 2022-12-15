import React from "react";
import {Link} from "react-router-dom";

import bannerImage from '../../assets/banner.png'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {Card} from "../../components/Card"
import { UserInfo } from "../../components/UserInfo";

import {Container, Column, Title, TitleHighlight }from './styles'

const Feed = ()=>{
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
              <Title>Feed</Title>            
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>            
            </Column>
            <Column flex ={1}>
              <TitleHighlight>#RANKING 5 TOP DA SEMANA</TitleHighlight>
              <UserInfo percentual={65} nome="Tailine Maria" image='https://avatars.githubusercontent.com/u/95251132?v=4'/>
              <UserInfo percentual={35} nome="Tailine Maria" image='https://avatars.githubusercontent.com/u/95251132?v=4'/>
              <UserInfo percentual={78} nome="Tailine Maria" image='https://avatars.githubusercontent.com/u/95251132?v=4'/>
              <UserInfo percentual={97} nome="Tailine Maria" image='https://avatars.githubusercontent.com/u/95251132?v=4'/>
              <UserInfo percentual={25} nome="Tailine Maria" image='https://avatars.githubusercontent.com/u/95251132?v=4'/>
            </Column>
          
        </Container>
        
   
    </>)
}

export { Feed }