import React from 'react'
import IPageProps from '@interfaces/pages';

const ChangePassword:React.FC<IPageProps> = (props) => {
    const {name} = props;

    return (
        <p>
            Change Password Page
        </p>
    )
}

export default ChangePassword;