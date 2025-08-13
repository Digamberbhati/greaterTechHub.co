

import Link from 'next/link';
import { NewspaperIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Hardcoded blog posts data (unchanged)
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
    image: '/blog/website.jpg',
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
    image: '/blog/app.jpg',
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
    image: '/blog/digital.jpg',
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
    image: '/blog/web.jpg',
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
    image: '/blog/crm.jpg',
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
    image: '/blog/2d.jpg',
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
    image: '/blog/custom.jpg',
    date: 'May 15, 2025',
    keywords: ['custom software development', 'business solutions', 'scalable software', 'agile development', 'software innovation'],
  },
  {
    id: 8,
    title: 'Empowering Your Business with AI Agents, Chatbots, and IT Infrastructure',
    slug: 'ai-agents-chatbots-it-infrastructure',
    excerpt: 'Discover how GreaterTechHub’s AI agents, chatbots, and IT infrastructure solutions drive efficiency and customer connection for businesses.',
    content: `
      <p>At <strong>GreaterTechHub</strong>, we know running a business can feel like juggling a thousand tasks at once. That’s why our <strong>AI agents</strong>, <strong>chatbots</strong>, and <strong>IT infrastructure</strong> solutions are designed to simplify operations and keep your customers happy, like having a trusted partner by your side.</p>
      <h2>AI Agents for Smarter Workflows</h2>
      <p>Our <strong>AI agents</strong> automate repetitive tasks, analyze data, and provide insights to help you make smarter decisions. GreaterTechHub builds AI solutions that let you focus on growing your business while we handle the heavy lifting.</p>
      <h2>Chatbots for Seamless Customer Engagement</h2>
      <p>Our <strong>chatbots</strong> offer 24/7 support with a human touch, answering questions and guiding customers through your services. GreaterTechHub designs chatbots that feel like a friendly conversation, boosting satisfaction and loyalty.</p>
      <h2>Robust IT Infrastructure for Reliability</h2>
      <p>A solid <strong>IT infrastructure</strong> keeps your business running smoothly. From cloud solutions to cybersecurity, GreaterTechHub creates scalable, secure systems tailored to your needs, ensuring uptime and efficiency.</p>
      <p>Partner with GreaterTechHub to harness <strong>AI agents, chatbots, and IT infrastructure</strong> that empower your business to thrive.</p>
    `,
    image: '/blog/aiagent.jpg',
    date: 'July 10, 2025',
    keywords: ['AI agents', 'chatbots', 'IT infrastructure', 'business automation', 'customer engagement', 'scalable IT solutions'],
  },
];


export default function BlogClient() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* MODIFIED */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] bg-clip-text text-transparent">Tech Insights from GreaterTechHub</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with GreaterTechHub’s expert insights on website development, mobile apps, digital marketing, and cutting-edge IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* MODIFIED */}
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              <span className="bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] bg-clip-text text-transparent">Explore Our Blog</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Discover expert articles on technology trends, IT solutions, and industry insights to empower your business with GreaterTechHub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group relative h-full flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    {/* MODIFIED */}
                    <NewspaperIcon className="h-5 w-5 text-[#4A78D3] mr-2" />
                    <span className="text-sm text-slate-600 font-medium">{post.date}</span>
                  </div>
                  {/* MODIFIED */}
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] bg-clip-text text-transparent mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm text-slate-600 font-medium">Keywords: </span>
                    {/* MODIFIED */}
                    <span className="text-sm text-[#4A78D3]">{post.keywords.join(', ')}</span>
                  </div>
                  {/* MODIFIED */}
                  <button
                    className="bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] hover:opacity-90 text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-auto read-more-btn w-full"
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
      <div id="blog-modal" className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 hidden animate-fade-in">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
          <button
            id="close-modal"
            // MODIFIED
            className="absolute top-4 right-4 text-[#4A78D3] hover:text-[rgb(37,150,190)] transition-colors"
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
          {/* MODIFIED */}
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] bg-clip-text text-transparent mb-4"></h2>
          <div className="flex items-center mb-4">
            {/* MODIFIED */}
            <NewspaperIcon className="h-5 w-5 text-[#4A78D3] mr-2" />
            <span id="modal-date" className="text-sm text-slate-600 font-medium"></span>
          </div>
          <div id="modal-content" className="prose max-w-none text-slate-700 mb-6 text-base leading-relaxed"></div>
          <div className="mb-6">
            <span className="text-sm text-slate-600 font-medium">Keywords: </span>
            {/* MODIFIED */}
            <span id="modal-keywords" className="text-sm text-[#4A78D3]"></span>
          </div>
          <div className="flex justify-center gap-4">
            {/* MODIFIED */}
            <button
              id="close-modal-btn"
              className="bg-transparent border-2 border-[#4A78D3] text-[#4A78D3] hover:bg-[#4A78D3] hover:text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* MODIFIED */}
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] bg-clip-text text-transparent">Ready to Collaborate?</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our services to bring innovative IT solutions to life and start your project with GreaterTechHub.
          </p>
          <div className="flex justify-center gap-4">
            {/* MODIFIED */}
            <Link href="/services" className="bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] hover:opacity-90 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Client-side script for modal interactivity (unchanged) */}
       <script
        dangerouslySetInnerHTML={{
          __html: `
            const blogPosts = ${JSON.stringify(blogPosts)};
            const buttons = document.querySelectorAll('.read-more-btn');
            buttons.forEach(button => {
              button.addEventListener('click', () => {
                const postId = button.getAttribute('data-post-id');
                const post = blogPosts.find(p => p.id == postId);
                if (post) {
                  const modal = document.getElementById('blog-modal');
                  document.getElementById('modal-image').src = post.image || '/images/placeholder.jpg';
                  document.getElementById('modal-image').alt = post.title;
                  document.getElementById('modal-title').textContent = post.title;
                  document.getElementById('modal-date').textContent = post.date;
                  document.getElementById('modal-content').innerHTML = post.content;
                  document.getElementById('modal-keywords').textContent = post.keywords.join(', ');
                  modal.classList.remove('hidden');
                }
              });
            });
            const closeModal = () => {
              const modal = document.getElementById('blog-modal');
              if (modal) modal.classList.add('hidden');
            };
            document.getElementById('close-modal').addEventListener('click', closeModal);
            document.getElementById('close-modal-btn').addEventListener('click', closeModal);
          `,
        }}
      />


      {/* Structured Data for SEO (unchanged) */}
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
  );
}