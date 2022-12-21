export interface ITasksRequest {
  title: string;
  content: string;
  finished?: boolean;
}

export interface ITasks {
  id: string;
  title: string;
  content: string;
  finished: boolean;
  userId?: string;
}
