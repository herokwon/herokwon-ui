module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'category',
        message: '카테고리를 입력해 주세요. (공백 없는 lower-case) : ',
      })
      .then(({ category }) => {
        if (!category) throw new Error('입력된 값이 존재하지 않습니다.');
        if (!new RegExp(/^[a-z]*$/).test(category))
          throw new Error(
            '카테고리는 반드시 공백 없는 lower-case이어야 합니다.',
          );

        return {
          category,
          args,
        };
      }),
};
