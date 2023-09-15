"use client"

import { useState } from 'react';
import styles from './../auth.module.css'
import Image from 'next/image'


export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    //TODO: change the logo path

    async function onLogin() {

    }

    return (
        <div className={styles.loginContainer}>
            <Image src="https://placeholder.com/300x120" width="300" height="120" alt="OpenPOS Logo"></Image>

            <form>
                <input type="text" name="username" />
                <input type="email" name="email" />
                <input type="password" name="password" id="" />
                <input type="password" name="password_2" id="" />
            </form>
        </div>
    )
}