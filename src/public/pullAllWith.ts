import { FnComparator } from '../constants';
import { _pullAll } from '../private/_pullAll';

export function pullAllWith(input: any[], values: any[], compare?: FnComparator): any[] {

  return _pullAll(input, values, null, compare);

}
