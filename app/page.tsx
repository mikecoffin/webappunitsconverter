import { ConversorUnidadesAvancado } from "@/components/conversor-unidades-avancado"
import { LanguageProvider } from "@/contexts/LanguageContext"

export default function Page() {
  return (
    <LanguageProvider>
      <main className="min-h-screen p-4 md:p-8 bg-gray-50">
        <ConversorUnidadesAvancado />
      </main>
    </LanguageProvider>
  )
}

