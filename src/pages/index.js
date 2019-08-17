import React from 'react'
import RashSelfIcon from '../assets/images/rashmi.jpeg'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
  
    <UserTitle> <img src={RashSelfIcon} alt="rashmi self" width="250" align="middle" /> &nbsp;&nbsp;&nbsp;&nbsp; Xiangjian Gao</UserTitle>

    <UserDescription>
        <p> Hello there, welcome to my personal website. </p>
      
    </UserDescription>
    
  </UserWrapper>
  </Layout>
}

export default IndexPage
