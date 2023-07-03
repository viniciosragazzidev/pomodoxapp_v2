/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  module: {
    rules: [
      //
      {
        test: /\.mp3$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "audio/",
        },
      },
    ],
  },
});
