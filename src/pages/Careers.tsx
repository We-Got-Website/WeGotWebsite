import TextPage from '../components/TextPage';

export default function Careers() {
  return (
    <TextPage title="Careers">
      <p>At We Got Websites (WGW), we are always interested in connecting with talented professionals who are passionate about web design, development, digital branding, and technology.</p>
      <p>As the company continues to grow, opportunities for collaboration and open roles are shared through our official LinkedIn page.</p>
      <p>If you are interested in working with WGW, we encourage you to visit our LinkedIn jobs section to explore available opportunities and apply directly there.</p>
      <div className="pt-6">
        <a
          href="https://www.linkedin.com/company/we-got-website/jobs/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-black px-8 py-3 rounded-full font-medium transition-colors"
        >
          View Opportunities on LinkedIn
        </a>
      </div>
    </TextPage>
  );
}
