'use client'

import React, { createContext, useContext, useState } from 'react'

interface UIContextType {
  modalOpen: boolean
  setModalOpen: (open: boolean) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <UIContext.Provider value={{ modalOpen, setModalOpen, menuOpen, setMenuOpen }}>
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}
