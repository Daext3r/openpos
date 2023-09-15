import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OpenPOS',
  description: 'Free and open source Point of Sell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
