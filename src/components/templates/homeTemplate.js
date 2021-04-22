import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.main`
` 
const Header = styled.header`
` 
const Hero = styled.section`
` 
const Content = styled.section`
` 
const Footer = styled.footer`
` 

const HomeTemplate = (props) => {

  const {
    header,
    hero,
    content,
    footer,
    ...others
  } = props;

  return (
    <Wrapper {...others}>
      <Header>{header}</Header> 
      <Hero>{hero}</Hero> 
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

export default HomeTemplate
