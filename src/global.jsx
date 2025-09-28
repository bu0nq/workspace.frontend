import '@/main.scss'
import { Head } from 'minista'

export default (props) => {
  const { children, title } = props

  return (
    <>
      <Head
        htmlAttributes={{
          lang: 'ru',
        }}
      >
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App | {title}</title>
      </Head>
      {children}
      <script src="/src/main.js" type="module" />
    </>
  )
}
