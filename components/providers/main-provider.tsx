"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "./theme-provider"
import { ModalProvider } from "./modal-provider"

function AppProviders({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-theme"
        >
            <ModalProvider>
                {children}
            </ModalProvider>
        </ThemeProvider>
    </ClerkProvider>
  )
}

export default AppProviders