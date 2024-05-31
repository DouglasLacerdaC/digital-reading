import { GraduationCap, Menu } from "lucide-react";
import { Link } from "react-router-dom"

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 border-b bg-background z-10">
      <div className="max-w-5xl mx-auto h-16 flex items-center md:px-6 px-4 gap-4">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base p-2 rounded-lg bg-emerald-200">
            <GraduationCap className="h-6 w-6 stroke-emerald-800" />
            <span className="sr-only">Escola</span>
          </Link>
          <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/materials" className="text-muted-foreground transition-colors hover:text-foreground">
            Conteúdos
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menu de navegação</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link to="/" className="w-min flex items-center gap-2 text-lg font-semibold md:text-base p-2 rounded-lg bg-emerald-200">
                <GraduationCap className="h-6 w-6 stroke-emerald-800" />
                <span className="sr-only">Escola</span>
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/materials" className="text-muted-foreground hover:text-foreground">
                Conteúdos
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial" />

          <a className="underline text-blue-400" href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">
            WCAG (Acessibilidade)
          </a>
        </div>
      </div>
    </header>
  )
}
