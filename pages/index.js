import Head from 'next/head'
import GoogleLogin from "react-google-login";

export default function Home() {
  const [isLoggedin, setLoginStatus] = React.useState(false);
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    if (response && response.profileObj) {
      setLoginStatus(true);
    }
  }
  return (
    <div className="container">
      <Head>
        <title>Google Oauth Trial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {isLoggedin ? <p>You have logged in mate !</p> : <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Start EZ Order"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />}
      </main>

      <footer>
          2020 with ❤️
      </footer>
    </div>
  )
}


