import Head from 'next/head'

export default function MainPage() {
    return (
        <div>
            <Head>
                <title>Aniketh Tarikonda - Home</title>
            </Head>

            <h2>Welcome! This is my website</h2>
            <p>I'll try to keep this updated relatively often...this entire website is a WIP</p>
            <p>Feel free to look around. This site doubles as my personal file hosting software—all downloads in <a href="/files">files</a> are accessible to everybody. </p>

            <footer className="site-footer">
                <a href="mailto:aonwgs@gmail.com">Contact</a> |  
                <a href="https://www.linkedin.com/in/aniketh-tarikonda-094a66247/" target="_blank" rel="noopener noreferrer" > LinkedIn </a> |
                <a href="https://github.com/anikethta" target="_blank" rel="noopener noreferrer"> Github </a> |
                <a> Misc </a>
            </footer>
        </div>
    ) 
}