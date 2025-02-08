"use client"

import { useState, useCallback } from "react"
import { convert } from "@/lib/conversions"

export function useConverter() {
  const [category, setCategory] = useState("comprimento")
  const [fromValue, setFromValue] = useState("")
  const [fromUnit, setFromUnit] = useState("")
  const [toUnit, setToUnit] = useState("")
  const [result, setResult] = useState("")

  const handleConversion = useCallback(() => {
    if (!fromValue || !fromUnit || !toUnit) {
      setResult("")
      return
    }

    const value = Number.parseFloat(fromValue)
    if (isNaN(value)) {
      setResult("Número inválido")
      return
    }

    const converted = convert(value, fromUnit, toUnit, category)
    setResult(converted.toFixed(6))
  }, [fromValue, fromUnit, toUnit, category])

  return {
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
  }
}

