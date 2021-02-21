import {Turn} from './turn';

export interface Player {
  name: string;
  turns: Turn[];
}
