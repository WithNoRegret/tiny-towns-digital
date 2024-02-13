import React from 'react'
import  ReactDOM  from 'react-dom'
import AppLayout from '../../components/AppLayout/AppLayout'
import '../../styles/main.css';


ReactDOM.render(
    <React.StrictMode>
        <AppLayout 
            contentType={'game'}
        />
    </React.StrictMode>,
    document.getElementById('root')
)