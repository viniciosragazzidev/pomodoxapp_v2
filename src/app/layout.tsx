import { NavbarTop } from "./components/Header/NavbarTop";
import { NotificationComponent } from "./components/Notification/notificationComponent";
import AppContextProvider from "./_context/AppContext";
import "./globals.css";
import { Inter } from "next/font/google";
import ProfileContextProvider from "./_context/ProfilesContext";
import PomodoroContextProvider from "./_context/PomodoroContext";
import TodoContextProvider from "./_context/TodoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pomodox App - Bem Vindo",
  description: "App to focus using pomodoro method",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContextProvider>
      <ProfileContextProvider>
        <TodoContextProvider>
        <PomodoroContextProvider>
          <html lang="pt-br">
            <body
              className={
                inter.className +
                " text-white scrollbar scrollbar-thumb-custom-purple-hover"
              }
            >
              <NotificationComponent />

              <NavbarTop />
              {children}
            </body>
          </html>
        </PomodoroContextProvider>
        </TodoContextProvider>
      </ProfileContextProvider>
    </AppContextProvider>
  );
}
