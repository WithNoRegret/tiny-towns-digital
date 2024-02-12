import React from 'react'
import  ReactDOM  from 'react-dom'
import AppLayout from '../../components/AppLayout/AppLayout'
import '../../styles/main.css';


ReactDOM.render(
    <React.StrictMode>
        <AppLayout />
        <a href="/index.html" className="back-button button" >Назад</a>
    </React.StrictMode>,
    document.getElementById('root')
)