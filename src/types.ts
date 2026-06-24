/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  fallbackSvg?: string;
  tags: string[];
  link?: string;
}

export interface AiTool {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  proficiency: string; // e.g. "خبير / Expert"
  useCase: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  category: 'tutorials' | 'design' | 'resources' | 'articles' | 'videos';
  categoryLabel: string;
  description: string;
  date: string;
  readTime?: string;
  downloadUrl?: string;
  videoUrl?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AchievementStats {
  projectsCount: string;
  designsCount: string;
  videosCount: string;
  fieldsCount: string;
}
