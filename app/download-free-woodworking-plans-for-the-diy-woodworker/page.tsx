import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Download Free Woodworking Plans for the DIY Woodworker',
  description: 'Download free woodworking plans for the DIY woodworker.',
  alternates: { canonical: '/download-free-woodworking-plans-for-the-diy-woodworker' },
}

export default function Page() {
  return (
    <>
      <Header />

      <main style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <section className="download-plans" aria-label="Page content">
          <div className="container">
            <div
              className="download-plans__inner"
              style={{ maxWidth: '780px' }}
            >
              <h1 className="section-title">
                Download Free Woodworking Plans for the DIY Woodworker
              </h1>

              <hr className="accent-line" />

              <p className="download-plans__lead">
                If you’ve ever stared at a stack of lumber and wondered what to
                build next, free woodworking plans can be the shortcut from idea
                to finished project.
              </p>

              <Image
                src="/images/download-articles/image1.jpg"
                alt="DIY woodworker using downloadable woodworking plans"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <h2>Why Download Free Woodworking Plans?</h2>

              <p>
                Using a proven plan helps eliminate guesswork and helps you build
                faster with better results.
              </p>

              <ul>
                <li>Save money compared to premium plans</li>
                <li>Learn from experienced woodworkers</li>
                <li>Avoid costly mistakes</li>
                <li>Build faster with organized cut lists</li>
                <li>Practice new joinery methods safely</li>
              </ul>

              <Image
                src="/images/download-articles/image12.jpg"
                alt="Printable woodworking plans closeup"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <h2>Popular Free Woodworking Plans DIYers Love</h2>

              <h3>1. Workbenches</h3>

              <p>
                A workbench is often the first serious build for new woodworkers.
              </p>

              <Image
                src="/images/download-articles/image7.jpg"
                alt="DIY wooden workbench project"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <ul>
                <li>2x4 construction</li>
                <li>Plywood tops</li>
                <li>Lower storage shelves</li>
                <li>Optional vise placement</li>
              </ul>

              <h3>2. Coffee Tables</h3>

              <p>
                Coffee tables are one of the most downloaded beginner woodworking
                plans.
              </p>

              <Image
                src="/images/download-articles/image8.jpg"
                alt="Handmade coffee table woodworking project"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <h3>3. Shelves and Storage Projects</h3>

              <p>
                Floating shelves, wall organizers, and storage boxes are popular
                because they use minimal materials.
              </p>

              <Image
                src="/images/download-articles/image10.jpg"
                alt="Wood shelf storage project"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <h3>4. Adirondack Chairs</h3>

              <p>
                Outdoor furniture remains a high-demand woodworking category.
              </p>

              <Image
                src="/images/download-articles/image9.jpg"
                alt="Outdoor Adirondack chair build"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <h2>What to Look for in Good Woodworking Plans</h2>

              <ul>
                <li>Complete cut list</li>
                <li>Measured drawings</li>
                <li>Material list</li>
                <li>Step-by-step instructions</li>
                <li>Tool requirements</li>
              </ul>

              <Image
                src="/images/download-articles/image19.jpg"
                alt="Wood joinery closeup"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <h2>Where to Find Free Woodworking Plans</h2>

              <ul>
                <li>Woodworking publishers</li>
                <li>Tool manufacturers</li>
                <li>DIY builder sites</li>
              </ul>

              <Image
                src="/images/download-articles/image20.jpg"
                alt="Clamps and woodworking assembly"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <h2>Beginner Projects Worth Starting With</h2>

              <ol>
                <li>Small wooden storage box</li>
                <li>Simple wall shelf</li>
                <li>Basic workbench</li>
                <li>Coffee table</li>
                <li>Shoe rack</li>
                <li>Outdoor planter box</li>
              </ol>

              <Image
                src="/images/download-articles/image21.jpg"
                alt="Wood sanding process"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <h2>Can You Make Money Using Free Woodworking Plans?</h2>

              <p>
                Many DIYers use free plans to build products they later sell.
              </p>

              <Image
                src="/images/download-articles/image22.jpg"
                alt="Finished handmade wood furniture"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <h2>Final Thoughts</h2>

              <p>
                Free woodworking plans are one of the best ways to improve your
                skills without reinventing every project from scratch.
              </p>

              <Image
                src="/images/download-articles/image23.jpg"
                alt="Rustic woodworking workshop scene"
                width={1200}
                height={800}
                style={{ width:'100%', height:'auto', borderRadius:'12px', margin:'2rem 0' }}
              />

              <a
                className="btn btn--primary"
                href="https://www.bestofwoodprojects.com/#free-plans"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Free Wood Working Plans
              </a>


      
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

