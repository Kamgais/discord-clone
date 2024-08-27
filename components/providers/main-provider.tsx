"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "./theme-provider"
import { ModalProvider } from "./modal-provider"
import { SocketProvider } from "./socket-provider"

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
            <SocketProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
            </SocketProvider>
        </ThemeProvider>
    </ClerkProvider>
  )
}

export default AppProviders