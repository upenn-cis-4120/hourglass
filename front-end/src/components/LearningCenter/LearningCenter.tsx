'use client';

import React, { useState } from 'react';
import VideoLesson from './VideoLesson';
import EducationalArticle from './EducationalArticle';

interface VideoLessonData {
  imageSrc: string;
  title: string;
  description: string;
  videoLink?: string;
}

interface ArticleData {
  title: string;
  description: string;
}

const recommendedLessons: VideoLessonData[] = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9615b2ad71509576e4670adde0709404b770ec46ea101e5750fb1969904191b6?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "How to shop less",
    description: "",
    videoLink: "https://www.youtube.com/embed/BXDGbgw6FSk?si=6ZQNsBMz5UIl76v0"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d6e126220cbd32ca4f3e3b1be588a8f59938516b58f0a166622d78a02f25484?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "How to meet saving goals",
    description: "",
    videoLink: "https://www.youtube.com/embed/rjTr6yD6lpQ?si=r13gI9CQcsrKUO-k"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24c74875cbba215b261c6f2fec20e11bad4216a0b9431c4bf998c39daa3d31e2?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "How to spend less money eating out",
    description: "",
    videoLink: "https://www.youtube.com/embed/bca9HSRDsgc?si=2JUki2kJTB4G7h-v"
  },
];

const videoLessons: VideoLessonData[] = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9615b2ad71509576e4670adde0709404b770ec46ea101e5750fb1969904191b6?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "Finance 101",
    description: "A beginner’s guide to mastering your money! In this video, we break down essential financial concepts, from budgeting and saving to investing and building wealth.",
    videoLink: "https://www.youtube.com/embed/EsOTfVIcdEI?si=S-1oxQIpvL9lUyMd"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d6e126220cbd32ca4f3e3b1be588a8f59938516b58f0a166622d78a02f25484?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "Investing 101",
    description: "Unlock the basics of growing your wealth! This video covers key concepts like stocks, bonds, mutual funds, and ETFs, helping you understand how to start investing, manage risk, and build a portfolio.",
    videoLink: "https://www.youtube.com/embed/7i4LNd3WuLQ?si=A8fQY2w_L776g7xd"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24c74875cbba215b261c6f2fec20e11bad4216a0b9431c4bf998c39daa3d31e2?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "Savings 101",
    description: "Master the art of building financial security! In this video, we explore simple strategies to save money effectively, from setting goals and creating a budget to using high-yield savings accounts.",
    videoLink: "https://www.youtube.com/embed/BgvgK-5NAUc?si=--CLQF2tZfkbSGIy"
  },
];

const articles: ArticleData[] = [
  {
    title: "Retirement",
    description: "A Comprehensive Guide to Building a Secure Future. This article covers essential steps for retirement planning, including setting savings goals, understanding retirement accounts like 401(k)s and IRAs, and creating a strategy to ensure financial stability in your golden years."
  },
  {
    title: "Future Planning",
    description: "How to Secure Long-Term Financial Success. This article explores strategies for future financial planning, including setting long-term goals, building a diversified investment portfolio, preparing for major life events, and ensuring financial stability."
  },
  {
    title: "Pay Tracking",
    description: "Stay on Top of Your Income and Budget. This article provides tips on effectively tracking your income, understanding pay stubs, managing expenses, and using tools to monitor cash flow, ensuring you have full control over your finances."
  }
];

const LearningCenter: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoLessonData | null>(null);

  const handleVideoClick = (video: VideoLessonData) => {
    setSelectedVideo(video);
  };

  const closePanel = () => {
    setSelectedVideo(null);
  };

  return (
    <main className="flex flex-col px-16 py-5 max-md:px-5 font-sans">
      <h1 className="self-start text-3xl font-bold text-white">Learning Center</h1>
      <h2 className="self-start mt-6 text-lg font-semibold text-white">Finance Tips</h2>
      <p className='text-white font-thin text-md'>Based on your spending and saving patterns</p>
      <section className="self-start mt-6 w-full max-w-[1067px] max-md:max-w-full">
        <div className="flex gap-12 max-md:flex-col flex-wrap">
          {recommendedLessons.map((lesson, index) => (
            <div key={index} className="relative group w-[28%]">
              <button
                className="absolute z-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 items-center px-2.5 pt-2.5 pb-4 rounded-xl w-[85px] btn bg-black bg-opacity-75 hover:bg-opacity-90 text-white"
                onClick={() => handleVideoClick(lesson)}
              >
                <img src="play.svg" className="w-[0.7rem]" />
                <span data-layername="watch" className="font-sans text-[0.95rem] font-normal">
                  Watch
                </span>
              </button>
              <VideoLesson {...lesson} />
            </div>
          ))}
        </div>
      </section>
      <hr className="self-start mt-2 max-w-full h-px border border-solid border-white border-opacity-10 w-[1067px] max-md:mt-10" />

      <h2 className="self-start mt-6 text-lg font-semibold text-white">Video Lessons</h2>
      <section className="self-start mt-6 w-full max-w-[1067px] max-md:max-w-full">
      <div className="flex gap-12 max-md:flex-col flex-wrap">
          {videoLessons.map((lesson, index) => (
            <div key={index} className="relative group w-[28%]">
              <button
                className="absolute z-30 top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 items-center px-2.5 pt-2.5 pb-4 rounded-xl w-[85px] btn bg-black bg-opacity-75 hover:bg-opacity-90 text-white"
                onClick={() => handleVideoClick(lesson)}
              >
                <img src="play.svg" className="w-[0.7rem]" />
                <span data-layername="watch" className="font-sans text-[0.95rem] font-normal">
                  Watch
                </span>
              </button>
              <VideoLesson {...lesson} />
            </div>
          ))}
        </div>
      </section>
      <hr className="self-start mt-11 max-w-full h-px border border-solid border-white border-opacity-10 w-[1067px] max-md:mt-10" />
      <h2 className="self-start mt-8 text-lg font-semibold text-white">Educational Articles</h2>
      <section className="self-start mt-8 w-full max-w-[1059px] max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {articles.map((article, index) => (
            <EducationalArticle key={index} {...article} />
          ))}
        </div>
      </section>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#212529] p-7 rounded-lg shadow-lg max-w-3xl w-full">
            <button className="text-white font-semibold float-right mb-5 ml-5" onClick={closePanel}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0615e85ede486eec0d6790357dc27201b9481754705d0d688d75e3564cb8fdf2?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
                alt=""
                className="object-contain self-end w-3.5 aspect-square"
              />
            </button>
            <iframe
              className="w-full h-96"
              src={selectedVideo.videoLink}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mt-4 text-white">{selectedVideo.title}</h3>
            <p className="text-sm font-thin mt-2 text-white">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default LearningCenter;
