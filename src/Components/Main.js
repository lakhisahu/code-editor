"use client"
import {Header} from './Header' 
import { Code } from './Code'
import DataProvider from '../Context/DataProvider'
import { Result } from './Result'

const Main = () => {
  return (
  
    <DataProvider>
    <Header/>
    <Code/>
    <Result/>

    </DataProvider>
    
  )
}
export default Main;
