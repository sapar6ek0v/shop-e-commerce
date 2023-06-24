import { css } from 'styled-components';

const mixins = {
  apart: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  column: css`
    display: flex;
    flex-direction: column;
  `,

  center: css`
    display: flex;
    align-items: center;
  `,

  fCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  fs12: css`
    font-size: 12px;
    line-height: 14px;
  `,

  fs14: css`
    font-size: 14px;
    line-height: 16px;
  `,

  fs16: css`
    font-size: 16px;
    line-height: 18px;
  `,

  fs20: css`
    font-size: 20px;
    line-height: 24px;
  `,

  oneLineText: css`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: center;
  `
};

export default mixins;
