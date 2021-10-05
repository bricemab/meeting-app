import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    errorMessage: "",
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    userRole: "anonymousUser",
  },
  mutations: {
    test(state: any) {
      state.errorMessage = "";
    }
  },
  actions: {
    welcomeBack: (token) => {
      return new Promise((resolve, reject) => {
        try {
          resolve("ok " + token);
        } catch (e) {
          reject("e");
        }
      });
    }
  }
});
