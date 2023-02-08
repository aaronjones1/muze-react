const Header = () => {
  return (
    <div className='flex flex-row items-center h-20 w-screen dark:bg-zinc-900 dark:text-zinc-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-700 pl-10 pr-16 py-10 cursor-default shadow-2xl shadow-zinc-900'>
      <p className='font-black text-2xl pointer-events-none'>Muze</p>
      <input className='ml-10 p-4 h-10 w-full rounded-full shadow-inner bg-zinc-700 text-zinc-50' />
      <a
        className='ml-10 h-10 p-4 rounded-full bg-zinc-700 hover:bg-zinc-600 shadow-lg active:shadow-sm shadow-zinc-900 transition-shadow text-zinc-50 flex items-center justify-center'
        href='add-media'
      >
        Add
      </a>
    </div>
  );
};

export default Header;
