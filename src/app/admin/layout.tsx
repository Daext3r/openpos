
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OpenPOS - Admin',
  description: 'Free and open source Point of Sell',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <p>Esto es el layout admin</p>
        <div>{children}</div>
    </div>
  )
}
