import { boot } from "quasar/wrappers";
import Plugin from "@quasar/quasar-ui-qcalendar/src/QCalendarDay.js";
import "@quasar/quasar-ui-qcalendar/src/css/calendar-day.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarAgenda.sass";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.use(Plugin);
});
