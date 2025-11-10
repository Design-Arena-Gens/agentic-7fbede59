## DS — Data Science Control Tower

DS is an opinionated launchpad for data science teams that need to move from raw telemetry to production-grade intelligence in a single sprint. The experience ships as a deploy-ready [Next.js](https://nextjs.org) app optimised for Vercel, complete with live dashboards, quality observability, and an actionable playbook timeline.

### ✨ Highlights

- Interactive revenue and conversion insight chart powered by `react-chartjs-2`
- Real-time quality signal cards with optimistic trend language
- Cohort performance table focusing on the most recent six months
- Five-day implementation playbook timeline with animated entries
- Rich CTA block outlining value propositions and quick contact path

### 🛠️ Tech Stack

- Next.js App Router (TypeScript)
- Tailwind via `@import "tailwindcss";`
- Chart.js + `react-chartjs-2`
- Lucide iconography
- Framer Motion micro-animations

### 🚀 Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to explore the control tower UI.

### ✅ Production Build

```bash
npm run build
npm run start
```

### 🧪 Testing

This template relies on type-safety and runtime validation via manual inspection. Add unit or integration tests as you expand features.

### 📦 Deploy

The app is Vercel-ready. From the project root run:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-7fbede59
```

After deployment, verify the production endpoint with:

```bash
curl https://agentic-7fbede59.vercel.app
```

### 📄 License

MIT — customize freely for your team.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
