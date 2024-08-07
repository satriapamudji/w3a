import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Web3 Alliance',
  description: 'The largest network consolidation of Web3 professionals in the APAC region.',
  keywords: 'Web3, blockchain, APAC, professionals network',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}