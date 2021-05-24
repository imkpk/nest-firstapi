import { Document } from 'mongoose';
export interface ICar extend Document{
  readonly id: number;
  readonly brand: string;
  readonly color: string;
  readonly model: string;
}