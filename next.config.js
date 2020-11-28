module.exports = {
  async redirects() {
    return [
      {
        source: "/edit",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
