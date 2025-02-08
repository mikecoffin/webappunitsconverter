import { translations, type TranslationKey } from "./translations"

type ConversionMap = {
  [key: string]: {
    [key: string]: number
  }
}

export const conversionFactors: ConversionMap = {
  comprimento: {
    metro: 1,
    quilômetro: 0.001,
    centímetro: 100,
    milímetro: 1000,
    micrômetro: 1000000,
    nanômetro: 1000000000,
    milha: 0.000621371,
    jarda: 1.09361,
    pé: 3.28084,
    polegada: 39.3701,
    "ano luz": 1.057e-16,
  },
  temperatura: {
    celsius: 1,
    fahrenheit: 33.8,
    kelvin: 274.15,
  },
  área: {
    "metro quadrado": 1,
    "quilômetro quadrado": 0.000001,
    hectare: 0.0001,
    acre: 0.000247105,
    "milha quadrada": 3.861e-7,
    "jarda quadrada": 1.19599,
    "pé quadrado": 10.7639,
    "polegada quadrada": 1550,
  },
  peso: {
    quilograma: 1,
    grama: 1000,
    miligrama: 1000000,
    "tonelada métrica": 0.001,
    libra: 2.20462,
    onça: 35.274,
    quilate: 5000,
  },
  volume: {
    litro: 1,
    mililitro: 1000,
    "metro cúbico": 0.001,
    galão: 0.264172,
    xícara: 4.22675,
    "pé cúbico": 0.0353147,
  },
  velocidade: {
    "quilômetro por hora": 1,
    "milha por hora": 0.621371,
    "metro por segundo": 3.6,
  },
  pressão: {
    pascal: 1,
    quilopascal: 0.001,
    bar: 0.00001,
    psi: 0.000145038,
  },
  energia: {
    joule: 1,
    quilojoule: 0.001,
    caloria: 0.239006,
    "quilowatt-hora": 2.77778e-7,
  },
  potência: {
    watt: 1,
    quilowatt: 0.001,
    "cavalo-vapor": 0.00134102,
  },
  ângulo: {
    grau: 1,
    radiano: 0.0174533,
  },
  dados: {
    byte: 1,
    kilobyte: 0.001,
    megabyte: 1e-6,
    gigabyte: 1e-9,
    terabyte: 1e-12,
  },
}

export const categories = [
  { value: "comprimento", label: "length" },
  { value: "temperatura", label: "temperature" },
  { value: "área", label: "area" },
  { value: "peso", label: "weight" },
  { value: "volume", label: "volume" },
  { value: "velocidade", label: "speed" },
  { value: "pressão", label: "pressure" },
  { value: "energia", label: "energy" },
  { value: "potência", label: "power" },
  { value: "ângulo", label: "angle" },
  { value: "dados", label: "data" },
]

export function getUnitsForCategory(category: string): string[] {
  return Object.keys(conversionFactors[category] || {})
}

export function convert(value: number, fromUnit: string, toUnit: string, category: string): number {
  const factors = conversionFactors[category]
  if (!factors) return value

  // Special case for temperature
  if (category === "temperatura") {
    // Convert to Celsius first
    let celsius
    if (fromUnit === "fahrenheit") {
      celsius = (value - 32) * (5 / 9)
    } else if (fromUnit === "kelvin") {
      celsius = value - 273.15
    } else {
      celsius = value
    }

    // Convert from Celsius to target unit
    if (toUnit === "fahrenheit") {
      return (celsius * 9) / 5 + 32
    } else if (toUnit === "kelvin") {
      return celsius + 273.15
    }
    return celsius
  }

  // For other units, use simple multiplication/division
  const fromFactor = factors[fromUnit] || 1
  const toFactor = factors[toUnit] || 1
  return (value / fromFactor) * toFactor
}

export function translateUnit(unit: string, language: "pt" | "es" | "en"): string {
  return translations[language][unit as TranslationKey] || unit
}

