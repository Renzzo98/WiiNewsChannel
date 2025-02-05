# Wii News Channel Recreation

A faithful recreation of the Nintendo Wii News Channel interface using Angular. This project aims to replicate the unique aesthetic and user experience of the original Wii News Channel.

## Features

### Visual Design
- Authentic Wii News Channel styling and layout
- CRT TV-style splash screen with glowing effects
- Responsive design that scales from mobile to desktop
- Custom gradient backgrounds matching original Wii aesthetics
- Interactive world map with zoom and echo animations

### UI Components
- Custom-styled buttons with:
  - Wii-specific gradients and shadows
  - Responsive padding and sizing
  - Interactive hover and click states
- Responsive typography using modern CSS techniques
- Smooth transitions and animations

### Technical Features
- Angular 17 with standalone components
- CSS animations and transitions
- Responsive design using clamp() and viewport units
- Audio playback integration
- Server-side rendering support

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
ng serve
```

Navigate to `http://localhost:4200/` to view the application.

## Project Structure

```
src/
├── app/
│   ├── screens/           # Main screen components
│   │   └── home/         # Home screen with world map
│   └── shared/           # Shared components and services
│       └── services/     # Common services (audio, etc.)
├── assets/
│   ├── images/          # Image assets
│   └── audio/          # Audio files
└── styles/
    ├── _variables.scss  # Global SCSS variables
    └── styles.scss      # Global styles
```

## Implementation Details

### Responsive Design
- Uses CSS clamp() for fluid typography
- Viewport-based units for scaling
- Mobile-first approach
- Maintains Wii aesthetic across devices

### Animations
- Map zoom effect with echo
- Smooth transitions between states
- CSS keyframe animations
- Angular animation integration

### Audio Integration
- Browser-compatible audio playback
- Server-side rendering support
- User interaction handling

## Contributing

Feel free to contribute to this project by:
1. Reporting bugs
2. Suggesting enhancements
3. Creating pull requests

## License

This project is for educational purposes only. All Wii-related trademarks belong to Nintendo.
