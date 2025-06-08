/**
 * Storybook 활성화 여부를 환경변수로 제어
 */
const isStorybookEnabled = () => {
  // 프로덕션 빌드에서는 비활성화
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_ENABLE_STORYBOOK !== 'false';
  }
  
  // 개발환경에서는 기본적으로 활성화
  return process.env.REACT_APP_ENABLE_STORYBOOK !== 'false';
};

module.exports = {
  isStorybookEnabled,
  
  // Storybook 관련 설정
  storybookConfig: {
    host: process.env.STORYBOOK_HOST || 'localhost',
    port: process.env.STORYBOOK_PORT || 6006,
    buildDir: process.env.STORYBOOK_BUILD_DIR || 'storybook-static'
  }
};