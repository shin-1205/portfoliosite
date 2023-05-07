import Head from "next/head"

export default function () {
  return (
    <div>
      <Head >
        <title>Shin's Portfolio</title>
        <meta name="description" content="This is my portfolio website" />
        <link rel="icon" href="/ShinFab.svg" />
      </Head>

      <header>
        <div className='container'>
          <h1>My Portfolio</h1>

          <nav>
            <ul>
              <a>About</a>
              <a>Works</a>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
