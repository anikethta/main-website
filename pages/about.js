import Head from 'next/head'

export default function AboutPage() {
    return (
        <div>
            <Head>
                <title>Aniketh Tarikonda - About</title>
            </Head>

            <h2>About</h2>

            <p>I'm Aniketh Tarikonda, and I study Computer Engineering at the University of Illinois Urbana-Champaign.
                Any important information will (eventually) be available somewhere in <a href="/files">files</a>.</p>
            My interests include
            <ul>
                <li>messing around with random hardware/embedded electronics</li>
                <li>coding generally useless (occasionally helpful) apps</li>
                <li>music</li>
            </ul>
            <p>Website made w/ NextJs, Java Spring, Nginx, and miscellaneous services provided by Cloudflare</p>
            <footer className="site-footer">
                <a href="mailto:aonwgs@gmail.com">Contact</a> |  
                <a href="https://www.linkedin.com/in/aniketh-tarikonda-094a66247/" target="_blank" rel="noopener noreferrer" > LinkedIn </a> |
                <a href="https://github.com/anikethta" target="_blank" rel="noopener noreferrer"> Github </a> |
                <a> Misc </a>
            </footer>
        </div>
    ) 
}