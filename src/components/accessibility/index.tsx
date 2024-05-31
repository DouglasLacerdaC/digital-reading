import { useEffect, useState } from "react";
import { Ban, Circle, Eye, PersonStanding } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

type MouseState = 'normal' | 'listening';

export function Accessibility() {
  const [theme, setTheme] = useState("default")

  function handleTheme(newTheme: string) {
    const html = document.documentElement;

    if (theme === newTheme) {
      html.className = '';
      setTheme("default")

      return
    } else {
      html.className = '';
      html.classList.add(newTheme);

      setTheme(newTheme)
    }
  }

  const [mouseState, setMouseState] = useState<MouseState>('normal');

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (mouseState === 'listening') {
        const target = event.target as HTMLElement;
        if (target) {
          speak(target.textContent || '');
        }
      }
    };

    if (mouseState === 'listening') {
      document.documentElement.setAttribute('data-reader-active', 'true');
      document.addEventListener('click', handleClick);
    } else {
      document.removeEventListener('click', handleClick);
      document.documentElement.removeAttribute('data-reader-active');
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [mouseState]);

  const toggleMouseState = () => {
    if (mouseState === 'listening') stopSpeech();
    setMouseState(mouseState === 'normal' ? 'listening' : 'normal');
  };

  const speak = (text: string) => {
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    speechSynthesis.cancel();
  };

  return (
    <Popover>
      <PopoverTrigger className="fixed left-2 bottom-64" asChild>
        <Button className="w-10 p-0 rounded-lg bg-sky-600">
          <PersonStanding />
        </Button>
      </PopoverTrigger>

      <PopoverContent side="left" className="space-y-2 w-full sm:min-w-80">
        <h3 className="font-semibold">Recursos de acessibilidade</h3>

        <Separator />

        <div className="grid grid-cols-2 gap-4 pt-4">
          <button onClick={() => handleTheme("theme-monochrome")} data-active={theme === "theme-monochrome"} className="rounded-lg py-4 flex flex-col items-center space-y-1 border data-[active=true]:border-red-500">
            <Circle size={20} />
            <span className="text-sm">Monocromático</span>
          </button>

          <button onClick={() => handleTheme("theme-colorblind")} data-active={theme === "theme-colorblind"} className="rounded-lg py-4 flex flex-col items-center space-y-1 border data-[active=true]:border-red-500">
            <Eye size={20} />
            <span className="text-sm">Daltônico</span>
          </button>
        </div>

        <div className="pt-3">
          <Button className="w-full" variant={mouseState === "normal" ? "default" : "destructive"} onClick={toggleMouseState}>
            {mouseState === 'normal' ? 'Ativar Leitor de Tela' : (
              <div className="flex items-center gap-2">
                <Ban size={16} />
                <span>Desativar Leitor de Tela</span>
              </div>
            )}
          </Button>
        </div>
      </PopoverContent>

      <div className="speak-div"></div>
    </Popover>
  )
}
