import React from 'react'
import {useContext} from 'react'
import { Editor } from './Editor'
import { DataContext } from '../Context/DataProvider'

export const Code = () => {
 const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext)
  return (
    <>
    <div className='editor'>
    <Editor
    heading="HTML"
    icon="/"
    color="#FF3C41"
    value={html}
    onChange={setHtml}
    />
    <Editor
    heading="CSS"
    icon="*"
    color="#0EBEFF"
    value={css}
    onChange={setCss}
    />
    <Editor
    heading="JavaScript"
    icon="()"
    color="#FCD000"
    value={js}
    onChange={setJs}
    />
    </div>
    </>
  )
}
