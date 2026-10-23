import React, { useState } from 'react';
import { AdminDeckCompiler } from '../features/admin/AdminDeckCompiler';
import { StudentFlashcardPractice } from '../features/vocabulary/StudentFlashcardPractice';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'student' | 'admin'>('student');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="font-bold text-lg text-gray-900">Minna LMS</span>
          </div>

          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setCurrentTab('student')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                currentTab === 'student' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Giao diện học sinh (Flashcard)
            </button>
            <button
              onClick={() => setCurrentTab('admin')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                currentTab === 'admin' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Admin Compiler
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        {currentTab === 'student' ? <StudentFlashcardPractice /> : <AdminDeckCompiler />}
      </main>
    </div>
  );
};

export default App;