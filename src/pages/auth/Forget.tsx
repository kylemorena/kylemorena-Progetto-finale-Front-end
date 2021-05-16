import React from 'react'
import IPageProps from '@interfaces/pages';

const Forget : React.FC<IPageProps> = (props) => {
    const {name} = props;
    
    return (
        <p>
            Forget Password Page
        </p>
    )
}

export default Forget
