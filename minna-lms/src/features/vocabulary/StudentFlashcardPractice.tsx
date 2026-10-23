import React, { useState, useEffect } from 'react';
import { getDeckFromStorage } from './deckStorageService';
import { FlashcardItem } from '../../types/flashcard';

export const StudentFlashcardPractice: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    const loadedCards = getDeckFromStorage(selectedLesson);
    setCards(loadedCards);
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [selectedLesson]);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Tiêu đề & Chọn bài */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border">
        <h1 className="text-xl font-bold text-gray-800">Luyện Flashcard Minna no Nihongo</h1>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-600">Chọn đề:</label>
          <select
            value={selectedLesson}
            onChange={(e) => setSelectedLesson(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-2 bg-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
          >
            {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Bài {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Vùng Flashcard */}
      {cards.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300 p-8">
          <p className="text-gray-500">Bài {selectedLesson} chưa có dữ liệu đề học.</p>
          <p className="text-sm text-gray-400 mt-1">Admin hãy vào mục Compiler để dán source code cho bài này nhé!</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-500 font-medium">
            <span>Tiến độ bài {selectedLesson}</span>
            <span>{currentIndex + 1} / {cards.length} thẻ</span>
          </div>

          <div
            onClick={() => setShowAnswer(!showAnswer)}
            className="w-full min-h-[260px] bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-md transition-shadow select-none"
          >
            <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase mb-4">
              {showAnswer ? 'Mặt sau (Nghĩa)' : 'Mặt trước (Từ vựng)'}
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
              {showAnswer ? currentCard.meaning : currentCard.term}
            </div>
            <p className="text-xs text-gray-400 mt-6">Nhấp vào thẻ để lật đáp án</p>
          </div>

          {/* Điều khiển lật bài */}
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 text-gray-700 font-medium rounded-lg text-sm"
            >
              ← Thẻ trước
            </button>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-6 py-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium rounded-lg text-sm"
            >
              {showAnswer ? 'Ẩn đáp án' : 'Hiện đáp án'}
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
              className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 text-gray-700 font-medium rounded-lg text-sm"
            >
              Thẻ kế tiếp →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};