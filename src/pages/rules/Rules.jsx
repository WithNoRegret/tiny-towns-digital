import React from 'react'
import  ReactDOM  from 'react-dom'
import '../../styles/reset.css'
import './rules.css'
import '../../styles/utils.css'
import AppLayout from '../../components/AppLayout/AppLayout'

ReactDOM.render(
    <React.StrictMode>
        <AppLayout />
        <a href="/index.html" className="back-button button" >Назад</a>
    </React.StrictMode>,
    document.getElementById('root')
)