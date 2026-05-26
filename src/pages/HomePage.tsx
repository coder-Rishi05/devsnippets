import MainLayout from "../layouts/MainLayout";
import { snippets as initialSnippets  } from "../data/snippets";
import SnippetCard from "../components/snippets/SnippetCard";
import { useState } from "react";

const HomePage = () => {

  const [snippets,setSnippets] = useState(initialSnippets);

  return (
    <MainLayout>
      <div className="grid gap-4">
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.id} snippet={snippet} />
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
