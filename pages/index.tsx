// pages/index.tsx
import { GetStaticProps } from 'next';
import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import {formatDateWithOptions} from "../utils/formatDate";
import Link from "next/link";

// スタイルのインポート
import styles from '../styles/About.module.css';

const Home = () => {

    const handleClick = () => {
        alert('Button clicked!');
    };

    const today = new Date();
    return (
        <>
            <h1>Hello World</h1>
            <Image src="/images/hello-world.png" alt="Hello World" width={256} height={256} />

            {/* Aboutページへのリンク */}
            <h2>Aboutページへのリンク</h2>
            <Link href="/about" className={styles.link}>Go to About Page</Link>

            {/* Blogページへのリンク */}
            <h2>Blogページへのリンク</h2>
            <Link href="/blog" className={styles.link}>Go to Blog Page</Link>

            {/* ボタンの例 */}
            <h2>ボタンの例</h2>
            <Button label="Click Me" onClick={handleClick}/>

            {/* 日付の表示形式をローカライズ（地域化）する */}
            <h2>日付の表示形式をローカライズ（地域化）する例</h2>
            {formatDateWithOptions(today)}
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {}, // ページに渡すデータがあればここに書く
    };
};

export default Home;
