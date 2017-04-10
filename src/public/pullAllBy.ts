import { FnPredicate } from '../constants';
import { _pullAll } from '../private/_pullAll';

export function pullAllBy(input: any[], values: any[], predicate?: FnPredicate): any[] {

  return _pullAll(input, values, predicate);

}
