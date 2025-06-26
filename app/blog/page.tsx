import type { Metadata } from 'next'
import Link from 'next/link'
import { NewspaperIcon, XMarkIcon } from '@heroicons/react/24/outline'

// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://greatertechhub.co'),
  title: 'Blog - GreaterTechHub | Expert Technology Insights & Trends',
  description: 'Dive into GreaterTechHub’s blog for expert insights on website development, mobile apps, digital marketing, cloud solutions, and more to empower your business.',
  keywords: [
    'GreaterTechHub blog',
    'technology trends 2025',
    'website development services',
    'mobile app development',
    'SEO strategies',
    'cloud computing solutions',
    'CRM ERP systems',
    'custom software development',
    '2D 3D animation',
    'IT solutions',
  ],
  openGraph: {
    title: 'Blog - GreaterTechHub',
    description: 'Explore GreaterTechHub’s insights on technology trends and IT solutions for businesses.',
    url: 'https://greatertechhub.co/blog',
    images: ['/images/og-blog.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - GreaterTechHub',
    description: 'Stay updated with GreaterTechHub’s expert insights on technology and IT solutions.',
    images: ['/images/og-blog.jpg'],
  },
}

// Hardcoded blog posts data (front-end only, no backend)
const blogPosts = [
  {
    id: 1,
    title: 'Top Website Development Trends to Watch in 2025',
    slug: 'website-development-trends-2025',
    excerpt: 'Stay ahead with GreaterTechHub’s guide to 2025 website development trends, including AI-driven design, progressive web apps, and headless CMS solutions.',
    content: `
      <p>Website development is at the forefront of digital transformation, and 2025 is set to introduce groundbreaking trends. At <strong>GreaterTechHub</strong>, we specialize in delivering cutting-edge <strong>website development services</strong> that keep businesses ahead of the curve.</p>
      <h2>AI-Driven Web Design</h2>
      <p>Artificial intelligence is reshaping <strong>website development</strong> by automating design tasks and personalizing user experiences. Our team at GreaterTechHub uses AI tools to create dynamic, user-centric websites that adapt to visitor preferences, boosting engagement and conversions.</p>
      <h2>Progressive Web Apps (PWAs)</h2>
      <p><strong>Progressive web apps</strong> offer app-like experiences with fast loading and offline capabilities. GreaterTechHub builds PWAs that ensure seamless performance across devices, enhancing user retention for businesses.</p>
      <h2>Headless CMS for Flexibility</h2>
      <p>A <strong>headless CMS</strong> decouples content management from presentation, offering unmatched flexibility. GreaterTechHub leverages platforms like Sanity to deliver scalable, content-driven websites tailored to your needs.</p>
      <p>Contact us to explore how our <strong>website development services</strong> can transform your online presence in 2025.</p>
    `,
    image: 'https://picsum.photos/600/400?random=1',
    date: 'June 15, 2025',
    keywords: ['website development services', 'AI-driven web design', 'progressive web apps', 'headless CMS', 'web development trends 2025'],
  },
  {
    id: 2,
    title: 'Why Mobile App Development is Essential for Businesses in 2025',
    slug: 'mobile-app-development-2025',
    excerpt: 'Learn how GreaterTechHub’s mobile app development services drive customer engagement and streamline operations for businesses.',
    content: `
      <p>In 2025, <strong>mobile app development</strong> is a game-changer for businesses aiming to stay competitive. GreaterTechHub’s custom <strong>mobile app development services</strong> empower brands to connect with customers seamlessly.</p>
      <h2>Boosting Customer Engagement</h2>
      <p>Mobile apps offer personalized experiences through push notifications and intuitive interfaces. GreaterTechHub designs apps that enhance <strong>customer engagement</strong>, fostering loyalty and repeat interactions.</p>
      <h2>Streamlining Operations</h2>
      <p>From inventory management to customer support, our apps streamline <strong>business operations</strong>. We create scalable solutions tailored to your industry, ensuring efficiency and growth.</p>
      <h2>Cross-Platform Compatibility</h2>
      <p>Using frameworks like React Native, GreaterTechHub delivers apps that perform flawlessly on iOS and Android, maximizing reach and usability.</p>
      <p>Partner with GreaterTechHub for <strong>mobile app development</strong> that drives results.</p>
    `,
    image: 'https://picsum.photos/600/400?random=2',
    date: 'June 10, 2025',
    keywords: ['mobile app development', 'customer engagement', 'business operations', 'cross-platform apps', 'mobile app trends 2025'],
  },
  {
    id: 3,
    title: 'SEO Strategies for Digital Marketing Success in 2025',
    slug: 'seo-strategies-digital-marketing',
    excerpt: 'Unlock higher rankings with GreaterTechHub’s expert SEO strategies and digital marketing solutions tailored for 2025.',
    content: `
      <p><strong>SEO strategies</strong> are critical for businesses to dominate search engine results in 2025. GreaterTechHub’s <strong>digital marketing services</strong> help you achieve top rankings and drive organic traffic.</p>
      <h2>Keyword Optimization</h2>
      <p>Identifying and integrating high-impact <strong>keywords</strong> is key to SEO success. Our team conducts in-depth research to target terms that attract your ideal audience.</p>
      <h2>Technical SEO Excellence</h2>
      <p>From site speed optimization to mobile-friendliness, GreaterTechHub ensures your website meets Google’s <strong>technical SEO</strong> standards for better indexing.</p>
      <h2>Content Marketing</h2>
      <p>Engaging, keyword-rich content drives traffic and conversions. We craft blogs, videos, and more to position your brand as an industry leader.</p>
      <p>Boost your online presence with GreaterTechHub’s <strong>SEO strategies</strong> today.</p>
    `,
    image: 'https://picsum.photos/600/400?random=3',
    date: 'June 5, 2025',
    keywords: ['SEO strategies', 'digital marketing services', 'keyword optimization', 'technical SEO', 'content marketing 2025'],
  },
  {
    id: 4,
    title: 'How Cloud Solutions and DevOps Transform Businesses',
    slug: 'cloud-solutions-devops',
    excerpt: 'Discover how GreaterTechHub’s cloud solutions and DevOps services enhance scalability and efficiency for businesses.',
    content: `
      <p><strong>Cloud solutions</strong> and <strong>DevOps</strong> are revolutionizing business operations in 2025. GreaterTechHub delivers tailored solutions to ensure scalability and agility.</p>
      <h2>DevOps Automation</h2>
      <p>Automate workflows and enhance collaboration with our <strong>DevOps services</strong>. We streamline CI/CD pipelines for faster, reliable deployments.</p>
      <h2>Scalable Cloud Infrastructure</h2>
      <p>Using platforms like AWS and Azure, GreaterTechHub builds <strong>cloud solutions</strong> that scale with your business, reducing costs and improving performance.</p>
      <h2>Security in the Cloud</h2>
      <p>Our solutions prioritize data security, ensuring your business remains protected in the cloud environment.</p>
      <p>Transform your operations with GreaterTechHub’s <strong>cloud computing solutions</strong>.</p>
    `,
    image: 'https://picsum.photos/600/400?random=4',
    date: 'May 30, 2025',
    keywords: ['cloud solutions', 'DevOps services', 'cloud scalability', 'AWS Azure', 'business automation'],
  },
  {
    id: 5,
    title: 'CRM & ERP Systems: Driving Business Growth in 2025',
    slug: 'crm-erp-business-growth',
    excerpt: 'Learn how GreaterTechHub’s CRM and ERP systems streamline operations and fuel business success.',
    content: `
      <p><strong>CRM and ERP systems</strong> are essential for managing customer relationships and business processes. GreaterTechHub delivers customized solutions to drive growth.</p>
      <h2>Customer Relationship Management</h2>
      <p>Our <strong>CRM systems</strong> provide data-driven insights to enhance customer interactions, improve retention, and boost sales.</p>
      <h2>Enterprise Resource Planning</h2>
      <p>Streamline operations with <strong>ERP systems</strong> tailored to your business. GreaterTechHub integrates solutions for inventory, HR, and more.</p>
      <h2>Integration and Scalability</h2>
      <p>Our systems integrate seamlessly with existing tools, ensuring scalability as your business grows.</p>
      <p>Partner with GreaterTechHub for <strong>CRM and ERP solutions</strong> that transform your business.</p>
    `,
    image: 'https://picsum.photos/600/400?random=5',
    date: 'May 25, 2025',
    keywords: ['CRM systems', 'ERP systems', 'business growth', 'customer management', 'enterprise solutions'],
  },
  {
    id: 6,
    title: '2D/3D Animation: Elevating Your Brand’s Storytelling',
    slug: '2d-3d-animation-branding',
    excerpt: 'GreaterTechHub’s 2D and 3D animation services create engaging visuals to elevate your brand’s storytelling and marketing.',
    content: `
      <p><strong>2D and 3D animation</strong> is a powerful tool for captivating audiences. GreaterTechHub creates stunning visuals to enhance your brand’s presence.</p>
      <h2>2D Animation for Engagement</h2>
      <p>Our <strong>2D animation services</strong> deliver engaging explainer videos and ads that connect with your audience.</p>
      <h2>3D Animation for Immersion</h2>
      <p>Bring products and ideas to life with <strong>3D animation</strong>. GreaterTechHub crafts immersive visuals for marketing and product demos.</p>
      <h2>Brand Storytelling</h2>
      <p>Our animations tell your brand’s story, creating emotional connections with your audience.</p>
      <p>Elevate your brand with GreaterTechHub’s <strong>animation services</strong>.</p>
    `,
    image: 'https://picsum.photos/600/400?random=6',
    date: 'May 20, 2025',
    keywords: ['2D animation services', '3D animation', 'brand storytelling', 'visual marketing', 'animation trends'],
  },
  {
    id: 7,
    title: 'Custom Software Solutions: Tailored for Your Business',
    slug: 'custom-software-solutions',
    excerpt: 'GreaterTechHub builds custom software solutions to address unique business challenges and drive innovation.',
    content: `
      <p><strong>Custom software development</strong> is key to solving specific business challenges. GreaterTechHub delivers tailored solutions for efficiency and innovation.</p>
      <h2>Bespoke Software Design</h2>
      <p>Our team designs <strong>custom software</strong> that aligns with your unique business goals, ensuring seamless integration.</p>
      <h2>Scalable Solutions</h2>
      <p>From startups to enterprises, our software scales with your growth, providing long-term value.</p>
      <h2>Agile Development</h2>
      <p>Using agile methodologies, GreaterTechHub ensures rapid delivery of high-quality software.</p>
      <p>Transform your business with GreaterTechHub’s <strong>custom software solutions</strong>.</p>
    `,
    image: 'https://picsum.photos/600/400?random=7',
    date: 'May 15, 2025',
    keywords: ['custom software development', 'business solutions', 'scalable software', 'agile development', 'software innovation'],
  },
]

