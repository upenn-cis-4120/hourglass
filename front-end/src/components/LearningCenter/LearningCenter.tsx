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

const videoLessons: VideoLessonData[] = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9615b2ad71509576e4670adde0709404b770ec46ea101e5750fb1969904191b6?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "Finance 101",
    description: "A beginner's guide to mastering your money!",
    videoLink: "https://www.youtube.com/embed/iR7b2NjgAO8?si=tJDkds24dVFD5Nw-"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d6e126220cbd32ca4f3e3b1be588a8f59938516b58f0a166622d78a02f25484?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "Investing 101",
    description: "Unlock the basics of growing your wealth!",
    videoLink: "https://www.youtube.com/embed/lNdOtlpmH5U?si=ZNXouy09nQKpwTO8"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24c74875cbba215b261c6f2fec20e11bad4216a0b9431c4bf998c39daa3d31e2?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e",
    title: "Savings 101",
    description: "Master the art of building financial security!",
    videoLink: "https://www.youtube.com/embed/ku52Pb7fFT8?si=wl_wHVj15IQV3Dgt"
  },
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
  const [selectedVideo, setSelectedVideo] = useState<VideoLessonData | null>(null);

  const handleVideoClick = (video: VideoLessonData) => {
    setSelectedVideo(video);
  };

  const closePanel = () => {
    setSelectedVideo(null);
  };

  return (
    <main className="flex flex-col px-16 py-16 bg-neutral-800 max-md:px-5">
      <h1 className="self-start text-3xl font-bold text-white">Learning Center</h1>
      <h2 className="self-start mt-10 text-xl font-bold text-white">Video Lessons</h2>
      <section className="self-end mt-9 w-full max-w-[1067px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col flex-wrap">
          {videoLessons.map((lesson, index) => (
            <div key={index} className="relative group">
              <VideoLesson {...lesson} />
              {/* Clickable overlay */}
              <div
                onClick={() => handleVideoClick(lesson)}
                className="absolute inset-0 cursor-pointer bg-transparent group-hover:bg-black group-hover:bg-opacity-10"
              ></div>
            </div>
          ))}
        </div>
      </section>
      <hr className="self-end mt-11 max-w-full h-px border border-solid border-white border-opacity-10 w-[1067px] max-md:mt-10" />
      <h2 className="self-start mt-8 text-xl font-bold text-white">Educational Articles</h2>
      <section className="self-end mt-8 w-full max-w-[1059px] max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {articles.map((article, index) => (
            <EducationalArticle key={index} {...article} />
          ))}
        </div>
      </section>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-[#212529] p-7 rounded-lg shadow-lg max-w-3xl w-full">
          <button className="text-white font-bold float-right mb-5 ml-5" onClick={closePanel}>
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
          <h3 className="text-xl font-bold mt-4 text-white">{selectedVideo.title}</h3>
          <p className="text-sm font-thin mt-2 text-white">{selectedVideo.description}</p>
        </div>
      </div>      
      )}
    </main>
  );
};

export default LearningCenter;
