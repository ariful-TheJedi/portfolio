import Link from "next/link";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

async function getRepositories(): Promise<Repository[]> {
  const response = await fetch(
    "https://api.github.com/users/ariful-TheJedi/repos?sort=updated&per_page=100",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos = await response.json();

  return repos
    .filter((repo: Repository) => !repo.fork && !repo.archived)
    .sort(
      (a: Repository, b: Repository) =>
        b.stargazers_count - a.stargazers_count
    );
}

export default async function AllProjectsPage() {
  const repositories = await getRepositories();

  return (
    <section className="min-h-screen bg-background py-24">
      <div className="main-container mx-auto px-6 mt-4 sm:mt-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-text md:text-5xl">
            GitHub Repositories
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore all of my open-source projects, experiments, and software
            repositories from GitHub.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {repositories.map((repo) => (
            <div
              key={repo.id}
              className="rounded-3xl border border-border/50 bg-surface/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-text">
                  {repo.name}
                </h2>

                <span className="text-sm text-muted-foreground">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>

              <p className="mb-6 line-clamp-3 text-sm text-muted-foreground">
                {repo.description || "No description available."}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {repo.language && (
                  <span className="rounded-full bg-bronze/10 px-3 py-1 text-xs text-bronze">
                    {repo.language}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl border border-border px-4 py-2 text-center text-sm font-medium text-text transition hover:border-bronze"
                >
                  View Code
                </Link>

                {repo.homepage && (
                  <Link
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl bg-bronze px-4 py-2 text-center text-sm font-medium text-background"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}