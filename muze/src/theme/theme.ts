const txtBase = 'outline-none';

export const theme = {
  buttonSmall: 'px-2 py-2 text-sm',
  buttonMedium: 'px-4 py-2 text-base h-10',
  buttonLarge: 'px-5 py-3 text-lg',
  txtSm: [txtBase, 'px-2 py-2 rounded-full text-sm'].join(' '),
  txtMd: [txtBase, 'px-4 py-2 rounded-full text-base'].join(' '),
  txtLg: [txtBase, 'px-5 py-3 rounded-full text-lg'].join(' '),
};
