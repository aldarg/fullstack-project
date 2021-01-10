const host = 'http://localhost:5000';
const prefix = 'api/v1';

export default {
  test: () => [host, prefix, 'say-something'].join('/'),
};
