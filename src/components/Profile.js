import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://img3.goodfon.ru/wallpaper/nbig/b/8b/muzhchina-zhenschina-para-paren.jpg"
                alt="man"
                name="Scott"/>
            <Palette/>
        </div>
    )
}
export default Profile;