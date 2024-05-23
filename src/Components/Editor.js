"use client"
import React, { useState } from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'

    
export const Editor = ({heading, icon, color, value, onChange}) => {
    const [open,setOpen] = useState(true);
    const handleChange = (editor, data, value) => {
        onChange(value);
    }
  return (
    <div className='container' style={ open ? null : {flexGrow: 0}}>
        <div className='box2'>
            <div className='box3'>
                <div className=' box4 span' style={{backgroundColor:color}}>
                    {icon}
                </div>
               {heading}
            </div>
        </div>
        <CodeMirror className='controlled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
            theme: 'material',
    lineNumbers: true
        }}
        />
    </div>
  )
}
