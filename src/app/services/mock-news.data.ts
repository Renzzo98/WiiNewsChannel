import { NewsResponse } from '../models/news.model';

export const MOCK_NEWS: NewsResponse = {
  "business": [
    {
      uuid: "1",
      title: "Tesla Reports Record Earnings",
      description: "Electric car maker exceeds market expectations",
      keywords: "tesla,earnings,stocks",
      snippet: "Tesla's Q4 earnings show remarkable growth...",
      url: "https://example.com/tesla",
      image_url: "https://picsum.photos/800/400",
      language: "en",
      published_at: new Date().toISOString(),
      source: "mock-news",
      categories: ["business", "technology"],
      locale: "us"
    },
    {
      uuid: "2",
      title: "Apple Announces New iPhone",
      description: "Latest iPhone features breakthrough technology",
      keywords: "apple,iphone,tech",
      snippet: "Apple's newest iPhone pushes boundaries...",
      url: "https://example.com/apple",
      image_url: "https://picsum.photos/800/400",
      language: "en",
      published_at: new Date().toISOString(),
      source: "mock-news",
      categories: ["business", "technology"],
      locale: "us"
    }
  ],
  "technology": [
    {
      uuid: "3",
      title: "AI Makes Breakthrough in Medicine",
      description: "New AI model predicts disease patterns",
      keywords: "ai,medicine,technology",
      snippet: "Artificial Intelligence is revolutionizing healthcare...",
      url: "https://example.com/ai-medicine",
      image_url: "https://picsum.photos/800/400",
      language: "en",
      published_at: new Date().toISOString(),
      source: "mock-news",
      categories: ["technology", "health"],
      locale: "us"
    }
  ],
  "general": [
    {
      uuid: "4",
      title: "Global Climate Summit Begins",
      description: "World leaders gather to discuss climate change",
      keywords: "climate,summit,global",
      snippet: "The annual climate summit kicks off with ambitious goals...",
      url: "https://example.com/climate-summit",
      image_url: "https://picsum.photos/800/400",
      language: "en",
      published_at: new Date().toISOString(),
      source: "mock-news",
      categories: ["general", "science"],
      locale: "us"
    }
  ]
}; 