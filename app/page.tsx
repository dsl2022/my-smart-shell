import Head from "next/head"
import DynamicStyles from './components/DynamicStyles';
import React, { useEffect } from 'react';
export default function Home() {
  return (
    <>
    
       <Head>
        <title>WebShell</title>
        <link rel="stylesheet" href="src/css/css-reset.css"/>
        <link rel="stylesheet" href="src/css/style.css"/>
        <link rel="icon" type="image/x-png" href="/res/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1" />
        <script src="https://kit.fontawesome.com/d5effce557.js" crossOrigin="anonymous"></script>
      </Head>
      <DynamicStyles/>
      <body>
  <main id="main">
    <div id="bars">
      <div id="bar-1">WebShell.x64_x86</div>
      <div id="bar-2"></div>
      <div id="bar-3"></div>
      <div id="bar-4"></div>
      <div id="bar-5"></div>
    </div>
    <br/>
    <div id="terminal">
      <div>
        <span id="prompt"><span id="pre-user"></span>@<span id="pre-host"></span>:$ ~ </span>
      </div>      
      <a id="write-lines"></a>
    </div>
    <div id="input-line">
      <div>
        <p id="password-input" style={{ display: 'none' }}>Password: <input id="password-field" autoComplete="off"
            type="password" /></p>
        <p id="input-hidden">
          <span id="prompt"><span id="user"></span>@<span id="host"></span>:$ ~
          </span>
          <input id="user-input" type="text" enterKeyHint="enter" spellCheck="false" autoCapitalize="none"
            autoComplete="off" />
        </p>
      </div>
      <br/>
    </div>
  </main>
</body>

    </>
  )
}
