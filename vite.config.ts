import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [react()],
    base: isProduction ? '/designsystem/' : '/',
    build: {
      outDir: 'dist',
    },
    // 추가로 개발 서버 설정도 가능
    server: {
      port: 5173,
      open: true, // 자동으로 브라우저 열기
    }
  }
})