import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.base,
        secondary: colors.lightGreen.base,
        accent: colors.purple.base,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.amber.base,
        success: colors.green.base
      },
      dark: {
        primary: colors.blue.lighten3
      }
    }
  }
});
