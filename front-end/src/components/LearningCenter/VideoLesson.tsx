// VideoLesson.tsx
"use client"
import React, {useState} from 'react';

interface VideoLessonProps {
  imageSrc: string;
  title: string;
  description: string;
  videoLink?: string; // Optional prop for YouTube link
}

const VideoLesson: React.FC<VideoLessonProps> = ({ imageSrc, title, description, videoLink }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleWatchClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <article className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full mb-2">
      <div className="flex flex-col grow text-base font-bold text-white max-md:mt-10">
        <div className="flex relative flex-col justify-center items-center px-16 py-20 w-full text-center whitespace-nowrap aspect-[1.64] max-md:px-5">
          {isVideoPlaying && videoLink ? (
           <iframe width="full" height="full" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          ) : (
            <img loading="lazy" src={imageSrc} alt={title} className="object-cover absolute inset-0 size-full" />
          )}
          {!isVideoPlaying && (
            <button 
              className="flex relative gap-1.5 items-start px-2.5 pt-2.5 pb-4 rounded-xl w-[85px] btn" 
              onClick={handleWatchClick}
            >
              <span data-layername="watch">Watch</span>
            </button>
          )}
        </div>
        <h3 data-layername={title.toLowerCase().replace(' ', '')} className="self-start mt-2.5">
          {title}
        </h3>
        <p data-layername={description.toLowerCase().replace(/[^a-z0-9]/g, '')} className="mt-3.5 text-sm leading-5 max-md:mr-1">
          {description}
        </p>
      </div>
    </article>
  );
};

export default VideoLesson;
