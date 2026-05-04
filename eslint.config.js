import delementConfig from '@delement/eslint-config-master';

export default [
  ...delementConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];