"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "./theme-provider"
import { ModalProvider } from "./modal-provider"
import { SocketProvider } from "./socket-provider"
import { QueryProvider } from "./query-provider"

function AppProviders({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-theme"
        >
            <SocketProvider>
            <ModalProvider>
              <QueryProvider>
                {children}
              </QueryProvider>
            </ModalProvider>
            </SocketProvider>
        </ThemeProvider>
    </ClerkProvider>
  )
}

export default AppProviders