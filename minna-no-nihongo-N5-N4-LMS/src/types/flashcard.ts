export interface FlashcardItem {
  id: string;
  lesson: number;
  term: string;
  meaning: string;
  reading?: string;
  example_ja?: string;
  example_vi?: string;
}

export interface DeckConfig {
  lesson: number;
  title: string;
  items: FlashcardItem[];
}