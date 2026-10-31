type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  focus: string[];
  tags: string[];
  story?: { challenge: string; testing: string; learning: string };
};

export const experience: Experience[] = [
  {
    company: "Fresenius Medical Care",
    role: "Embedded Software Engineering Co-op",
    period: "Jul 2026 – Present",
    location: "Lawrence, MA",
    summary: "Contributing to an embedded Audit Log system using C++ and JSON, with a focus on refactoring for maintainability, developing mock-based unit tests, and improving test automation.",
    focus: ["Refactoring embedded software for maintainability.", "Developing mock-based unit tests.", "Improving automation to make verification scalable and resilient to future software changes."],
    tags: ["C++", "JSON", "Linux", "Unit Testing", "Mocks", "Test Automation"],
  },
  {
    company: "Charles River Development",
    role: "Software Engineer Co-op",
    period: "Jan 2025 – Jun 2025",
    location: "Burlington, MA",
    summary: "Worked on moving a Java application's development environment into a Docker-based dev container using Docker Compose, with a focus on preserving API connectivity to another internal project and checking integration behavior. Helped define future goals and next steps for the ongoing project.",
    focus: ["Working on a Docker-based dev container for the Java development environment.", "Using Docker Compose while investigating API connectivity to another internal project.", "Checking the setup manually and using the established integration tests.", "Helping define future goals and next steps for continued development."],
    tags: ["Java", "Docker", "Docker Compose", "APIs", "Dev Containers", "Integration Testing"],
    story: {
      challenge: "The project began during my co-op, with the goal of moving the existing development environment into a dev container. Docker and Docker Compose were new to me, so I had to learn the tooling while working within a large Java codebase. A central challenge was maintaining the application's API connection to another company project from inside the containerized setup.",
      testing: "I checked the development setup manually and used the established integration tests to check its behavior with the connected application. The project remains in development; I also helped define future goals and next steps for the work.",
      learning: "This experience built my understanding of Docker, Docker Compose, Java applications, and APIs. I also learned how to navigate a large existing codebase and work within a professional software engineering environment, where understanding the surrounding systems matters as much as the individual change.",
    },
  },
];
