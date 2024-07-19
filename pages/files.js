import Head from 'next/head'
import * as React from "react";

export default function FilePage(props) {
    return (
        <div>
            <Head>
                <title>Aniketh Tarikonda - Files</title>
            </Head>
            
            <h1>All Files</h1>
            {props.files.map((str, index) => {
                const sep_data = str.split('&^&')
                const file_size = (1024 * parseFloat(sep_data[2])) >= 1000.0 ? 
                            Math.floor((parseFloat(sep_data[2]))) + "MB" : Math.floor((1024 * parseFloat(sep_data[2]))) + "KB"

                return (
                    <div key={index}>
                        <h3>
                            <a href="javascript:;" onClick={() => downloadFile(sep_data[1])}>{sep_data[0]}</a>
                        </h3>
                        <p>Description: {sep_data[3]}</p>
                        <p>File Size: {file_size}</p>
                        <hr />
                    </div>
            )})
            }
        </div>
    )
}


export async function getStaticProps() {
    try {
        const response = await fetch("https://api.anikethta.com/api/v1")
        const data = await response.json()
        console.log(data)
        return {
        props: {
            files: data
        },
        revalidate: 10
        }
    }

    catch {
        console.warn("File Hosting Service is temporarily unavailable. Please try again later.");
        return {
            props: {
                files: null
            }, 
        }
    }
}

const downloadFile = async (uuid) => {
  await fetch('https://api.anikethta.com/api/v1/download/' + uuid)
    .then(response => {
      const filename =  response.headers.get('Content-Disposition').split('filename=')[1].slice(1, -1);
      console.log(filename);
      response.blob().then(blob => {
        if (typeof window !== "undefined") {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
        }
    });
 }).catch(err => {
    console.warn("error in downloading file: " + err);
 });
}