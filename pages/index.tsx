// pages/index.tsx
import { GetStaticProps } from 'next';

const Home = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {}, // ページに渡すデータがあればここに書く
    };
};

export default Home;
