"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { categories, getUnitsForCategory, translateUnit } from "@/lib/conversions"
import { useConverter } from "../hooks/use-converter"
import { useLanguage } from "../contexts/LanguageContext"
import { translations, type TranslationKey } from "../lib/translations"

const commonConversions = [
  { from: "centímetro", to: "polegada", category: "comprimento", labelKey: "cmToInches" },
  { from: "quilograma", to: "libra", category: "peso", labelKey: "kgToLbs" },
  { from: "celsius", to: "fahrenheit", category: "temperatura", labelKey: "celsiusToFahrenheit" },
  { from: "milímetro", to: "polegada", category: "comprimento", labelKey: "mmToInches" },
  { from: "metro", to: "pé", category: "comprimento", labelKey: "metersToFeet" },
  { from: "quilômetro", to: "milha", category: "comprimento", labelKey: "kmToMiles" },
  { from: "centímetro", to: "pé", category: "comprimento", labelKey: "cmToFeet" },
  { from: "grama", to: "onça", category: "peso", labelKey: "gramsToOunces" },
  { from: "polegada", to: "pé", category: "comprimento", labelKey: "inchesToFeet" },
  { from: "litro", to: "galão", category: "volume", labelKey: "litersToGallons" },
  { from: "libra", to: "onça", category: "peso", labelKey: "lbsToOunces" },
  { from: "quilômetro por hora", to: "milha por hora", category: "velocidade", labelKey: "kmhToMph" },
  { from: "acre", to: "pé quadrado", category: "área", labelKey: "acresToSquareFeet" },
  { from: "radiano", to: "grau", category: "ângulo", labelKey: "radiansToDegrees" },
  { from: "cavalo-vapor", to: "quilowatt", category: "potência", labelKey: "hpToKw" },
  { from: "metro", to: "jarda", category: "comprimento", labelKey: "metersToYards" },
  { from: "mililitro", to: "xícara", category: "volume", labelKey: "mlToCups" },
]

export function ConversorUnidadesAvancado() {
  const {
    category,
    setCategory,
    fromValue,
    setFromValue,
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    result,
    handleConversion,
  } = useConverter()

  const [activeTab, setActiveTab] = useState("comuns")
  const units = getUnitsForCategory(category)
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    handleConversion()
  }, [handleConversion])

  const t = (key: TranslationKey) => translations[language][key]

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg text-[#0865b7]">
      <CardHeader className="bg-white flex justify-between items-center">
        <CardTitle className="text-2xl font-bold text-center text-[#0865b7]">{t("title")}</CardTitle>
        <Select value={language} onValueChange={(value: "pt" | "es" | "en") => setLanguage(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pt">Português</SelectItem>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 w-full mb-6">
            <TabsTrigger value="comuns">{t("commonConversions")}</TabsTrigger>
            <TabsTrigger value="todas">{t("allConversions")}</TabsTrigger>
          </TabsList>

          <TabsContent value="comuns">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {commonConversions.map((conversion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="text-left h-auto py-2 hover:bg-primary"
                  onClick={() => {
                    setCategory(conversion.category)
                    setFromUnit(conversion.from)
                    setToUnit(conversion.to)
                    setActiveTab("todas")
                  }}
                >
                  {t(conversion.labelKey as TranslationKey)}
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="todas">
            <Tabs value={category} onValueChange={setCategory} className="w-full">
              <TabsList className="flex flex-wrap justify-start mb-6">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.value} value={cat.value} className="text-sm mb-2 mr-2">
                    {t(cat.label as TranslationKey)}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="grid gap-6 mt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t("from")}</label>
                    <Input
                      type="number"
                      value={fromValue}
                      onChange={(e) => setFromValue(e.target.value)}
                      placeholder={t("enterValue")}
                      className="border-primary focus:ring-primary placeholder-[#0865b7]"
                    />
                    <Select value={fromUnit} onValueChange={setFromUnit}>
                      <SelectTrigger className="border-primary">
                        <SelectValue placeholder={t("selectUnit")} />
                      </SelectTrigger>
                      <SelectContent>
                        {units.map((unit) => (
                          <SelectItem key={unit} value={unit}>
                            {translateUnit(unit, language)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t("to")}</label>
                    <Input type="text" value={result} readOnly className="bg-muted border-primary" />
                    <Select value={toUnit} onValueChange={setToUnit}>
                      <SelectTrigger className="border-primary">
                        <SelectValue placeholder={t("selectUnit")} />
                      </SelectTrigger>
                      <SelectContent>
                        {units.map((unit) => (
                          <SelectItem key={unit} value={unit}>
                            {translateUnit(unit, language)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Tabs>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

