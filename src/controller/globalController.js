import events from "../events";

export const home = async (req, res) => {
  try {
    res.render("home", {
      pageTitle: "home",
      events: JSON.stringify(events),
      users: sockets,
    });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "home" });
  }
};
