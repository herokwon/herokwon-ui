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

const getAllFiles = dir =>
  fs.readdirSync(dir).reduce((files, name) => {
    const _path = path.join(dir, name);
    return fs.statSync(_path).isDirectory() ||
      !path.basename(_path).endsWith('tsx')
      ? files
      : [...files, path.basename(_path).replace('.tsx', '')];
  }, []);

module.exports = {
  prompt: ({ prompter, args }) => {
    const allCategories = getAllDirs('packages/ui');
    if (allCategories.length === 0)
      throw new Error('카테고리를 먼저 생성해 주세요.');

    return prompter
      .select({
        type: 'input',
        name: 'category',
        message: '카테고리를 선택해 주세요.',
        choices: allCategories,
      })
      .then(category =>
        prompter
          .prompt({
            type: 'input',
            name: 'component',
            message: '컴포넌트 이름을 입력해 주세요. (공백없이 PascalCase) : ',
          })
          .then(({ component }) => {
            const allComponents = getAllFiles(`packages/ui/${category}/src`);

            if (!component) throw new Error('입력된 값이 존재하지 않습니다.');
            if (allComponents.includes(component))
              throw new Error('이미 존재하는 컴포넌트입니다.');
            if (new RegExp(/\s/g).test(component))
              throw new Error('공백이 포함되어 있습니다.');
            if (new RegExp(/^[0-9]/).test(component))
              throw new Error('첫 글자는 숫자를 허용하지 않습니다.');
            if (!new RegExp(/^[A-Z]/).test(component))
              throw new Error('첫 글자가 대문자로 시작하지 않습니다.');

            return {
              category,
              component,
              args,
            };
          }),
      );
  },
};
