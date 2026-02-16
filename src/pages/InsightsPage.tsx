import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import FadeIn from '../components/FadeIn'

interface Insight {
  title: string
  category: string
  body: string
  takeaway: string
}

const insights: Insight[] = [
  {
    title: 'Start Before You Feel Ready',
    category: 'Mindset',
    body: 'The biggest barrier to building is waiting for the perfect moment. It never comes. Every project I have built started with uncertainty. The difference between people who build and people who plan to build is that builders accept imperfection as part of the process. You learn more from a messy first step than from a year of preparation.',
    takeaway: 'Action creates clarity. Planning without execution is just procrastination in disguise.',
  },
  {
    title: 'Systems Beat Motivation',
    category: 'Strategy',
    body: 'Motivation fades. It is an unreliable fuel source. What remains after the initial excitement wears off are your systems — the routines, tools, and structures you put in place to keep moving forward. I have found that the most productive periods were never about feeling inspired. They were about having a system that worked regardless of how I felt.',
    takeaway: 'Design your environment for consistency. The system carries you when motivation cannot.',
  },
  {
    title: 'Failure Is Data, Not Identity',
    category: 'Lessons Learned',
    body: 'Early on, I took failure personally. A failed project felt like a personal indictment. Over time, I learned to separate outcome from identity. A venture that does not work is not a statement about your worth — it is information about what the market, timing, or execution needed. The faster you can process failure as data, the faster you can iterate.',
    takeaway: 'Detach your ego from your experiments. Let results inform you, not define you.',
  },
  {
    title: 'Long-Term Thinking Is a Competitive Advantage',
    category: 'Strategy',
    body: 'Most people operate on a timeline of weeks or months. If you can genuinely think in years and decades, you immediately differentiate yourself. Long-term thinking allows you to make investments that seem irrational in the short term but compound massively over time. It is the single most underrated business strategy.',
    takeaway: 'Extend your time horizon. The willingness to wait is a form of edge.',
  },
  {
    title: 'Build in Public, But Protect Your Energy',
    category: 'Mindset',
    body: 'Sharing your process publicly accelerates learning and builds trust. But it can also drain you if you are not careful. I have learned to share selectively — to document insights without turning every moment into content. The goal is transparency, not performance.',
    takeaway: 'Be open about your journey, but do not let the audience dictate your pace or direction.',
  },
  {
    title: 'Simplicity Is the Ultimate Strategy',
    category: 'Building',
    body: 'Early builders tend to overcomplicate things — too many features, too many goals, too many initiatives at once. The most effective approach I have found is radical simplicity. Do fewer things, but do them with depth and care. A simple system that works will always outperform a complex system that confuses.',
    takeaway: 'Complexity is not sophistication. Strip away everything that does not serve the core mission.',
  },
  {
    title: 'Your Network Compounds Like Interest',
    category: 'Growth',
    body: 'The relationships you build early — especially the authentic ones — create opportunities you cannot predict. I have seen doors open years after an initial conversation, simply because the relationship was real. Treat your network like a long-term investment, not a transaction.',
    takeaway: 'Invest in genuine relationships without expectation. The returns are exponential and delayed.',
  },
  {
    title: 'Learn to Say No',
    category: 'Lessons Learned',
    body: 'Every yes is a no to something else. One of the hardest lessons in building has been learning when to decline. Not every opportunity is the right opportunity. Not every idea deserves your energy right now. Saying no is how you protect your ability to say a meaningful yes.',
    takeaway: 'Strategic refusal is a form of discipline. Guard your time and attention fiercely.',
  },
  {
    title: 'Document Everything',
    category: 'Building',
    body: 'The insights you gain from building are perishable if you do not capture them. I have made it a practice to write down what I learn — not for an audience, but for my future self. These notes become the foundation for frameworks, decisions, and eventually, the knowledge you can share with others.',
    takeaway: 'Your future self will thank you for the notes you take today. Build a knowledge system that grows with you.',
  },
]

