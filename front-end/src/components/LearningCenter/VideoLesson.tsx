/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface VideoLessonProps {
  imageSrc: string;
  title: string;
  description: string;
}

const VideoLesson: React.FC<VideoLessonProps> = ({ imageSrc, title, description }) => {
  return (
    <article className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full mb-2">
      <div className="flex flex-col grow text-base font-bold text-white max-md:mt-10">
        <div className="flex relative flex-col justify-center items-center px-16 py-20 w-full text-center whitespace-nowrap aspect-[1.64] max-md:px-5">
          <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
          <button className="flex relative gap-1.5 items-start px-2.5 pt-2.5 pb-4 rounded-xl w-[85px] btn">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f53e4788bda8a87a098f03d404ce95cfe02b330949b2f868cd212a4a369d9ed8?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e" alt="" className="object-contain shrink-0 aspect-[0.85] w-[11px]" />
            <span data-layername="watch">Watch</span>
          </button>
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