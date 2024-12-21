const fs = require('fs');
const path = require('path');

const notCategoryDirs = ['__tests__', '.turbo', 'coverage', 'node_modules'];

const getAllDirs = dir =>
  fs.readdirSync(dir).reduce((dirs, name) => {
    const _path = path.join(dir, name);
    return !fs.statSync(_path).isDirectory() ||
      notCategoryDirs.includes(path.basename(_path))
      ? dirs
      : [...dirs, path.basename(_path)];
  }, []);

module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'category',
        message: '카테고리를 입력해 주세요. (공백 없는 lower-case) : ',
      })
      .then(({ category }) => {
        const allCategories = getAllDirs('packages/ui');

        if (!category) throw new Error('입력된 값이 존재하지 않습니다.');
        if (!new RegExp(/^[a-z]*$/).test(category))
          throw new Error(
            '카테고리는 반드시 공백 없는 lower-case이어야 합니다.',
          );
        if (allCategories.includes(category))
          throw new Error('이미 존재하는 카테고리입니다.');

        return {
          category,
          args,
        };
      }),
};
