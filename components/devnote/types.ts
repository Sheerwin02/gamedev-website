export interface DevNote {
    id: number;
    title: string;
    content: string;
    authorName: string;
    version: string;
    visibilityLevel: string;
    accessControl: string;
    tags: string;
    relatedIssueId: number;
    postedDate: Date;
    deletedAt: Date | null;
    [key: string]: string | number | Date | null; // Index signature
  }
  