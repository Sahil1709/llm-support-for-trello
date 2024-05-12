import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeButton } from "@/components/theme-button";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
      <h1 className="text-3xl">AI Based Kanban Creator </h1>
      <div className="flex gap-4">
        <ThemeButton />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>

    </header>
  );
}
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LLM Support For Trello",
  description: "A simple app to help you create Kanban boards with the help of AI.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
