import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const beliefs = [
  'Every creator deserves the tools and support to turn ideas into reality.',
  'Building is a form of learning — and we learn alongside you.',
  'Long-term thinking beats short-term hype.',
  'Curiosity drives innovation across every industry.',
  'Systems create freedom for creators and entrepreneurs.',
  'Progress happens through iteration, not perfection.',
  'Legacy is built through consistent, meaningful work.',
  'Culture, creativity, and business belong together.',
]

const pillars = [
  {
    title: 'Build',
    description: 'We help you build businesses, brands, stores, portfolios, and content — whatever it takes to bring your vision to life.',
  },
  {
    title: 'Grow',
    description: 'From strategy and structure to resources and tools, we provide what our brands and partners need to scale with intention.',
  },
  {
    title: 'Create',
    description: 'We back creators, artists, musicians, designers, and entrepreneurs who want to turn their ideas into culture-defining work.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950 to-stone-900 opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.03] blur-[120px]" />

        <div className="page-container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-stone-500 font-sans font-medium mb-8"
          >
            Wilson Collective Group
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-stone-100 text-balance max-w-4xl mx-auto"
          >
            We help you build your dream.{' '}
            <span className="text-stone-400">For real.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 text-lg md:text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto"
          >
            Wilson Collective Group is the parent company behind a portfolio of creative
            brands and ventures. We build businesses, brands, stores, content, and platforms —
            and we help others do the same across fashion, music, art, and digital culture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/about"
              className="px-8 py-3 bg-stone-100 text-stone-950 text-sm font-medium tracking-wide rounded-none hover:bg-accent hover:text-stone-950 transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/apply"
              className="px-8 py-3 border border-stone-700 text-stone-300 text-sm font-medium tracking-wide rounded-none hover:border-stone-400 hover:text-stone-100 transition-all duration-300"
            >
              Work With Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-stone-600 to-transparent"
          />
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="section-spacing bg-stone-900/30">
        <div className="page-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-8">
              Our Mission
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-200 leading-snug max-w-3xl">
              To unify creative projects under one ecosystem, support entrepreneurship and innovation, and become a powerhouse for creators who want to turn ideas into culture, businesses, and movements.
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-stone-500 leading-relaxed max-w-2xl">
              Wilson Collective Group LLC is the parent company and umbrella organization
              for a growing portfolio of creative brands — including District88, Velvair Studios,
              Canjustalllove, Divergent Studios, and more. We provide structure, strategy, and
              resources to help each brand grow while exploring new ventures across fashion,
              music, art, and digital culture.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section-spacing">
        <div className="page-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-4">
              What We Believe
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
              Core convictions that guide everything.
            </h2>
          </FadeIn>
          <div className="space-y-0">
            {beliefs.map((belief, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div className="py-5 border-b border-stone-800/60 group">
                  <p className="text-stone-300 group-hover:text-stone-100 transition-colors duration-300 text-lg">
                    <span className="text-stone-600 font-mono text-sm mr-4">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {belief}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars: Explore, Build, Share */}
      <section className="section-spacing bg-stone-900/30">
        <div className="page-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-4">
              What We Do
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
              We help make your dream come true.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={0.1 * i}>
                <div className="group">
                  <div className="w-10 h-px bg-accent mb-6 group-hover:w-16 transition-all duration-500" />
                  <h3 className="text-xl font-serif mb-4">{pillar.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{pillar.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-8">
                From the Founder
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl font-serif text-stone-200 leading-relaxed italic">
                "I started Wilson Collective because I saw too many talented people with
                incredible ideas and no one in their corner. We build businesses, brands,
                stores, portfolios, content — whatever it takes. If you have a dream and
                you're willing to put in the work, we're here to help make it real."
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-stone-500">
                — Devin Wilson, Founder
              </p>
              <p className="text-sm text-stone-600 mt-1">
                Raleigh, North Carolina
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-stone-900/30 border-t border-stone-800/50">
        <div className="page-container text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-6">
              An Invitation
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 max-w-2xl mx-auto">
              Ready to build something that matters?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-stone-400 mb-10 max-w-lg mx-auto">
              Whether you need help building a brand, launching a store, creating content,
              or bringing an idea to life — Wilson Collective is here for creators,
              entrepreneurs, artists, and dreamers who are ready to move.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              to="/apply"
              className="inline-block px-10 py-4 bg-stone-100 text-stone-950 text-sm font-medium tracking-wide hover:bg-accent transition-all duration-300"
            >
              Apply to Collaborate
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
