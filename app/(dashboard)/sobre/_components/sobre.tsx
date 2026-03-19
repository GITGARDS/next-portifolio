import { DescricaoPagina } from "@/components/descricao-pagina";
import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Sobre = () => {
  return (
    <div className="w-full mt-8">
      <DescricaoPagina titulo="Home" descricao="" />

      <div className="items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            src={"/avatar.jpg"}
            alt="Eu mesmo"
            width={150}
            height={150}
            className="rounded-full object-cover object-top"
            priority                  
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Adriano Rogerio
          </h3>

          <div className="flex space-x-5 pt-6">
            <a href="https://github.com/GITGARDS" target="_blank">
              <FaGithub className="text-3xl text-primary/80 hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/adriano-rogerio-de-souza-95138a214/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl text-primary/80 hover:text-primary" />
            </a>
            <a
              href="mailto:adrianorogeriodesouza4353@gmail.com"
              target="_blank"
            >
              <IoMdMail className="text-3xl text-primary/80 hover:text-primary" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-10 prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2">
          <p>
            Olá a todos, meu nome é Adriano, e sou um desenvolvedor Full Stack.
          </p>
          <p>
            Adoro construir aplicativos Full Stack. Quando descobri o React e
            Next, fiquei impressionado com sua interatividade e velocidade. Seu
            DOM virtual e mecanismos de renderização eficientes me permitiram
            criar interfaces de usuário dinâmicas que respondiam às ações do
            usuário em tempo real.
          </p>
          <p>
            Criar aplicativos com React e Next é uma combinação definitiva de
            expressão criativa, conhecimento técnico e denvolvimento da
            comunidade. Estou emocionado por continuar esta jornada, aprimorando
            minhas habilidades.
          </p>
        </div>
      </div>
    </div>
  );
};
