import React from 'react'

export default function Header() {
    return (
        <div>
            <img className='img' src='ahmad.jpeg' />
            <div className='header'>
                <h1 className='heading--items'>Ahmad Arab</h1>
                <h4 className='heading--role'>Fullstack Developer</h4>
                <nav className='heading--items'>
                    <a href='https://www.facebook.com/profile.php?id=100089766016020'>Facebook</a>
                    <a href='https://www.linkedin.com/in/ahmad-arab-b4757a249/'>LinkedIn</a>
                </nav>
            </div>
        </div>
    )
}