'use client'
import React from 'react'
type BillingProviderProps = {
    credits: string
    tier: string
    setCredits: React.Dispatch<React.SetStateAction<string>>
    setTier: React.Dispatch<React.SetStateAction<string>>
}