import { DetailsPage } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <DetailsPage>
        <h1>About</h1>
        <p className="padding-bottom-32">
          Star Wars Wiki is a personal project created by Leandro Nunes using
          NextJS, GraphQL and SASS.
        </p>
        <ul className="padding-bottom-32">
          <li>
            Check the{" "}
            <Link
              href="https://studio.apollographql.com/public/star-wars-swapi/variant/current/home"
              target="_blank"
              rel="noreferrer"
            >
              Star Wars GraphQL API
            </Link>{" "}
          </li>
          <li>
            Check the project{" "}
            <Link
              href="https://github.com/leandronunesdev/swapi"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </Link>{" "}
          </li>
        </ul>
        <p>
          Made with 💛 by{" "}
          <Link
            href="https://www.linkedin.com/in/leandronunesdev/"
            target="_blank"
            rel="noreferrer"
          >
            Leandro Nunes
          </Link>
        </p>
      </DetailsPage>
    </main>
  );
}