export default function Blog() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-white mb-6 text-shadow-gold">
              <span className="gold-black-brown-gradient">Tech Insights</span> from GreaterTechHub
            </h1>
            <p className="text-lg sm:text-xl text-brand-cream max-w-3xl mx-auto leading-relaxed">
              Stay ahead with GreaterTechHub’s expert insights on website development, mobile apps, digital marketing, and cutting-edge IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black">
              Explore Our <span className="gold-black-brown-gradient">Blog</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto mt-4 leading-relaxed">
              Discover expert articles on technology trends, IT solutions, and industry insights to empower your business with GreaterTechHub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group relative h-full bg-brand-white border border-brand-gold/20 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col">
                  <div className="flex items-center mb-3">
                    <NewspaperIcon className="h-5 w-5 text-brand-gold mr-2" />
                    <span className="text-sm text-brand-gray font-medium">{post.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-brand-gray mb-4 flex-grow text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm text-brand-gray font-medium">Keywords: </span>
                    <span className="text-sm text-brand-gold">{post.keywords.join(', ')}</span>
                  </div>
                  <button
                    className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-auto read-more-btn min-h-[60px] z-30 !block !visible w-full"
                    data-post-id={post.id}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Blog Content */}
      <div id="blog-modal" className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6 hidden animate-fade-in">
        <div className="bg-brand-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-slide-up">
          <button
            id="close-modal"
            className="absolute top-4 right-4 text-brand-gray hover:text-brand-gold"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <img
            id="modal-image"
            src=""
            alt=""
            className="w-full h-64 sm:h-80 object-cover rounded-xl mb-6"
          />
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-brand-black mb-4"></h2>
          <div className="flex items-center mb-4">
            <NewspaperIcon className="h-5 w-5 text-brand-gold mr-2" />
            <span id="modal-date" className="text-sm text-brand-gray font-medium"></span>
          </div>
          <div id="modal-content" className="prose text-brand-gray mb-6 text-base leading-relaxed"></div>
          <div className="mb-6">
            <span className="text-sm text-brand-gray font-medium">Keywords: </span>
            <span id="modal-keywords" className="text-sm text-brand-gold">{}</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="/partnership">Partner with Us</Link>
            </button>
            <button
              id="close-modal-btn"
              className="bg-transparent border-2 border-brand-gold text-brand-black hover:bg-brand-gold/10 font-bold px-8 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white mb-6">
            Ready to <span className="gold-black-brown-gradient">Collaborate?</span>
          </h2>
          <p className="text-lg sm:text-xl text-brand-cream mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with GreaterTechHub to bring innovative IT solutions to life. Explore our services or contact us to start your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="/services">Explore Our Services</Link>
            </button>
            <button
              className="bg-transparent border-2 border-brand-gold text-brand-white hover:bg-brand-gold/10 font-bold px-8 py-4 rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="/partnership">Partner with Us</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Client-side script for modal interactivity */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log('Script loaded at ${new Date().toISOString()}');
            const blogPosts = ${JSON.stringify(blogPosts)};
            console.log('Blog posts loaded:', blogPosts.length, 'posts');
            const buttons = document.querySelectorAll('.read-more-btn');
            console.log('Read more buttons found:', buttons.length);
            if (buttons.length === 0) {
              console.error('ERROR: No read-more-btn buttons found. Inspect the DOM for <button class="read-more-btn"> in each card. Check for CSS overrides (e.g., display: none) in globals.css or other stylesheets.');
            } else {
              buttons.forEach((button, index) => {
                console.log('Button', index + 1, 'ID:', button.getAttribute('data-post-id'));
                button.addEventListener('click', () => {
                  console.log('Read more button clicked, post ID:', button.getAttribute('data-post-id'));
                  const postId = button.getAttribute('data-post-id');
                  const post = blogPosts.find(p => p.id == postId);
                  if (post) {
                    console.log('Post found:', post.title);
                    const modalImage = document.getElementById('modal-image');
                    const modalTitle = document.getElementById('modal-title');
                    const modalDate = document.getElementById('modal-date');
                    const modalContent = document.getElementById('modal-content');
                    const modalKeywords = document.getElementById('modal-keywords');
                    const modal = document.getElementById('blog-modal');
                    if (modalImage && modalTitle && modalDate && modalContent && modalKeywords && modal) {
                      modalImage.src = post.image || '/images/placeholder.jpg';
                      modalImage.alt = post.title;
                      modalTitle.textContent = post.title;
                      modalDate.textContent = post.date;
                      modalContent.innerHTML = post.content;
                      modalKeywords.textContent = post.keywords.join(', ');
                      modal.classList.remove('hidden');
                      modal.classList.add('flex');
                      console.log('Modal displayed for post:', post.title);
                    } else {
                      console.error('ERROR: One or more modal elements not found', {
                        modalImage: !!modalImage,
                        modalTitle: !!modalTitle,
                        modalDate: !!modalDate,
                        modalContent: !!modalContent,
                        modalKeywords: !!modalKeywords,
                        modal: !!modal
                      });
                    }
                  } else {
                    console.error('ERROR: Post not found for ID:', postId);
                  }
                });
              });
            }
            const closeModal = () => {
              console.log('Close modal triggered');
              const modal = document.getElementById('blog-modal');
              if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
              } else {
                console.error('ERROR: Modal element not found');
              }
            };
            const closeButton = document.getElementById('close-modal');
            const closeButtonBtn = document.getElementById('close-modal-btn');
            if (closeButton) {
              closeButton.addEventListener('click', closeModal);
            } else {
              console.error('ERROR: Close button not found');
            }
            if (closeButtonBtn) {
              closeButtonBtn.addEventListener('click', closeModal);
            } else {
              console.error('ERROR: Close button (btn) not found');
            }
          `,
        }}
      />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPosts.map((post) => ({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              image: post.image,
              datePublished: post.date,
              description: post.excerpt,
              keywords: post.keywords.join(', '),
              author: { '@type': 'Organization', name: 'GreaterTechHub' },
            }))
          ),
        }}
      />
    </div>
  )
}