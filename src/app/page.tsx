"use client";

import {
  ChevronRight,
  TrendingUp,
  Cpu,
  DollarSign,
  Target,
  Lock,
  Network,
} from "lucide-react";

interface SlideProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const Slide = ({ title, icon: Icon, children }: SlideProps) => (
  <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
    <div className="flex items-center mb-4 sm:mb-6">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="space-y-3 sm:space-y-4">{children}</div>
  </div>
);

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start">
    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-1 flex-shrink-0" />
    <p className="text-sm sm:text-base text-gray-700 ml-2">{children}</p>
  </div>
);

const RevenueSection = ({
  title,
  items,
  bgColor,
  textColor,
}: {
  title: string;
  items: string[];
  bgColor: string;
  textColor: string;
}) => (
  <div className={`${bgColor} p-4 rounded-lg mb-4`}>
    <h3 className={`text-lg font-bold ${textColor} mb-2`}>{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2">•</span>
          <span className="text-sm sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const InfoCard = ({
  title,
  subtitle,
  items,
  bgColor = "bg-blue-50",
}: {
  title: string;
  subtitle?: string;
  items?: string[];
  bgColor?: string;
}) => (
  <div className={`${bgColor} p-3 sm:p-4 rounded-lg`}>
    <h4 className="font-bold text-sm sm:text-base">{title}</h4>
    {subtitle && (
      <p className="text-base sm:text-lg font-semibold mt-1">{subtitle}</p>
    )}
    {items && (
      <ul className="mt-2 space-y-1 text-sm sm:text-base">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default function Component() {
  const directRevenue = [
    "Premium Subscriptions ($4.99-$19.99/month tiers)",
    "Programmatic Advertising (pre-roll, mid-roll)",
    "Sponsored Content & Brand Partnerships",
    "Content Licensing & Syndication",
  ];

  const platformRevenue = [
    "Live Stream Donations & Super Chats",
    "Channel Memberships (YouTube, Twitch)",
    "Platform-Specific Features (Tips, Bits, Stars)",
    "Social Media Monetization (Twitter, TikTok)",
  ];

  const daoRevenue = [
    "Governance Token Economics",
    "NFT Access Passes & Exclusive Content",
    "Community Treasury Revenue Share",
    "DeFi Integration & Yield Generation",
  ];

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 space-y-6 sm:space-y-8 bg-gray-50 min-h-screen">
      <Slide title="Introducing RadioAI" icon={Cpu}>
        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-3">
            The Future of Community-Owned AI Media
          </h3>
          <p className="text-sm sm:text-base text-blue-700">
            Where AI personalities meet community ownership, creating a
            revolutionary podcast platform that grows with its audience.
          </p>
        </div>
        <BulletPoint>
          AI-driven podcast with distinct personality agents
        </BulletPoint>
        <BulletPoint>
          Real-time content generation from trending topics
        </BulletPoint>
        <BulletPoint>
          Future transition to community ownership via DAO
        </BulletPoint>
      </Slide>

      <Slide title="Market Opportunity" icon={TrendingUp}>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <InfoCard
            title="Podcast Market"
            subtitle="$2B+ industry with 20% YoY growth"
            bgColor="bg-green-50"
          />
          <InfoCard
            title="AI Content"
            subtitle="$10B+ market by 2025"
            bgColor="bg-purple-50"
          />
        </div>
        <BulletPoint>First-mover advantage in AI-driven podcasting</BulletPoint>
        <BulletPoint>
          Unique position at intersection of AI and community ownership
        </BulletPoint>
        <BulletPoint>Scalable model with minimal overhead</BulletPoint>
      </Slide>

      <Slide title="Investment Tiers" icon={Target}>
        <div className="space-y-3 sm:space-y-4">
          <InfoCard
            title="Essential Lifeline"
            subtitle="$307/month"
            items={[
              "Core operational costs",
              "Daily broadcasts",
              "Basic development",
            ]}
            bgColor="bg-blue-50"
          />
          <InfoCard
            title="One-Year Stability"
            subtitle="$3,684/year"
            items={[
              "Consistent content creation",
              "Audience building",
              "Platform refinement",
            ]}
            bgColor="bg-green-50"
          />
          <InfoCard
            title="Expansion & Growth"
            subtitle="$5,000/year"
            items={[
              "Marketing initiatives",
              "Website development",
              "Community engagement",
            ]}
            bgColor="bg-purple-50"
          />
        </div>
      </Slide>

      <Slide title="Strategic Investment" icon={Lock}>
        <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-indigo-800">
            $10,000+ Tier
          </h3>
          <p className="text-sm sm:text-base text-indigo-700 mt-2">
            Early-stage equity opportunity with direct profit-sharing
          </p>
        </div>
        <BulletPoint>
          Exclusive access to strategic planning sessions
        </BulletPoint>
        <BulletPoint>Priority profit-sharing agreements</BulletPoint>
        <BulletPoint>Early access to DAO governance tokens</BulletPoint>
      </Slide>

      <Slide title="Revenue Streams" icon={DollarSign}>
        <RevenueSection
          title="Direct Monetization"
          items={directRevenue}
          bgColor="bg-blue-50"
          textColor="text-blue-800"
        />
        <RevenueSection
          title="Platform Revenue Share"
          items={platformRevenue}
          bgColor="bg-purple-50"
          textColor="text-purple-800"
        />
        <RevenueSection
          title="Web3 & DAO Revenue"
          items={daoRevenue}
          bgColor="bg-green-50"
          textColor="text-green-800"
        />
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-bold text-blue-800 mb-2">
            Revenue Potential Highlights
          </h4>
          <div className="space-y-2">
            <BulletPoint>
              Multiple revenue streams reduce platform dependency
            </BulletPoint>
            <BulletPoint>
              Layered monetization approach scales with growth
            </BulletPoint>
            <BulletPoint>
              Community ownership drives engagement & retention
            </BulletPoint>
          </div>
        </div>
      </Slide>

      <Slide title="Join the Future" icon={Network}>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3">
            Be Part of the Revolution
          </h3>
          <p className="text-sm sm:text-base text-blue-700">
            Join us in creating the first community-owned AI media platform
          </p>
        </div>
        <BulletPoint>
          Ground floor opportunity in AI content revolution
        </BulletPoint>
        <BulletPoint>Clear path to community ownership</BulletPoint>
        <BulletPoint>Multiple investment tiers for different goals</BulletPoint>
      </Slide>
    </div>
  );
}
