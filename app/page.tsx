import { ArrowRight, Bookmark, CheckCircle, Globe2, MessageCircle, Shield, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { SplineSceneBasic } from '@/components/ui/demo'

const features = [
  {
    title: 'Data clarity',
    description: 'Understand your product and customers with intuitive analytics built for modern teams.',
    icon: Globe2,
  },
  {
    title: 'Smart automation',
    description: 'Automate manual workflows with elegant tools that keep teams aligned and moving faster.',
    icon: Shield,
  },
  {
    title: 'Collaborative insights',
    description: 'Share actionable findings effortlessly with stakeholders across your organization.',
    icon: Users,
  },
]

const testimonials = [
  {
    quote: 'Clarifi Labs helped our team turn chaos into clarity. The experience was fast and beautifully designed.',
    name: 'Maya Chen',
    role: 'Head of Product',
  },
  {
    quote: 'The platform simplified our reporting workflow and made collaboration effortless.',
    name: 'Noah Patel',
    role: 'Operations Lead',
  },
  {
    quote: 'The UX is clean, responsive, and extremely intuitive — a pleasure to use every day.',
    name: 'Avery Kim',
    role: 'Design Director',
  },
]

const pricing = [
  {
    name: 'Basic',
    price: '$29',
    description: 'Perfect for early teams starting to centralize insights.',
    features: ['Analytics dashboard', 'Team collaboration', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'Best for growing companies that need deeper visibility.',
    features: ['Advanced reporting', 'Workflows', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored for large organizations and custom data needs.',
    features: ['Dedicated success manager', 'SLA & security', 'Custom integrations'],
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <a href="#top" className="text-xl font-semibold text-white">
            Clarifi Labs
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            Get Started
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-4 pb-8 pt-10 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-200">
              Clarity-first digital experiences
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Build unforgettable product experiences with clarity, speed, and trust.
            </h1>
            <p className="max-w-2xl text-zinc-300 sm:text-lg">
              Clarifi Labs empowers teams with a clean, modern analytics platform designed for fast decisions and delightful workflow.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
              >
                Try Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-400"
              >
                Learn More
              </a>
            </div>
          </div>

          <Card className="relative overflow-hidden bg-slate-950/90 p-8 shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_40%)]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950 p-8">
              <div className="mb-6 inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-sm text-brand-100">
                Live product demo
              </div>
              <div className="h-[320px] w-full rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-soft">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
                  <div className="space-y-4">
                    <span className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-400">
                      Customer insights
                    </span>
                    <h2 className="text-2xl font-semibold text-white">Product metrics on demand</h2>
                    <p className="text-sm text-zinc-400">
                      Fast insights and elegant visualizations for every stakeholder.
                    </p>
                  </div>
                  <div className="grid gap-3 text-sm text-zinc-300">
                    <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3">
                      <span>Realtime dashboards</span>
                      <span className="text-brand-300">Live</span>
                    </div>
                    <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3">
                      <span>Team notifications</span>
                      <span className="text-zinc-400">Sync</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              About Clarifi Labs
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Designed to make every decision feel simpler.
            </h2>
            <p className="mt-5 max-w-2xl text-zinc-300">
              Clarifi Labs is a fictional design system and analytics experience built for modern teams that care about clarity, speed, and thoughtful interactions.
            </p>
          </div>
          <Card className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft">
            <div className="space-y-4">
              <p className="text-zinc-300">A polished, responsive single-page hero demo that highlights product storytelling and focused information hierarchy.</p>
              <div className="rounded-3xl bg-zinc-950/80 p-4 text-sm text-zinc-400">
                <strong>Design note:</strong> use soft shadows and subtle gradients to keep the interface approachable and calm.
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Features</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything your team needs to move faster.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="space-y-4 border border-white/10 bg-slate-950/90 p-6 shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-200">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-6 text-zinc-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[0.24em] text-brand-300">Showcase</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">A modern immersive experience.</h2>
            <p className="max-w-xl text-zinc-300">
              The demo below shows how a striking product card can be paired with a performant 3D experience while preserving strong content hierarchy.
            </p>
          </div>
          <SplineSceneBasic />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.28em] text-brand-300">Testimonials</span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Loved by people who depend on clarity.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="space-y-4 border border-white/10 bg-slate-950/90 p-6 shadow-soft">
              <p className="text-zinc-300">“{item.quote}”</p>
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-zinc-400">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.28em] text-brand-300">Pricing</span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Plans for every stage of growth.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <Card key={plan.name} className="space-y-6 border border-white/10 bg-slate-950/90 p-6 shadow-soft">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-300">{plan.name}</p>
                <p className="text-4xl font-semibold text-white">{plan.price}</p>
              </div>
              <p className="text-sm text-zinc-400">{plan.description}</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
                Choose Plan
              </button>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.24em] text-brand-300">Contact</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Start your next project with clarity.</h2>
            <p className="max-w-xl text-zinc-300">We’ll respond within 24 hours and help you get a clean, modern product experience in motion.</p>
          </div>

          <Card className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft">
            <form className="space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-zinc-300">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-zinc-300">Email</span>
                <input
                  type="email"
                  placeholder="hello@clarifi.com"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-zinc-300">Message</span>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand-400"
                />
              </label>
              <button className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
                Submit message
              </button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/90 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">Clarifi Labs</p>
            <p className="mt-2 max-w-md text-sm text-zinc-400">Small team, clear vision, better product decisions.</p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex gap-4">
              <a href="#" className="transition hover:text-white">Privacy Policy</a>
              <a href="#" className="transition hover:text-white">Terms of Service</a>
              <a href="#" className="transition hover:text-white">Sitemap</a>
            </div>
            <div className="flex items-center gap-3 text-white">
              <button className="rounded-full bg-white/5 px-3 py-2 transition hover:bg-white/10">Twitter</button>
              <button className="rounded-full bg-white/5 px-3 py-2 transition hover:bg-white/10">LinkedIn</button>
              <button className="rounded-full bg-white/5 px-3 py-2 transition hover:bg-white/10">GitHub</button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
          © 2026 Clarifi Labs. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
