import React from 'react';
import { Hero } from '../components/Hero';
import { LatestTicker } from '../components/LatestTicker';
import { SignalSection } from '../components/SignalSection';
import { ProductTiles } from '../components/ProductTiles';
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
    <div className="sm-home animate-fade-in bg-[#FFFFFF] text-[#0b1f3a] overflow-x-hidden">
      <section id="home-hero" data-rail="Intro" className="px-band">
        <Hero
          onExploreProducts={() => onNavigate('products')}
          onExploreTechnology={() => onNavigate('technology')}
          onNavigateDetail={(detail) => onNavigate(detail)}
        />
        <LatestTicker onOpenLatest={() => onNavigate('the-latest')} />
      </section>

      <section id="signal-section" data-rail="Signal" className="px-band px-band-alt">
        <SectionDecor side="right">
          <SignalSection onNavigateTechnology={() => onNavigate('technology')} />
        </SectionDecor>
      </section>

      <section id="home-products" data-rail="Products" className="px-band">
        <ProductTiles
          onSelect={(id) => {
            if (id === 'routers') onNavigate('sky5g-router');
            else if (id === 'trackers') onNavigate('tracker-detail');
            else onNavigate('products');
          }}
        />
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