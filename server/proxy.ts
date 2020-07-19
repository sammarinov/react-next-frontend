const devProxy: { [key: string]: {} } = {
  '/api': {
    target: 'http://localhost:3001',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
  },
};

export default devProxy;
