'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { desktopApps } from '@/lib/appData';

interface CommandSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onAppSelect: (appName: string) => void;
}

const CommandSearch: React.FC<CommandSearchProps> = ({ isOpen, onClose, onAppSelect }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredApps = desktopApps.filter(app =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg"
          >
            <div className="mx-4">
              <div className="bg-gray-800/80 backdrop-blur-xl rounded-lg shadow-lg border border-white/10">
                <div className="flex items-center p-4 border-b border-white/10">
                  <Search className="w-5 h-5 text-white/50 mr-3" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search apps..."
                    className="bg-transparent text-white w-full focus:outline-none placeholder-white/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') onClose();
                      if (e.key === 'Enter' && filteredApps.length > 0) {
                        onAppSelect(filteredApps[0].name);
                        onClose();
                      }
                    }}
                  />
                </div>
                {searchQuery && (
                  <div className="max-h-96 overflow-y-auto p-2">
                    {filteredApps.map((app) => (
                      <div
                        key={app.name}
                        className="flex items-center p-3 rounded-md hover:bg-white/10 cursor-pointer"
                        onClick={() => {
                          onAppSelect(app.name);
                          onClose();
                        }}
                      >
                        <img src={app.iconUrl} alt={app.name} className="w-6 h-6 mr-3" />
                        <span className="text-white">{app.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandSearch;