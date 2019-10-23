import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User
                src="https://img3.goodfon.ru/wallpaper/nbig/b/8b/muzhchina-zhenschina-para-paren.jpg"
                alt="man"
                name="Scott" />
            <div className="users__block">
                <User
                    src="https://img3.goodfon.ru/wallpaper/nbig/b/8b/muzhchina-zhenschina-para-paren.jpg"
                    alt="man"
                    name="Scott"
                    min />
                <User
                    src="https://img3.goodfon.ru/wallpaper/nbig/b/8b/muzhchina-zhenschina-para-paren.jpg"
                    alt="man"
                    name="Scott"
                    min />
                <User
                    src="https://img3.goodfon.ru/wallpaper/nbig/b/8b/muzhchina-zhenschina-para-paren.jpg"
                    alt="man"
                    name="Scott"
                    min />
                <User
                    src="https://img3.goodfon.ru/wallpaper/nbig/b/8b/muzhchina-zhenschina-para-paren.jpg"
                    alt="man"
                    name="Scott"
                    min />
            </div>
        </div>
    )
}