# GitHub Profile Enhancer 🚀

A Chrome extension that transforms GitHub profiles with enhanced visuals, detailed statistics, and customizable layouts.


## Features ✨

- **Visual Overhaul**
  - Modern gradient backgrounds
  - Improved spacing and shadows
  - Enhanced contribution graph
  - Custom Inter font typography

- **Statistics Dashboard**
  - Total repository stars 🌟
  - Total forks 🍴
  - Programming languages used 💻
  - Responsive stats grid

- **Customization Options**
  - Toggle between grid/default layouts
  - Persistent layout preferences
  - Custom CSS variables for styling
  - Smooth animations and transitions

## Installation 📦

1. **Clone the repository**
   ```bash
   git clone https://github.com/mdzubayerhossain/GitHub-Profile-Enhancer.git
   ```

2. **Install required font**
   - Download [Inter.woff2](https://fonts.google.com/specimen/Inter)
   - Place in `assets/` directory

3. **Load in Chrome**
   - Navigate to `chrome://extensions`
   - Enable "Developer mode" (top-right toggle)
   - Click "Load unpacked"
   - Select the project folder

## Usage 🖱️

1. Visit [mdzubayerhossain's GitHub profile](https://github.com/mdzubayerhossain)
2. Use the layout switcher (top-right corner):
   - 🟦 Default layout: Traditional vertical layout
   - 🟨 Grid layout: Modern card-based design
3. Explore enhanced statistics below profile bio

## Customization 🎨

Modify `content.css` to adjust styling:

```css
:root {
  --primary-color: #58a6ff;
  --background-gradient: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  --stat-item-bg: rgba(0, 0, 0, 0.2);
}
```

Add new stats in `content.js`:
```javascript
// Example: Add watchers count
const watchers = repos.reduce((acc, repo) => acc + repo.watchers_count, 0);
```

## Troubleshooting ⚠️

**Common Issues**:
- 🔍 Font not loading: Verify font path in manifest.json
- 📊 Stats not showing: Check Chrome console for API errors
- 🖼️ Layout issues: Clear Chrome cache (Ctrl + Shift + R)
- 🔄 Extension not loading: Verify manifest.json syntax

**GitHub API Limits**:
- Unauthenticated: 60 requests/hour
- Authenticated: 5000 requests/hour (add token in code)

## License 📄

MIT License - see [LICENSE](LICENSE) for details

## Acknowledgments 🙏

- GitHub API for repository data
- Google Fonts for Inter typeface
- Chrome Extension documentation
