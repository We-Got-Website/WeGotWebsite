import Hero from '../components/Hero';
import Features from '../components/Features';
import FeatureShowcase from '../components/FeatureShowcase';
import Pricing from '../components/Pricing';
import ProjectModal from '../components/ProjectModal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Hero onOpenProjectModal={() => setIsModalOpen(true)} />
      <Features />
      <FeatureShowcase />
      <Pricing onOpenProjectModal={() => setIsModalOpen(true)} />
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
