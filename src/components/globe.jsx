import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "mongodb",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "docker",
  "python",
  "java",
  "flutter",
  "dart",
  "prisma",
  "amazonaws",
  "firebase",
  "nginx",
  "testinglibrary",
  "jest",
  "cypress",
  "jira",
  "gitlab",
  "androidstudio",
  "sonarqube",
  "android",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-2xl items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;