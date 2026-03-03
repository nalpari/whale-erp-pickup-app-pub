'use client'
import { useRouter } from 'next/navigation'
import { HeaderMenuType } from '@/constants/HeaderMenu'

type HeaderProps = {
  url?: string
  title?: string
  basket?: boolean
}

export default function Header({ url, title, basket }: HeaderProps) {
  const router = useRouter()

  const headerConfig: HeaderMenuType = {
    url: url || '/',
    title: title || '',
    basket: basket || false,
  }

  return (
    <div className="header">
      <div className="header-inner">
        <div className="back-btn-bx">
          <button className="back-btn" onClick={() => router.back()}></button>
        </div>
        {headerConfig.title && <h1>{headerConfig.title}</h1>}
        {headerConfig.basket && (
          <div className="order-side">
            <button className="order-basket">
              <span>2</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
