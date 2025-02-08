import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'Conversor de Unidades Online | Calculadora de Conversão Gratuita',
  description: 'Conversor de unidades online gratuito e completo. Converta facilmente medidas brasileiras como metros, quilos, litros, alqueires, arrobas. Ferramenta prática para conversões do dia a dia, ideal para estudantes, profissionais e uso doméstico.',
  keywords: [
    // Medidas gerais
    'conversor de unidades, conversor online, calculadora de conversão',
    // Comprimento
    'metros para centímetros, quilômetros para metros, polegadas para centímetros, pés para metros',
    // Peso/Massa
    'quilos para gramas, arroba para quilo, libras para quilos, toneladas para quilos',
    // Área
    'metros quadrados, alqueire para hectare, hectare para metro quadrado',
    // Volume
    'litros para mililitros, metros cúbicos, galão para litros',
    // Temperatura
    'celsius para fahrenheit, kelvin para celsius',
    // Termos brasileiros
    'medidas brasileiras, conversor brasileiro, calculadora brasileira'
  ].join(', '),
  openGraph: {
    title: 'Conversor de Unidades Online | Calculadora de Conversão Gratuita',
    description: 'Ferramenta gratuita para converter todas as unidades de medida. Ideal para conversões brasileiras como metros, quilos, litros, alqueires e muito mais.',
    locale: 'pt_BR',
    type: 'website',
    siteName: 'Conversor de Unidades Online',
    images: [{
      url: 'URL_DA_SUA_IMAGEM', // Se você tiver uma imagem do site
      width: 1200,
      height: 630,
      alt: 'Conversor de Unidades Online'
    }]
  },
  alternates: {
    canonical: 'https://your-vercel-url.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'adicione_seu_código_do_google_search_console', // Você pode adicionar depois
  },
  language: 'pt-BR',
  authors: [{ name: 'Seu Nome' }],
  category: 'Ferramentas de Conversão',
  other: {
    'google-site-verification': 'adicione_seu_código_do_google_search_console', // Você pode adicionar depois
    'msvalidate.01': 'adicione_seu_código_do_bing', // Se quiser adicionar depois
  }
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
