import React from 'react'
import styled from '@emotion/styled'


const Logo = styled.div`
padding: auto;
position: center;
`

const Lgo = () => {
    return (
        <Logo>
            <div>
                <img src={'dashboard/src/app/components/Logo/Logo.jpg'} alt={'OnlySchool'} />
            </div>
        </Logo>
    )
}


export default Logo