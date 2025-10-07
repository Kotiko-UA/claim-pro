import type { TabTitleType, TabTopContentType } from '@/shared/types/tabs-types'

export const contractorTabsBtns: TabTitleType[] = [
  {
    id: 1,
    label: 'Assign a Claim',
  },
  {
    id: 2,
    label: 'Submit a Supplement',
  },
  {
    id: 3,
    label: 'Track My Claims',
  },
]
export const profTabsBtns: TabTitleType[] = [
  {
    id: 1,
    label: 'Assign a Claim',
  },
  {
    id: 2,
    label: 'Assign an appraisal',
  },
  {
    id: 3,
    label: 'Track My Claims',
  },
]

export const contractorTabsContent: TabTopContentType[] = [
  {
    id: 1,
    title: 'Assign ',
    highlight: 'an appraisal',
    text: 'Submit an appraisal request quickly and securely through our platform. Share property or damage details, attach supporting documentation, and track the assignment of an appraiser in real time.',
    list: [
      'Quick Appraisal submission',
      'Upload photos and documents',
      'Instant confirmation of receipt',
    ],
  },
  {
    id: 2,
    title: 'Submit a ',
    highlight: 'Supplement',
    text: 'If the initial estimate did not account for all damages or costs, you can submit a supplement. Our experts will review the documents and prepare a revised estimate to ensure fair compensation.',
    list: [
      'Identify and add missing costs',
      'Detailed review of initial estimates',
      'Full support throughout the process',
    ],
  },
  {
    id: 3,
    title: 'Track My ',
    highlight: 'Claims',
    text: 'Monitor the status of all your claims in real time. Receive notifications on updates, review document history, and communicate directly with our team from your personal account.',
    list: [
      'Transparency at every step',
      'Real-time status updates',
      'Easy access to claim history',
    ],
  },
]

export const profTabsContent: TabTopContentType[] = [
  {
    id: 1,
    title: 'Assign a ',
    highlight: 'Claim',
    text: 'File a new insurance claim directly through our system. Provide incident details, upload required documents, and receive confirmation of claim assignment in real time.',
    list: [
      'Quick claim submission',
      'Upload photos and documents',
      'Instant confirmation of receipt',
    ],
  },
  {
    id: 2,
    title: 'Assign ',
    highlight: 'an appraisal',
    text: 'Submit an appraisal request quickly and securely through our platform. Share property or damage details, attach supporting documentation, and track the assignment of an appraiser in real time.',
    list: [
      'Quick Appraisal submission',
      'Upload photos and documents',
      'Instant confirmation of receipt',
    ],
  },
  {
    id: 3,
    title: 'Track My ',
    highlight: 'Claims',
    text: 'Monitor the status of all your claims in real time. Receive notifications on updates, review document history, and communicate directly with our team from your personal account.',
    list: [
      'Transparency at every step',
      'Real-time status updates',
      'Easy access to claim history',
    ],
  },
]
