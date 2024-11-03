import type { ProjectTag } from '@/shared/config/projects'
export const useTagName = (tagName: ProjectTag) => {
  return {
    'uiDesign': 'UI Design',
    'contentDesign': 'Content Design',
    'uxDesign': 'UX Design',
    'branding': 'Branding',
    'designStrategy': 'Design Strategy',
    'visualDesign': 'Visual Design'
  }[tagName]
}
