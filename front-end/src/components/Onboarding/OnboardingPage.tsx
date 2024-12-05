import * as React from "react";
import { ProgressBar } from "./ProgressBar";
import { ActionCard } from "./ActionCard";
import { Section } from "./Section";

const OnboardingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-20 pt-16 bg-neutral-800 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1040px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a1976fbf7d82f65fe2054258ea688790bf418e12454aa0dba1c692373baf5da?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
          alt="Hourglass Journey Logo"
          className="object-contain max-w-full aspect-[4.69] w-[418px]"
        />
        <div className="self-start mt-8 text-3xl font-bold leading-none text-white max-md:max-w-full">
          Welcome to your Hourglass Journey.
        </div>
        <div className="self-start mt-6 text-base font-bold leading-6 text-white max-md:max-w-full">
          <span>Congratulations!</span>{" "}
          <span>
            You have taken the first step to managing your personal finances. To
            get your account set up we need some information from you.
          </span>
        </div>

        <div className="flex flex-wrap gap-10 mt-14 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <Section title="What accounts do you have?">
            <ActionCard
              title="Set up checking account"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4909c739ff17281f04035bc09b8f1c17afd2ed4bf1f223d88f40dd4c1036984f?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
            />
          </Section>

          <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
            <ProgressBar progress={33} />
            <div className="flex flex-wrap gap-9 mt-6 text-base font-bold text-white max-md:max-w-full">
              <ActionCard title="Set up checking account" />
              <ActionCard title="Set up checking account" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mt-10 max-md:mr-1">
          <Section title="Do you have any current investments?">
            <ActionCard title="Set up 401K" />
          </Section>

          <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
            <ProgressBar progress={33} />
            <div className="flex flex-wrap gap-9 mt-6 w-full text-base font-bold text-white max-md:max-w-full">
              <ActionCard title="Set up external investment" />
              <ActionCard
                title="I don't have any"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/84eb1894d54c267cbe1aa45e976d8e76e0adf66e87ecd3b4d3545c4fac02b980?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-xl text-white max-md:mt-10">
                <Section title="What are your financial goals?">
                  <ActionCard
                    title="Enter short term goals"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/01828ecb74a4f548544a9c350747c76de54b88f2b8a4fff986d6e74cbceac4bb?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
                  />
                </Section>

                <Section title="What are your recurring payments?">
                  <ActionCard
                    title="Set up recurring payments"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8fc3805f73fc45537b6dfef5c0d32de5ecaf556ac767e0eeaf859987da993901?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
                  />
                </Section>

                <Section title="What are your recurring payments?">
                  <ActionCard
                    title="Enter bill dates"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e600f1a6f3cc338047de44274b43baffc7f01ce6722475dbb4d3709f49cc5ded?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
                  />
                </Section>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <ProgressBar progress={50} />
                <ActionCard title="I need advice" />

                <ProgressBar progress={50} />
                <ActionCard title="I don't have any" />

                <ProgressBar progress={66} />
                <div className="flex flex-wrap gap-9 mt-6 w-full text-base font-bold text-white max-md:max-w-full">
                  <ActionCard
                    title="Sync to your calendar"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4aae6470f7bc35c1f2612451c0eb08f2541e0cbdbe34a363d825936208d2610a?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
                  />
                  <ActionCard title="I don't have any" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shrink-0 mt-5 h-px border border-dashed border-white border-opacity-50 max-md:max-w-full" />

        <div className="flex flex-wrap gap-5 self-start mt-8">
          <button
            className="px-8 pt-3 pb-5 text-base font-bold text-center rounded-md bg-white bg-opacity-20 text-white text-opacity-40 max-md:px-5"
            disabled
          >
            I'm Ready to Go!
          </button>
          <div className="flex-auto my-auto text-sm leading-loose text-white">
            This button activates once you get all your questions to 100%!
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;