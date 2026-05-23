const Navbar = () => {
  return (
    <div className="border-b border-zinc-800 p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">All Snippets</h1>

      <input
        type="text"
        placeholder="Search snippets..."
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 outline-none w-80"
      />
    </div>
  );
};

export default Navbar;
