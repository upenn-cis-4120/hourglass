"use client";
import React, { useState } from "react";

interface VideoLessonProps {
  imageSrc?: string; // Optional, but we'll dynamically use YouTube thumbnail
  title: string;
  description: string;
  videoLink?: string; // Optional prop for YouTube link
}

const VideoLesson: React.FC<VideoLessonProps> = ({ imageSrc, title, description, videoLink }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Extract YouTube video ID from the videoLink
  const getYouTubeThumbnail = () => {
    if (videoLink) {
      const match = videoLink.match(/(?:embed\/|v=|\/v\/|watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
    }
    return null;
  };

  const thumbnail = getYouTubeThumbnail() || imageSrc;

  const handleWatchClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <article className="flex flex-col w-full max-md:ml-0 max-md:w-full mb-2 rounded-lg">
      <div className="flex flex-col grow text-base font-bold text-white max-md:mt-10 ">
        <div className="relative flex justify-center 
        border-[0.8px] border-white border-opacity-75 items-center w-full aspect-[1.64] rounded-2xl overflow-hidden">
          {isVideoPlaying && videoLink ? (
            <iframe
              width="full"
              height="full"
              src={videoLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                loading="lazy"
                src={thumbnail}
                alt={title}
                className="absolute inset-0 object-cover w-full h-full"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#212529] bg-opacity-75"></div>
            </>
          )}
        </div>
        <h3 data-layername={title.toLowerCase().replace(" ", "")} className="self-start mt-2.5">
          {title}
        </h3>
        <p
          data-layername={description.toLowerCase().replace(/[^a-z0-9]/g, "")}
          className="mt-2 font-sans text-sm font-thin leading-5 max-md:mr-1"
        >
          {description}
        </p>
      </div>
    </article>
  );
};

export default VideoLesson;
