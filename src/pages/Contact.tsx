import TextPage from '../components/TextPage';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <TextPage title="Contact">
      <p className="mb-8">
        If you would like to discuss a project or enquire about building a website, please complete the form below. Our team will review your request and respond accordingly.
      </p>
      
      <div className="bg-[#0a101f] border border-white/10 rounded-2xl p-6 md:p-8 mt-12 max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-8">Submit Your Enquiry</h2>
        <ContactForm />
      </div>
    </TextPage>
  );
}
