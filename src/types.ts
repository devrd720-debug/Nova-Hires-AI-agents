export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  matchScore: number;
  postedAt: string;
  tier: string;
  description?: string;
}

export interface Application {
  id: string;
  jobId: string;
  status: 'NEW' | 'APPLIED' | 'INTERVIEWING' | 'REJECTED' | 'OFFER' | 'WITHDRAWN';
  appliedAt: string;
  atsScore: number;
  tailoredResumeUrl: string;
}

export interface Outreach {
  id: string;
  contactName: string;
  company: string;
  status: 'INVITED' | 'CONNECTED' | 'REPLIED' | 'REFERRED';
  lastMessage?: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  plan: 'FREE' | 'PRO' | 'PRO_PLUS';
}
