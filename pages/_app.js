import Link from 'next/link'
import {useRouter} from 'next/router'
import "../styles/global.css"

export default function App({Component, pageProps}) {
    const router = useRouter() 

    return (
        <>
            <div>
                <nav className="header-nav">
                <div className="container">
                    <h1 className="main-header">Aniketh Tarikonda</h1>
                    <ul>
                        <li>
                            <Link className = {router.pathname == "/" ? "active" : ""} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className = {router.pathname == "/about" ? "active" : ""} href="/about">About</Link>
                        </li>
                        <li>
                            <Link className = {router.pathname == "/files" ? "active" : ""} href="/files">Files</Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
            <Component {...pageProps}/>
        </>
    )
}