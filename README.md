# Brand Palette Studio

## TLDR

Explore brand palettes, save favourites and read accompanying stories from tech history.<br>
For designers and founders looking for concrete visual references.<br>
This code evolved from Vibe Generator; the older instructions below retain that earlier context.

## The problem and approach

- What the code does: `lib/brands.ts` holds 27 brands (OpenAI, Stripe, Linear, Notion and more), favourites persist in localStorage, and `BookPage` renders 12 stories from `lib/stories.ts`.

## Review and pick up the work

[Agent guide](AGENTS.md)

Start with the linked source, setup and evidence. Recorded demos and sample data keep their original scope; use the repository instructions for a fresh run.

<details>
<summary>Earlier Vibe Generator instructions, retained as history</summary>

A beautiful web app that creates personalized aesthetic mood boards based on your current energy. Pick your vibe, get a gorgeous color palette with an inspiring quote, and save or share your favorites!

## ✨ Features

- 🎨 **8 Unique Vibes**: Choose from Cozy, Energetic, Dreamy, Focused, Melancholic, Euphoric, Cosmic, and Midnight
- 🎭 **Dynamic Color Palettes**: Each vibe has multiple curated color palettes with beautiful gradients
- 💬 **Inspiring Quotes**: Carefully selected quotes that match each vibe's energy
- 🔄 **Shuffle**: Get new combinations instantly
- 💾 **Save Favorites**: Keep up to 20 of your favorite vibe cards
- 📥 **Download**: Export your vibe card as a high-quality PNG image
- 📱 **Fully Responsive**: Beautiful on desktop, tablet, and mobile
- ✨ **Smooth Animations**: Powered by Framer Motion for delightful interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20.0+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vibe-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[html-to-image](https://github.com/bubkoo/html-to-image)** - Export cards as images

## 📦 Deployment

This app is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click!

Or deploy via CLI:
```bash
npm install -g vercel
vercel
```

## 🎨 Customization

### Adding New Vibes

Edit `/lib/vibes.ts`:

1. Add a new vibe to the `VIBES` array
2. Add color palettes to `COLOR_PALETTES`
3. Add quotes to `QUOTES`

### Styling

- Global styles: `/app/globals.css`
- Component styles: Using Tailwind classes
- Animations: Framer Motion props in components

## 📝 License

This project is open source and available under the MIT License.

## 💖 Acknowledgments

- Inspired by the aesthetic community
- Color palettes curated for maximum vibes
- Quotes from various inspiring minds

---

Made with ❤️ for aesthetic vibes

</details>

## License and data boundaries

This checkout has no root license file establishing general reuse rights. Data, provider responses, media, fonts and other third-party assets may have separate terms. Repository access alone does not grant rights to those materials. 
