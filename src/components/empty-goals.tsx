import { Plus } from 'lucide-react';
import logo from '../assets/in-orbit-logo.svg';
import launchIllustration from '../assets/rocket-launch-illustration.svg';
import { DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="logo task io" />
      <img
        src={launchIllustration}
        alt="ilustração de um lançamento de um foguete"
      />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
