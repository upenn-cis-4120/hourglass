// LearningCenter.tsx
import React from 'react';
import VideoLesson from './VideoLesson';
import EducationalArticle from './EducationalArticle';

interface VideoLessonData {
  imageSrc: string;
  title: string;
  description: string;
  videoLink?: string; // Optional YouTube link
}

interface ArticleData {
  title: string;
  description: string;
}

const videoLessons: VideoLessonData[] = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9615b2ad71509576e4670adde0709404b770ec46ea101e5750fb1969904191b6?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "Finance 101",
    description: "A beginner's guide to mastering your money!",
    videoLink: "www.youtube.com/embed/EsOTfVIcdEI&ab_channel=selfLearn-en" // YouTube embed link
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d6e126220cbd32ca4f3e3b1be588a8f59938516b58f0a166622d78a02f25484?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "Investing 101",
    description: "Unlock the basics of growing your wealth!",
    videoLink: "www.youtube.com/embed/l4TzfPfLMB4&ab_channel=SmartInvestingTrends"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24c74875cbba215b261c6f2fec20e11bad4216a0b9431c4bf998c39daa3d31e2?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "Savings 101",
    description: "Master the art of building financial security!",
    videoLink: "www.youtube.com/embed/ku52Pb7fFT8&ab_channel=MoneyCoach"
  },
  // Add more lessons as needed
];

const articles: ArticleData[] = [
  {
    title: "Retirement",
    description: "A Comprehensive Guide to Building a Secure Future."
  },
  {
    title: "Future Planning",
    description: "How to Secure Long-Term Financial Success."
  },
  {
    title: "Pay Tracking",
    description: "Stay on Top of Your Income and Budget."
  }
];

const LearningCenter: React.FC = () => {
  return (
    <main data-layername="desktop11" className="flex flex-col px-16 py-16 bg-neutral-800 max-md:px-5">
      <h1 data-layername="learningCenter" className="self-start text-3xl font-bold text-white">
        Learning Center
      </h1>
      <h2 data-layername="videoLessons" className="self-start mt-10 text-xl font-bold text-white">
        Video Lessons
      </h2>
      <section className="self-end mt-9 w-full max-w-[1067px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col flex-wrap">
          {videoLessons.map((lesson, index) => (
            <VideoLesson key={index} {...lesson} />
          ))}
        </div>
      </section>
      <hr className="shrink-0 self-end mt-11 max-w-full h-px border border-solid border-white border-opacity-10 w-[1067px] max-md:mt-10" />
      <h2 data-layername="educationalArticles" className="self-start mt-8 text-xl font-bold text-white">
        Educational Articles
      </h2>
      <section className="self-end mt-8 w-full max-w-[1059px] max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {articles.map((article, index) => (
            <EducationalArticle key={index} {...article} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default LearningCenter;
