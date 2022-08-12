import { PageContainer, PageLayout } from "@components/layouts";
import { Button, VisuallyHidden } from "@components/widgets";
import { useTheme } from "@core/hooks";
import { HomeProps } from "@core/types";

export const Home = ({ cmsData }: HomeProps) => {
  const { seo, headingSection, highlightedCases, aboutSection } = cmsData;

  const { theme } = useTheme();

  return (
    <PageContainer headTitle={seo.title} description={seo.description}>
      <PageLayout>
        {/* Heading */}
        <main className="my-16 sm:my-32 text-center">
          <VisuallyHidden asChild>
            <h1>{headingSection.title}</h1>
          </VisuallyHidden>

          <img
            src={
              theme === "light"
                ? "/images/logo-ence-black.svg"
                : "/images/logo-ence-white.svg"
            }
            alt="Ence logo"
            className="sm:w-[100px] mx-auto mb-8"
          />

          <p className="sm:w-4/5 max-w-[400px] sm:max-w-[929px] mx-auto text-[8px] sm:text-xl">
            {headingSection.subtitle}
          </p>
        </main>

        {/* Highlighted cases */}
        <section className="mb-16 sm:mb-64 text-center">
          <h2 className="mb-2 sm:mb-12 font-bold sm:text-6xl">
            {highlightedCases.title}
          </h2>

          <div className="w-4/5 mx-auto flex flex-col items-center gap-5">
            {highlightedCases.banners.map((caseItem) => (
              <img
                key={caseItem.id}
                src={caseItem.url}
                alt="Zoeira Cooking case"
                className="w-full max-w-[1080px] max-h-[350px]"
              />
            ))}
          </div>
        </section>

        {/* People */}
        <section className="w-4/5 sm:w-auto mx-auto mb-16 sm:mb-32 text-center">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:flex-1 lg:mr-4">
              <h2 className="mb-2 sm:mb-4 font-bold sm:text-5xl lg:text-start">
                {aboutSection.title}
              </h2>

              <p className="w-2/3 lg:w-auto mx-auto mb-8 text-[8px] sm:text-lg lg:text-start">
                {aboutSection.subtitle}
              </p>

              <Button
                type="button"
                variant="see-more"
                className="w-[200px] hidden lg:block"
              />
            </div>

            <div className="lg:flex-[2] relative mb-8 flex justify-center">
              {aboutSection.people.map((person, i) => (
                <img
                  key={person.id}
                  src={person.profilePicture.url}
                  alt={`${person.personName} profile picture`}
                  className={`w-2/3 max-w-[250px] lg:max-w-[700px] rounded-full flex-shrink-0 ${
                    i === 0
                      ? "z-10 translate-x-1/4 lg:translate-x-1/4"
                      : "-translate-x-1/4 lg:-translate-x-1/4"
                  }`}
                />
              ))}
            </div>
          </div>

          <Button
            type="button"
            variant="see-more"
            className="w-[148px] lg:hidden"
          />
        </section>
      </PageLayout>
    </PageContainer>
  );
};
