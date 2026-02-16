import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import FadeIn from '../components/FadeIn'

const philosophies = [
  {
    title: 'Creators First',
    body: 'Everything we build starts with the creator in mind — entrepreneurs, artists, musicians, fashion designers, and innovators who deserve real support turning their ideas into something lasting.',
  },
  {
    title: 'Build, Don\'t Just Plan',
    body: 'We do not wait until everything is perfect. We get in the trenches with you — building brands, launching stores, creating content, and making things happen.',
  },
  {
    title: 'Culture Is the Foundation',
    body: 'Fashion, music, art, and digital culture are not side interests — they are the core of everything we do. We build at the intersection of creativity and business.',
  },
  {
    title: 'Systems Over Hustle',
    body: 'Sustainable growth comes from building real systems — structure, strategy, and tools — not from burning out. We design businesses that can scale with intention.',
  },
  {
    title: 'One Ecosystem, Many Dreams',
    body: 'Every brand under WCG has its own identity, but they all benefit from shared resources, shared knowledge, and a community that lifts everyone up.',
  },
  {
    title: 'Long-Term Vision',
    body: 'We are building something meant to last. Not a quick flip, not a trend chase — a genuine ecosystem that supports creators for years to come.',
  },
]

const whatWeHelp = [
  'Build businesses from the ground up',
  'Launch and grow brands across fashion, music, and culture',
  'Create online stores and e-commerce platforms',
  'Develop personal portfolios and creative identities',
  'Produce content that connects with audiences',
  'Support artists, musicians, and designers in growing their careers',
  'Turn ideas into real, operating ventures',
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="The company behind the brands."
        subtitle="Wilson Collective Group LLC is the parent company and umbrella organization for a growing portfolio of creative brands and businesses — built to help creators, entrepreneurs, and dreamers turn their ideas into reality."
      />

      {/* Origin Story */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Why this exists</h2>
            </FadeIn>
            <div className="space-y-6 text-stone-400 leading-relaxed">
              <FadeIn delay={0.1}>
                <p>
                  Wilson Collective Group was founded by Devin Wilson in Raleigh, North Carolina.
                  It started from a personal drive to create — not from corporate planning or
                  outside funding, but from curiosity, ambition, and a deep belief that creators
                  deserve better support.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p>
                  What began as a series of experiments and creative projects gradually evolved
                  into something bigger: a parent company and ecosystem that houses multiple
                  brands, including District88, Velvair Studios, Canjustalllove, Divergent Studios,
                  and more — each with its own identity, all unified under one vision.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>
                  WCG LLC provides the structure, strategy, and resources that each brand needs
                  to grow. But it goes beyond our own portfolio. We help people build businesses,
                  brands, stores, personal portfolios, content, and creative careers. If you have
                  a dream and the drive to pursue it, Wilson Collective exists to help make it real.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p>
                  This is not just a holding company. It is an active ecosystem — hands-on,
                  supportive, and built by someone who understands what it takes to start from
                  nothing and create something meaningful.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-spacing bg-stone-900/30">
        <div className="page-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-4">
                The Vision
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Looking decades ahead.</h2>
            </FadeIn>
            <div className="space-y-6 text-stone-400 leading-relaxed">
              <FadeIn delay={0.15}>
                <p>
                  The vision for Wilson Collective Group is to become a powerhouse for creators —
                  a recognized ecosystem where entrepreneurs, artists, musicians, fashion
                  designers, and innovators can build, scale, and share their work with the
                  world. Not just our own brands, but anyone with a dream and the will to pursue it.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>
                  The ecosystem already includes District88 (sneaker and streetwear marketplace),
                  Velvair Studios (streetwear), Canjustalllove (lifestyle brand), Divergent Studios
                  (culture-forward fashion), the WCG Dashboard (creator tools platform), and
                  more ventures in development. Each brand has its own identity, but they all
                  share the same backbone.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p>
                  Over time, WCG will continue launching new ventures, supporting emerging
                  creators, and building the tools and platforms that make entrepreneurship
                  accessible to everyone — not just people with traditional business backgrounds.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-spacing">
        <div className="page-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-4">
              Philosophy
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
              Principles we build on.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {philosophies.map((item, i) => (
              <FadeIn key={item.title} delay={0.05 * i}>
                <div>
                  <h3 className="text-lg font-serif text-stone-200 mb-3">{item.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What We Help Build */}
      <section className="section-spacing bg-stone-900/30">
        <div className="page-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-4">
                What We Do
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                What we help you build.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-stone-400 leading-relaxed mb-10">
                Wilson Collective is hands-on. We don't just talk about ideas — we roll
                up our sleeves and help bring them to life. Here's what we do for our
                brands and the people we work with.
              </p>
            </FadeIn>
            <div className="space-y-4">
              {whatWeHelp.map((item, i) => (
                <FadeIn key={i} delay={0.05 * i}>
                  <div className="flex items-start gap-4 py-3 border-b border-stone-800/40">
                    <span className="text-accent mt-0.5">+</span>
                    <p className="text-stone-300">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-8">
                A Note From Devin
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-stone-300 leading-relaxed text-lg font-serif italic">
                <p>
                  "I built Wilson Collective because I know what it feels like to have a
                  million ideas and no one to help you make them real. I've been there —
                  building from nothing, figuring it out as I go, learning everything the
                  hard way.
                </p>
                <p>
                  This company exists to change that for other people. We help build
                  businesses, brands, stores, content, portfolios — whatever you need.
                  Artists, musicians, designers, entrepreneurs — if you have a dream
                  and you're willing to work for it, we want to help you get there.
                </p>
                <p>
                  This is bigger than any single brand. This is about building something
                  that lasts and lifting other people up along the way."
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-stone-500">— Devin Wilson</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-stone-900/30 border-t border-stone-800/50">
        <div className="page-container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Interested in building together?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-stone-400 mb-10 max-w-lg mx-auto">
              Whether you're a creator, entrepreneur, artist, or someone with
              an idea that won't let go — we'd love to hear from you.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="px-10 py-4 bg-stone-100 text-stone-950 text-sm font-medium tracking-wide hover:bg-accent transition-all duration-300"
              >
                Apply to Collaborate
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 border border-stone-700 text-stone-300 text-sm font-medium tracking-wide hover:border-stone-400 hover:text-stone-100 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
