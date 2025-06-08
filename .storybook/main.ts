import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // 🆕 GitHub Pages 서브 디렉토리 지원
  viteFinal: async (config) => {
    // 프로덕션 빌드시에만 base path 설정
    if (process.env.NODE_ENV === 'production') {
      config.base = '/designsystem/storybook/';
    }
    return config;
  },
};
export default config;
