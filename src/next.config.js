module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bai2',
        permanent: false,
      },
    ];
  },
};