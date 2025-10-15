"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/8885041/pexels-photo-8885041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A young man with glasses drinks soda while working on his computer in a vintage office setting." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of a diverse team in a business meeting using laptops and tablets." },
  { "id": "teamMember1", "url": "https://images.pexels.com/photos/34302273/pexels-photo-34302273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "technology professional - Photo by Sean P. Twomey" },
  { "id": "teamMember2", "url": "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up shot of a person coding on a laptop, focusing on the hands and screen." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="InnovateIT" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to InnovateIT"
            description="Leading the way in tech solutions."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About InnovateIT"
            description={[
              "At InnovateIT, we redefine technology.",
              "Our mission is to deliver top-notch solutions."
            ]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            features={[
              { id: "01", title: "Cloud Services", description: "Scalable, secure cloud solutions.", imageSrc: assetMap.find(a => a.id === "heroImage")?.url },
              { id: "02", title: "AI & Analytics", description: "Data-driven decisions.", imageSrc: assetMap.find(a => a.id === "aboutImage")?.url }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            members={[
              { id: "1", name: "John Doe", role: "CTO", description: "Leading tech innovations.", imageSrc: assetMap.find(a => a.id === "teamMember1")?.url },
              { id: "2", name: "Jane Smith", role: "Lead Developer", description: "Expert in software solutions.", imageSrc: assetMap.find(a => a.id === "teamMember2")?.url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get in Touch"
            title="Contact Us"
            description="We'd love to hear from you."
            inputPlaceholder="Your email address"
            buttonText="Send"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Services", items: [{ label: "Cloud", href: "features" }, { label: "AI", href: "features" }] }
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
