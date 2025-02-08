import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'Conversor de Unidades Online | Ferramenta Gratuita de Conversão',
  description: 'Conversor de unidades online gratuito. Converta facilmente medidas de comprimento, peso, volume, temperatura e mais. Ferramenta prática e precisa para conversões do dia a dia.',
  keywords: 'conversor de unidades, conversor online, calculadora de conversão, converter medidas, conversor de medidas brasileiro, conversor metros, conversor quilos, conversor litros',
  openGraph: {
    title: 'Conversor de Unidades Online | Ferramenta Gratuita',
    description: 'Converta facilmente diferentes unidades de medida. Ferramenta gratuita para conversão de comprimento, peso, volume e temperatura.',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://your-vercel-url.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
  language: 'pt-BR',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
