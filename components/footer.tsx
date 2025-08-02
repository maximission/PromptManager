import React from 'react'
import { ThemeSwitcher } from './theme-switcher'

function footer() {
  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
        <p>
            Powered by me
        </p>
        <ThemeSwitcher />
    </footer>
  )
}

export default footer