import type { Snippet } from "../../types/snippets";

type SnippetCardProps = {
  snippet: Snippet;
};

const SnippetCard = ({ snippet }: SnippetCardProps) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{snippet.title}</h3>
        <span className="text-sm text-zinc-400">{snippet.language}</span>
      </div>
      <pre className="bg-zinc-950 p-3 rounded-lg overflow-x-auto text-sm">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetCard;
