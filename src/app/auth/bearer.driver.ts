import { defineAuthDriver } from "vue-auth3";

export default defineAuthDriver({
  request(auth, options, token) {
    options.headers["Authorization"] = `Bearer ${token}`;

    return options;
  },

  response(auth, res) {
    const token = res.data.token;

    if (token) {
      const i = token.split(/Bearer:?\s?/i);

      return i[i.length > 1 ? 1 : 0].trim();
    }

    return null;
  },
});
