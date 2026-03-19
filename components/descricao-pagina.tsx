
export const DescricaoPagina = ({
  titulo,
  descricao,
}: {
  titulo: string;
  descricao?: string;
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold tracking-tighter text-cyan-500 drop-shadow-md ">
        {titulo}
      </h1>
      <h1 className="text-sm font-light tracking-tighter">
        {descricao}
      </h1>
    </div>
  );
};
