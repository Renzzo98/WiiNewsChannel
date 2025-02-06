# Wii News Channel

A modern recreation of the iconic Wii News Channel interface using Angular 17.

## Features

- Authentic Wii News Channel UI/UX
- Real-time news updates via NewsAPI
- Category-based news browsing
- Responsive design that maintains the Wii aesthetic
- Time and last updated indicators
- Original Wii sound effects and music
- Smooth page transitions with fade effects
- Interactive world map animation

## Development

### Prerequisites
- Node.js 20+
- Angular CLI 17+
- A NewsAPI.org API key

### Setup
1. Clone the repository
```bash
git clone https://github.com/yourusername/wii-news-channel.git
cd wii-news-channel
```

2. Install dependencies
```bash
npm install
```

3. Add your NewsAPI key
```typescript
// src/app/services/news.service.ts
private apiKey = 'YOUR_API_KEY';
```

4. Start the development server
```bash
ng serve
```

### Required Assets
Place the following audio files in `src/assets/audio/`:
- `startup.mp3` - Initial startup sound
- `select-sound.mp3` - Button click sound
- `main-theme.mp3` - Background music for categories

### Building for Production
```bash
ng build --configuration production
```

## Deployment

The project is configured for Firebase Hosting deployment:

1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

2. Login to Firebase
```bash
firebase login
```

3. Initialize Firebase project
```bash
firebase init hosting
```

4. Deploy
```bash
npm run deploy
```

## Technologies Used

- Angular 17
- TypeScript
- SCSS
- Firebase Hosting
- NewsAPI
- Angular Animations

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
