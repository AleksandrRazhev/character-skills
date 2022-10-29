import { Provider } from "react-redux";

import { store } from "../store";
import Head from "next/head";
import App from "../components/App/App";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Character Skills</title>
        <meta
          name="description"
          content="Project on the NextJS framework to consolidate the knowledge of ReduxJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Provider store={store}>
          <App />
        </Provider>
      </main>
    </div>
  );
}
