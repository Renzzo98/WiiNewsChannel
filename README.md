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
- CRT TV-style scanline effects
- Mock data support for development
- Article detail view with time-since-published
- Cross-page state management

## Development

### Prerequisites
- Node.js 20+
- Angular CLI 17+
- A NewsAPI.org API key (optional - mock data available)

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

### Development Modes

#### Using Mock Data
The application comes with pre-configured mock data for development. No additional setup required.

#### Using Live API
To use the NewsAPI service:
1. Get an API key from newsapi.org
2. Update the key in `src/app/services/news.service.ts`
3. Uncomment the API implementation in the service

### Required Assets
Place the following audio files in `src/assets/audio/`:
- `startup.mp3` - Initial startup sound
- `select-sound.mp3` - Button click sound
- `main-theme.mp3` - Background music for categories

### Project Structure

```
src/app/
├── models/
│   ├── news.model.ts         # Data interfaces and validators
│   └── news.transformers.ts  # Data transformation utilities
├── services/
│   ├── news.service.ts       # News data service
│   ├── mock-news.data.ts     # Mock data for development
│   ├── news-cache.service.ts # Caching service
│   ├── navigation.service.ts # Page transition handling
│   └── audio.service.ts      # Sound management
└── screens/
    ├── home/                 # Home screen with world map
    ├── categories/           # News categories view
    ├── article-list/         # Category articles list
    └── article-details/      # Individual article view
```

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
- NewsAPI (optional)
- Angular Animations
- RxJS for state management

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