const categories = ['All', ...new Set(insights.map((i) => i.category))]

const quickTips = [
  'Start with the smallest possible version of your idea.',
  'Revenue validates faster than feedback.',
  'Read widely outside your industry.',
  'Your first version will be embarrassing. Ship it anyway.',
  'Energy management matters more than time management.',
  'Ask "what would this look like if it were easy?"',
  'Write your goals down. Review them monthly.',
  'The best partnerships are built on shared values, not just shared interests.',
  'Automate what drains you. Protect what energizes you.',
  'Consistency beats intensity every single time.',
]

const resources = [
  { title: 'The Almanack of Naval Ravikant', type: 'Book', note: 'On wealth, happiness, and building with leverage.' },
  { title: 'Thinking in Systems by Donella Meadows', type: 'Book', note: 'A foundation for understanding how complex systems work.' },
  { title: 'The Psychology of Money by Morgan Housel', type: 'Book', note: 'On patience, compounding, and long-term thinking.' },
  { title: 'Show Your Work by Austin Kleon', type: 'Book', note: 'On building in public and sharing your creative process.' },
  { title: 'Paul Graham\'s Essays', type: 'Online', note: 'Timeless writing on startups, ideas, and independent thinking.' },
  { title: 'Farnam Street Blog', type: 'Online', note: 'Mental models, decision-making, and clear thinking.' },
]

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? insights
      : insights.filter((i) => i.category === activeCategory)

  return (
    <>
      <PageHeader
        label="Insights"
        title="Lessons from building."
        subtitle="Honest reflections, practical wisdom, and hard-won lessons from the journey of exploring possibilities and creating meaningful work."
      />

      {/* Category Filter */}
      <section className="pb-8">
        <div className="page-container">
          <FadeIn>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'border-stone-400 text-stone-100 bg-stone-800/30'
                      : 'border-stone-800 text-stone-500 hover:border-stone-600 hover:text-stone-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Insights List */}
      <section className="section-spacing pt-8">
        <div className="page-container">
          <div className="space-y-12">
            {filtered.map((insight, i) => (
              <FadeIn key={insight.title} delay={0.05 * i}>
                <article className="border-l-2 border-stone-800 pl-8 hover:border-accent/50 transition-colors duration-500">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans mb-3">
                    {insight.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif text-stone-200 mb-4">
                    {insight.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed mb-4">
                    {insight.body}
                  </p>
                  <div className="bg-stone-900/50 border border-stone-800/40 px-5 py-4">
                    <p className="text-sm text-stone-300">
                      <span className="text-accent font-mono text-xs mr-2">Takeaway:</span>
                      {insight.takeaway}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="section-spacing bg-stone-900/30">
        <div className="page-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-4">
              Quick Tips
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-serif mb-12">
              Short reminders for the journey.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickTips.map((tip, i) => (
              <FadeIn key={i} delay={0.03 * i}>
                <div className="flex items-start gap-4 py-4 px-5 border border-stone-800/40 hover:border-stone-700/60 transition-colors duration-300">
                  <span className="text-accent font-mono text-xs mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-stone-300 text-sm leading-relaxed">{tip}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Resources */}
      <section className="section-spacing">
        <div className="page-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-4">
              Recommended Reading
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-serif mb-12">
              Resources that shaped our thinking.
            </h2>
          </FadeIn>
          <div className="space-y-0">
            {resources.map((resource, i) => (
              <FadeIn key={resource.title} delay={0.05 * i}>
                <div className="py-5 border-b border-stone-800/50 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <div className="flex-1">
                    <h3 className="text-stone-200 font-serif">{resource.title}</h3>
                    <p className="text-sm text-stone-500 mt-1">{resource.note}</p>
                  </div>
                  <span className="text-xs font-mono text-stone-600 uppercase shrink-0">
                    {resource.type}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
