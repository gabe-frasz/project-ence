import { Container } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { Button } from "@components/widgets";
import { usePageConfig } from "@core/hooks";
import { ProjectPageProps } from "@core/types";
import { fadeUp } from "@core/utils";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Reveal } from "react-awesome-reveal";

export const Project = ({ caseData }: ProjectPageProps) => {
  usePageConfig();
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <>
      <Head>
        <title>Ence | {caseData.projectName}</title>
        <meta name="description" content={caseData.description} />
      </Head>

      <Navbar translucent absolute />

      <div className="max-h-[1080px] mb-4 sm:mb-12 flex justify-center items-center overflow-y-clip">
        <img
          src={caseData.banner.url}
          alt={`${caseData.projectName} banner`}
          className="hidden sm:block w-screen max-w-[2560px] mx-auto object-cover"
        />
      </div>

      {/* case description */}
      <Container asChild>
        <main className="mb-12 text-xs sm:text-base">
          <span className="mb-4 block font-semibold">
            {caseData.caseOrder}/5 cases
          </span>

          <h1 className="mb-10 sm:mb-20 text-2xl sm:text-5xl">
            {caseData.title}
          </h1>

          <div className="mb-6 flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0">
            <p className="sm:w-1/2 sm:mr-[20vw] sm:text-start">
              {caseData.description}
            </p>

            <div className="sm:w-fit sm:text-start">
              <h2 className="w-fit mb-2">
                {isInEnglish ? "Data Sheet" : "Ficha Técnica"} -
              </h2>

              <ul className="w-fit">
                <li>
                  <strong>{isInEnglish ? "Services" : "Serviços"}: </strong>

                  <span>{caseData.dataSheet.services}</span>
                </li>

                <li>
                  <strong>
                    {isInEnglish ? "Art director" : "Diretor de arte"}:{" "}
                  </strong>

                  <span>
                    {caseData.dataSheet.artDirector
                      .map((person) => person.personName)
                      .join(", ")}
                  </span>
                </li>

                <li>
                  <strong>Design: </strong>

                  <span>
                    {caseData.dataSheet.design
                      .map((person) => person.personName)
                      .join(", ")}
                  </span>
                </li>

                {caseData.dataSheet.dev[0]?.personName && (
                  <li>
                    <strong>Dev: </strong>

                    <span>
                      {caseData.dataSheet.dev
                        .map((person) => person.personName)
                        .join(", ")}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="sm:text-start">
            <h2 className="mb-2">
              {isInEnglish ? "Design strategy" : "Estratégia de design"} -
            </h2>

            <p className="sm:max-w-[50%]">{caseData.designStrategy}</p>
          </div>
        </main>
      </Container>

      {/* case snaps */}
      <Container asChild>
        <section className="mb-8 flex flex-col gap-2">
          <Reveal keyframes={fadeUp} triggerOnce>
            {caseData.snaps.map((snap) => (
              <img
                key={snap.id}
                src={snap.url}
                alt={`${caseData.projectName} snap`}
              />
            ))}
          </Reveal>
        </section>
      </Container>

      {/* navigation buttons */}
      <div className="mb-8 flex justify-center items-center gap-4 text-xs sm:text-base">
        {/* <Link href={caseData.previousCase?.slug ?? "/"}>
          <a className="link">{isInEnglish ? "Previous" : "Voltar"}</a>
        </Link> */}

        <Link href={caseData.nextCase?.slug ?? "/"}>
          <a className="block">
            <Button type="button" className="w-[50vw] max-w-[200px]">
              {isInEnglish ? "Next case" : "Próximo case"}
            </Button>
          </a>
        </Link>
      </div>

      <Footer />
    </>
  );
};
