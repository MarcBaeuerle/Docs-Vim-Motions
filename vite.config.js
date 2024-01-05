export default {
  build: {
    // Avoid using hash in file names
    chunkFileNames: 'chunks/[name].js',
    assetFileNames: 'assets/[name].[ext]'
  }
};
