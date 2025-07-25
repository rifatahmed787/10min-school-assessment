/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
    ],
  },
  webpack: (config: {
    module: {
      rules: {
        test: RegExp;
        use:
          | { loader: string; options: { publicPath: string; name: string } }
          | { loader: string; options: { publicPath: string; name: string } };
      }[];
    };
  }) => {
    // Add file loader for mp3 and wav files
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[hash].[ext]",
        },
      },
    });

    // Add loader for ttf fonts
    config.module.rules.push({
      test: /\.(ttf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/fonts/[name].[ext]",
        },
      },
    });

    return config;
  },

  // Add async redirects function
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en/home",
        permanent: false,
      },

      {
        source: "/bn",
        destination: "/bn/home",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
