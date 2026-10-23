import React, { useState } from 'react';
import { compileAdminSourceCode, saveDeckToStorage } from '../vocabulary/deckStorageService';
import { FlashcardItem } from '../../types/flashcard';

export const AdminDeckCompiler: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [sourceCode, setSourceCode] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [previewCards, setPreviewCards] = useState<FlashcardItem[]>([]);

  const handleCompile = () => {
    setStatusMessage(null);
    try {
      if (!sourceCode.trim()) {
        throw new Error('Vui lòng dán source code JS vào khung trước khi compile.');
      }
      const compiled = compileAdminSourceCode(sourceCode, selectedLesson);
      if (compiled.length === 0) {
        throw new Error('Không tìm thấy từ vựng hợp lệ (mỗi phần tử cần term và meaning).');
      }

      saveDeckToStorage(selectedLesson, compiled);
      setPreviewCards(compiled);
      setStatusMessage({
        type: 'success',
        text: `Đã compile thành công ${compiled.length} từ vựng cho Bài ${selectedLesson}! Học sinh đã có thể luyện tập ngay.`,
      });
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Lỗi không xác định khi biên dịch code.',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Admin - Trình biên dịch đề Flashcard (Bài 1 - 25)</h2>
        <p className="text-sm text-gray-500 mt-1">
          Dán source code JS xuất ra từ Gem vào đây để lưu trữ đề bài ngay lập tức.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <label className="font-semibold text-gray-700">Chọn bài luyện tập:</label>
        <select
          value={selectedLesson}
          onChange={(e) => setSelectedLesson(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-500 outline-none"
        >
          {Array.from({ length: 25 }, (_, i) => i + 1).map((lessonNum) => (
            <option key={lessonNum} value={lessonNum}>
              Bài {lessonNum} (第{lessonNum}課)
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Source code JS từ vựng (Nhận mảng JS hoặc export default [...]):
        </label>
        <textarea
          rows={10}
          value={sourceCode}
          onChange={(e) => setSourceCode(e.target.value)}
          placeholder={`export default [\n  { id: "b1_1", term: "わたし", meaning: "tôi" },\n  { id: "b1_2", term: "あなた", meaning: "bạn" }\n];`}
          className="w-full font-mono text-sm p-4 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleCompile}
          className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm transition-colors"
        >
          Compile 1 Phát & Lưu Đề
        </button>
        <button
          onClick={() => {
            setSourceCode('');
            setPreviewCards([]);
            setStatusMessage(null);
          }}
          className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          Xóa trắng
        </button>
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-lg text-sm ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      {previewCards.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold text-gray-700 mb-3">Xem trước {previewCards.length} thẻ đã nạp:</h3>
          <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-lg divide-y">
            {previewCards.map((c) => (
              <div key={c.id} className="p-2.5 flex justify-between items-center text-sm">
                <span className="font-bold text-gray-900">{c.term}</span>
                <span className="text-gray-600">{c.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};