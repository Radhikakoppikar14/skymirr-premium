import React from 'react';
import { Hero } from '../components/Hero';
import { SignalSection } from '../components/SignalSection';
import { ProductsCatalog } from '../components/ProductsCatalog';
import { SolutionsSection } from '../components/SolutionsSection';
import { PartnersSection } from '../components/PartnersSection';
import { SectionDecor } from '../components/fx/SectionDecor';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

/* Premium structure: every block is a banded, anchored section (id + data-rail)
   so the side rail can track it and alternating tints give the page rhythm. */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="sm-home animate-fade-in bg-[#F8FCFD] text-[#152C39] overflow-x-hidden">
      <section id="home-hero" data-rail="Intro" className="px-band">
        <Hero
          onExploreProducts={() => onNavigate('products')}
          onExploreTechnology={() => onNavigate('technology')}
          onNavigateDetail={(detail) => onNavigate(detail)}
        />
      </section>

      <section id="signal-section" data-rail="Signal" className="px-band px-band-alt">
        <SectionDecor side="right">
          <SignalSection onNavigateTechnology={() => onNavigate('technology')} />
        </SectionDecor>
      </section>

      <section id="home-products" data-rail="Products" className="px-band">
        <SectionDecor side="left">
          <ProductsCatalog
            onSelectCategory={(catId) => {
              if (catId === 'routers') onNavigate('sky5g-router');
              else if (catId === 'trackers') onNavigate('tracker-detail');
              else onNavigate('products');
            }}
          />
        </SectionDecor>
      </section>

      <section id="home-applications" data-rail="Applications" className="px-band px-band-alt">
        <SectionDecor side="right">
          <SolutionsSection onSelectApplication={() => onNavigate('services')} />
        </SectionDecor>
      </section>

      <section id="home-partners" data-rail="Partners" className="px-band">
        <SectionDecor side="left">
          <PartnersSection onExploreProducts={() => onNavigate('products')} />
        </SectionDecor>
      </section>
    </div>
  );
};