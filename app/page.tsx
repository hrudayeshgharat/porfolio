import Portfolio from '@/components/Portfolio';
import { PROJECTS } from '@/data/projects';
import { resolveProjectImages } from '@/lib/project-images';

export default async function Home() {
  const projects = await Promise.all(PROJECTS.map(project => resolveProjectImages(project)));
  return <Portfolio projects={projects} />;
}
