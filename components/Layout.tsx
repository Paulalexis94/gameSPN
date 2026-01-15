import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-300 font-serif selection:bg-red-900 selection:text-white">
      {/* Top Bar - The Dashboard */}
      <header className="border-b-4 border-double border-stone-800 bg-black/90 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
                {/* Pentagram Symbol CSS */}
                <div className="w-10 h-10 rounded-full border-2 border-stone-600 flex items-center justify-center relative overflow-hidden group hover:border-blood transition-colors cursor-pointer">
                    <span className="text-2xl text-stone-500 group-hover:text-blood">✡</span>
                </div>
                <div>
                    <h1 className="font-mono text-xl tracking-tighter text-stone-100 uppercase">
                        L'Héritage Winchester
                    </h1>
                    <p className="text-xs text-stone-500 font-mono tracking-widest uppercase">
                        {title || 'Lieu Inconnu'}
                    </p>
                </div>
            </div>
            
            <div className="hidden md:flex gap-4 text-xs font-mono text-stone-600">
                <span>V0.1.0</span>
                <span className="text-blood">● REC</span>
            </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative min-h-[calc(100vh-80px)] bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.85)), url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
         {/* Decorative borders/corners could go here */}
         {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-black py-4 text-center">
          <p className="text-stone-600 font-mono text-xs">
              Sauver des gens, chasser des choses. L'entreprise familiale.
          </p>
      </footer>
    </div>
  );
};