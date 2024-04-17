export interface WorksFromBases {
  date: number;
  description: string;
  goals: [string];
  group: string;
  level: string;
  name: string;
  repos: [string];
  techStack: [string];
  _id: string;
}

export interface WorksForUi {
  date: number;
  description: string;
  goals: [string];
  group: string;
  level: string;
  name: string;
  repos: [string];
  techStack: [string];
  id: string;
}
