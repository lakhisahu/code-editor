import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'

export const Result = () => {
    const [src,setSrc] = useState("")
    const {html, css, js} = useContext(DataContext)
    const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `

    useEffect(() =>{
      const timeout = setTimeout(()=>{
        setSrc(srcCode);
      }, 1000)

      return () => clearTimeout(timeout);

    },[html, css, js])
  return (
    <div className='result'>
        <iframe
        srcDoc={src}
        title="Output"
        name="result"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        frameBorder="0"
        width="100%"
        height="100%"
        />
    </div>
  )
}
