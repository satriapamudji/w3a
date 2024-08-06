import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Web3 Alliance',
  description: 'Unlocking the Potential of Web3 together',
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