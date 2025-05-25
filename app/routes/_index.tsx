import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Astro Builder x Mikoni" },
    { name: "description", content: "Welcome to your new Remix IDE!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Astro Builder x Mikoni (Powered by Remix!)</h1>
      <p>This is the starting point for your Vercel-ready IDE.</p>
    </div>
  );
} 