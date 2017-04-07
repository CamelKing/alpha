// @Number
import { FnPredicate, FnSortComparator } from './constants';

export type RoundOperand = 'round' | 'ceil' | 'floor';
export type CaseOperand = 'toLowerCase' | 'toUpperCase';

// @String
export const Hyphen: string = '-';
export const HalfWordLen: number = 3;

// @array
export enum _Direction { fromLeft = 1, fromRight = -1 }
export type BinarySearchOption = {
  highestIndex?: boolean;
  predicate?: FnPredicate;
  compare?: FnSortComparator;
  insert?: boolean;
};
