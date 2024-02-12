import React from 'react'
import  ReactDOM  from 'react-dom'
import '../../main.css'
import AppLayout from '../../components/AppLayout/AppLayout'

ReactDOM.render(
    <React.StrictMode>
        <AppLayout />
        <a href="../../../index.html" className="back-button" style={{ position: 'absolute', top: 16, right: 16, padding: '1rem', border: '1px solid black' }}>Назад</a>
    </React.StrictMode>,
    document.getElementById('root')
)