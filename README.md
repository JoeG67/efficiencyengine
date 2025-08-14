# EfficiencyEngine

EfficiencyEngine is a productivity-focused internal dashboard built with React, Next.js, TypeScript, and TailwindCSS. It helps teams visualize and manage tasks and assets efficiently in a single, streamlined interface.

## Features

1. Collapsible sidebar with navigation links

2. Reusable and responsive components

3. Dashboard previews for tasks and assets

4. Fully responsive design for desktop and mobile

5. Modern color theme for clarity and focus

6. State management with Zustand

## Tech Stack

1. Next.js 14 (App Router)

2. React 19

3. TypeScript

4. TailwindCSS 4.1

5. Zustand (state management)

6. Lucide-React (icons)

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/efficiencyengine.git
cd efficiencyengine
```
  
2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

## Project Structure

```bash
efficiencyengine/
├── app/               # Next.js App Router pages
│   └── page.tsx       # Landing page / dashboard
├── components/        # Reusable UI components
│   ├── Header.tsx
│   └── Sidebar.tsx
├── store/             # Zustand store for tasks and assets
│   └── index.ts
├── styles/            # Global CSS & Tailwind imports
│   └── globals.css
├── public/            # Static assets
├── package.json
└── README.md
```

## Usage

1. Toggle the sidebar using the button in the header

2. Add tasks and assets in the store (currently via Zustand in store/index.ts)

3. Preview the first few items of tasks and assets on the landing page


## Contributing

None for now 

## License

[MIT License](https://opensource.org/licenses/MIT)
