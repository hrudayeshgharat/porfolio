import { readdir } from 'node:fs/promises';
import path from 'node:path';
import type { Project } from '../data/projects';

type ProjectImage = { src: string; alt: string; caption: string };
export type ResolvedProject = Omit<Project, 'images'> & { images: ProjectImage[] };
const imageExtension = /\.(png|jpe?g|webp|gif|avif|svg)$/i;

/** Runs on the server at build time (or on a page refresh during development). */
export async function resolveProjectImages(
  project: Project,
  publicDirectory = path.join(process.cwd(), 'public'),
): Promise<ResolvedProject> {
  const folder = project.imageFolder ?? project.title;
  // Only a single folder name: never read files outside public/projects.
  if (!folder.trim() || folder === '.' || folder === '..' || /[\\/\x00]/.test(folder)) {
    throw new Error('Invalid image folder for project: ' + project.id);
  }
  const directory = path.join(publicDirectory, 'projects', folder);
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return { ...project, images: project.images ?? [] };
    }
    throw error;
  }
  const files = entries
    .filter(entry => entry.isFile() && !entry.name.startsWith('.') && imageExtension.test(entry.name))
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }) || a.localeCompare(b, 'en'));
  const images = files.map(name => {
    const caption = name.replace(imageExtension, '').replace(/^\d+[\s._-]+/, '').replace(/[_-]+/g, ' ').trim() || project.title;
    return {
      src: '/projects/' + encodeURIComponent(folder) + '/' + encodeURIComponent(name),
      alt: project.title + ' — ' + caption,
      caption,
    };
  });
  return { ...project, images: images.length ? images : project.images ?? [] };
}
