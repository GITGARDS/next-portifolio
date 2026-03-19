import { DescricaoPagina } from "@/components/descricao-pagina";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const data = [
  {
    title: "Java",
    descricao: "Linguagem",
    icone: "/images/java.webp",
  },
  {
    title: "Delphi",
    descricao: "Linguagem",
    icone: "/images/delphi.png",
  },
  {
    title: "Typescript",
    descricao: "Linguagem",
    icone: "/images/typescript.png",
  },
  {
    title: "Node.js",
    descricao: "Ambiente",
    icone: "/images/nodejs.png",
  },
  {
    title: "Next.js",
    descricao: "Framework",
    icone: "/images/Nextjs.webp",
  },
  {
    title: "Angular",
    descricao: "Framework",
    icone: "/images/angular.png",
  },
  {
    title: "Figma",
    descricao: "Interface Design",
    icone: "/images/figma.png",
  },
  {
    title: "MySql",
    descricao: "Banco de dados",
    icone: "/images/mysql.png",
  },
  {
    title: "Postgresql",
    descricao: "Banco de dados",
    icone: "/images/postgresql.png",
  },
  {
    title: "Prisma",
    descricao: "ORM",
    icone: "/images/prisma.png",
  },
  {
    title: "Drizzle",
    descricao: "ORM",
    icone: "/images/drizzle.png",
  },
  {
    title: "Neon",
    descricao: "Database",
    icone: "/images/neon.jpg",
  },
  {
    title: "Stripe",
    descricao: "Payment",
    icone: "/images/Stripe.webp",
  },
  {
    title: "Tailwind",
    descricao: "estilização",
    icone: "/images/tailwindcss.webp",
  },
  {
    title: "Vercel",
    descricao: "Provedor",
    icone: "/images/Vercel.webp",
  },
  {
    title: "Supabase",
    descricao: "Database",
    icone: "/images/supabase.webp",
  },
  {
    title: "Docker",
    descricao: "Conteiner",
    icone: "/images/docker.png",
  },
];

type stackType = {
  title: string;
  descricao: string;
  icone: string;
};

export const Stacks = () => {
  return (
    <div className="w-full mt-8">
      <DescricaoPagina
        titulo="Minha Stack"
        descricao="Software e ferramentas que utilizo regularmente."
      />

      <div className="w-full border border-gray-200 rounded-lg  p-4 mt-8">
        <div className="flex flex-col gap-5 w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2">
            {data.map((item) => (
              <StackCard key={item.title} stack={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function StackCard({ stack }: { stack: stackType }) {
  const { title, descricao, icone } = stack;
  return (
    <Card className="flex gap-2 items-center px-4 border-none">
      <div className="flex flex-grow-0 items-center justify-center" style={{height:"60px", width: "60px"  }}>
        <Image
          src={icone}
          alt="imagem"
          width={60}
          height={60}
          className="rounded-lg"
          priority
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{descricao}</CardDescription>
      </CardHeader>
    </Card>
  );
}
