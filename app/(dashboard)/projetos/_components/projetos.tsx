import { DescricaoPagina } from "@/components/descricao-pagina";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    titulo: "Financas",
    descricao:
      "Finanças é a gestão do dinheiro, especialmente de empresas, organizações ou governos. Ela envolve o processo de aquisição, gasto e investimento de capital.",
    href: "https://tnext-finance.vercel.app/",
    capa: "/images/projetos/finance.jpg",
    habilidades: [
      "NextJs",
      "Typescript",
      "Shadcn UI",
      "Tailwind",
      "Drizzle",
      "Clerk",
      "Hono",
      "Neon",
      "Zod",
    ],
  },
  {
    titulo: "ScraperFlow",
    descricao:
      "Automatize sites e extraia dados sem esforço algum — sem precisar de codificação. O flow builder do FlowScraper e as ações de IA personalizáveis ​​tornam a automação da web fácil, eficiente e flexível.",
    href: "https://tnext-scrape-flow.vercel.app/",
    capa: "/images/projetos/scrape.jpg",
    habilidades: [
      "NextJs",
      "Typescript",
      "Shadcn UI",
      "Tailwind",
      "Prisma",
      "Clerk",
      "Stripe",
      "Zod",
    ],
  },
  {
    titulo: "Landing Page",
    descricao:
      "Uma landing page é uma página da web que visa atrair visitantes, coletar dados e convertê-los em clientes ou leads. Também é conhecida como página de conversão, de captura ou de destino",
    href: "https://tnext-saaswebsite-landingpage.vercel.app/",
    capa: "/images/projetos/landing-page.png",
    habilidades: ["NextJs", "Typescript", "Tailwind", "Framer motion"],
  },
  {
    titulo: "Clone netflix",
    descricao:
      "Netflix é um serviço online de streaming norte-americano lançado em 2010 e é disponível em mais de 190 países.",
    href: "https://next-netflix-clone-nine.vercel.app",
    capa: "/images/projetos/netflix-clone.png",
    habilidades: [
      "NextJs",
      "Typescript",
      "Shadcn UI",
      "Tailwind",
      "Clerk",
      "Prisma",
      "Neon",
    ],
  },
  {
    titulo: "Page form",
    descricao: "Crie formulários com um incrível designer de arrastar e soltar",
    href: "https://tnext-page-form.vercel.app/",
    capa: "/images/projetos/page-form.png",
    habilidades: ["NextJs", "Typescript", "Tailwind", "Dnd kit"],
  },
  {
    titulo: "app-posto",
    descricao: "",
    href: "https://app-posto-eight.vercel.app/",
    capa: "/images/projetos/bomba.png",
    habilidades: ["Angular", "scss", "Typescript"],
  },
  {
    titulo: "app-vidro",
    descricao: "",
    href: "https://app-vidro.vercel.app/",
    capa: "/images/projetos/app-vidros.jpg",
    habilidades: ["Angular", "scss", "Typescript"],
  },
];

export const Projetos = () => {
  return (
    <div className="w-full mt-8">
      <DescricaoPagina titulo="Projetos" descricao="" />

      <div className="w-full border border-gray-200 rounded-xl p-4 mt-8">
        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
            {data.map((item) => (
              <div key={item.titulo}>
                <Card key={item.titulo} className="border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl">{item.titulo}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {item.descricao}
                    </CardDescription>
                    <div className="h-48 overflow-hidden rounded-lg">
                      <Image
                        src={item.capa}
                        alt="imagem"
                        width={200}
                        height={200}
                        className="rounded-lg opacity-90 h-full w-full object-cover"
                        priority
                      />
                    </div>
                  </CardHeader>
                  <CardContent className=""></CardContent>
                  <CardFooter>
                    <Link href={item.href} target="_blank" className="w-full">
                      <Button className="w-full">
                        Saber Mais
                        <span className="block transition-all hover:ms-0.5">
                          &rarr;
                        </span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
