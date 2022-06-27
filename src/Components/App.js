import React, { useState } from 'react'
import { marked } from 'marked'
import EditorPlaceholder from './EditorPlaceholder'
import './App.css'
import { FaFreeCodeCamp, FaExpandArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa'

function App() {
    const [textUpdate, setTextUpdate] = useState(EditorPlaceholder)
    const [windowMaximized, setWindowMaximized] = useState(true)
    const [previewWindowMaximized, setPreviewWindowMaximized] = useState(true)
    const changeEditorWindowSize = () => {windowMaximized ? setWindowMaximized(false) : setWindowMaximized(true)}
    const changePreviewWindowSize = () => {previewWindowMaximized ? setPreviewWindowMaximized(false) : setPreviewWindowMaximized(true)}

  return (
    <>
    <div className='main-container'>
        {previewWindowMaximized === false ? null : <div className={windowMaximized === false ? 'editor-wrap-maximized' : 'editor-wrap'}>
            <div className='toolbar'>
                <FaFreeCodeCamp style={{fontSize: '3rem', paddingRight: '1rem'}} />
                Editor
                {windowMaximized === true ? <FaExpandArrowsAlt onClick={changeEditorWindowSize} style={{fontSize: '1.5rem', marginLeft: 'auto'}} /> : <FaCompressArrowsAlt onClick={changeEditorWindowSize} style={{fontSize: '1.5rem', marginLeft: 'auto'}} />}
            </div>
        <textarea id="editor" className='editor' onChange={(event) => {setTextUpdate(event.target.value)}}value={textUpdate} />
        </div>}
        {windowMaximized === false ? null : <div className={previewWindowMaximized === false ? 'previewer-wrap-maximized' : 'previewer-wrap'}>
        <div className='toolbar'>
                <FaFreeCodeCamp style={{fontSize: '3rem', paddingRight: '1rem'}} />
                Previewer
                {previewWindowMaximized === true ? <FaExpandArrowsAlt onClick={changePreviewWindowSize} style={{fontSize: '1.5rem', marginLeft: 'auto'}} /> : <FaCompressArrowsAlt onClick={changePreviewWindowSize} style={{fontSize: '1.5rem', marginLeft: 'auto'}} />}
            </div>
        <div id="preview" className='preview' dangerouslySetInnerHTML={{__html: marked(textUpdate)}}></div>
        </div>}

    </div>
    </>
  )
}

export default App
