module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://github.com/chroline/madlibs-api",
        permanent: true,
      },
    ];
  },
};
