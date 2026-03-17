import TextPage from '../components/TextPage';

export default function Privacy() {
  return (
    <TextPage title="Privacy Policy">
      <div className="space-y-6">
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl mb-8">
          <p className="text-sm text-gray-400">
            This website and its contents are owned and operated by We Got Websites (WGW).<br/><br/>
            All materials including text, branding, and design elements are protected and may not be reproduced or distributed without permission.<br/><br/>
            By using this website, visitors agree to the policies and terms outlined in the sections below.
          </p>
        </div>

        <p>We respect the privacy of individuals who interact with our website.</p>
        <p>Information submitted through the website, including name, email address, and contact details, is used only for responding to enquiries and discussing potential projects.</p>
        <p>We do not sell, rent, or distribute personal information to third parties.</p>
        <p>All information provided through the website is handled with appropriate care and used solely for communication and service purposes.</p>
      </div>
    </TextPage>
  );
}
