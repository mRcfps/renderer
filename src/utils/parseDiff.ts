//@ts-ignore
import parser from 'gitdiff-parser';

import {
  Hunk,
  File,
} from '../components/ContentItem';

const parseDiff = (text: string, options = {}) => {
    let files: File[] = parser.parse(text);

    return files.map((file: File) => {
      const hunks: Hunk[] = file.hunks.map((hunk: Hunk) => ({ ...hunk, isPlain: false }));

      return { ...file, hunks: hunks };
    });
};

export default parseDiff;