import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo.base,
        secondary: colors.lightBlue.lighten4,
        accent: colors.cyan.accent1,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.amber.base,
        success: colors.green.base,
        background: colors.lightBlue.lighten5
      },
      dark: {
        primary: colors.blue.lighten3
      }
    }
  }
});
