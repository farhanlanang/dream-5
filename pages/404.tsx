import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => (
  <div className="container">
    <Head>
      <title>NotFound 404</title>
      <link rel="icon" href="/sleep.png" />
    </Head>

    <main>
      <h1 className="title">404</h1>
      <div className="grid">
        <p>We are sorry but the page you are looking for does not exist.</p>
        <Link href="/">
          <a className="card">Go Back Home</a>
        </Link>
      </div>
    </main>
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1.25rem;
        flex-basis: 30%;
        padding: 1rem;
        font-size: 1.25rem;
        font-weight: bold;
        text-align: center;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }


      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      
    `}</style>
  </div>
);

export default NotFound;
