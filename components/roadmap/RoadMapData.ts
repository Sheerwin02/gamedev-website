// RoadmapData.ts
export interface RoadmapData {
    [year: string]: {
      [month: string]: {
        title: string;
        description: string;
        status: string;
        duration: string;
        imageUrl: string;
      }[];
    };
  }
  