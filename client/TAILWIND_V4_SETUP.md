# Tailwind CSS v4 Setup Guide

## ✅ Configuration

### Using @tailwindcss/vite Plugin (Recommended)

This project uses the `@tailwindcss/vite` plugin which is the recommended way to use Tailwind v4 with Vite.

### Files Structure

1. **vite.config.js** - Includes the Tailwind plugin
```javascript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

2. **src/index.css** - Contains Tailwind directives and theme
```css
@import "tailwindcss";

@theme {
  --color-primary: #667eea;
  --color-primary-dark: #764ba2;
  /* ... more theme variables */
}
```

### Key Points

- ❌ **No `tailwind.config.js` needed** - Theme is defined in CSS using `@theme`
- ❌ **No `postcss.config.js` needed** - Using Vite plugin instead
- ✅ **All configuration in CSS** - Tailwind v4 uses CSS-first configuration

### Custom Utilities

Define custom utilities using `@utility` directive:

```css
@utility bg-gradient-primary {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Usage in Components

```jsx
<div className="bg-gradient-primary text-white p-4 rounded-lg">
  Content
</div>
```

## 🚀 Running the Project

```bash
npm run dev
```

The Tailwind v4 setup will work automatically with the Vite plugin.

## 📚 Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [@tailwindcss/vite Plugin](https://github.com/tailwindlabs/tailwindcss-vite)