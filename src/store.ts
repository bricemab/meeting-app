import Vuex from "vuex";
import JwtDecode from "jwt-decode";
import {UserRole} from "@/Utils/Types";
import axios from "axios";
import RequestManager  from "@/modules/RequestManager";
import retryTimes = jest.retryTimes;

export default new Vuex.Store({
  state: {
    errorMessage: "",
    status: "",
    token: sessionStorage.getItem("token") || "",
    user: {},
    userRole: UserRole.USER_ANONYMOUS,
  },
  mutations: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    reset_error(state) {
      state.errorMessage = "";
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    notify_error(state, errorMessage: string) {
      state.errorMessage = errorMessage;
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    auth_request(state) {
      state.status = "loading";
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    auth_success(state, data) {
      state.status = "success";
      state.token = data.token;
      state.user = data.user;
      state.userRole = data.user.role || UserRole.USER_ANONYMOUS;
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    auth_error(state) {
      state.status = "error";
      state.status = "";
      state.token = "";
      state.user = {};
      state.userRole = UserRole.USER_ANONYMOUS;
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.user = {};
      state.userRole = UserRole.USER_ANONYMOUS;
    },
  },
  actions: {
    welcomeBackTest: (token) => {
      return new Promise((resolve, reject) => {
        try {
          resolve("ok " + token);
        } catch (e) {
          reject("e");
        }
      });
    },
    welcomeBack: async ({commit}, token) => new Promise((resolve, reject) => {
      commit("auth_request");
      if (token) {
        const tokenData: {
          user: UserRole;
          userRole: UserRole;
        } = JwtDecode(token) || {};
        if (tokenData.user) {
          RequestManager.setNewToken(token);
          commit("auth_success", {token, user: tokenData.user});
          resolve(true);
        } else {
          commit("auth_error");
          sessionStorage.removeItem("token");
          resolve(false);
        }
      } else {
        commit("auth_error");
        sessionStorage.removeItem("token");
        resolve(false);
      }
    }),
    login: async ({commit}, authData: object) => new Promise((resolve, reject) => {
      RequestManager.executePostRequest("/users/authentication", authData).then(result => {
        if (result.success && result.data) {
          const token = result.data.token;
          const tokenData: {
            user: UserRole;
            userRole: UserRole;
          } = JwtDecode(token) || {};

          RequestManager.setNewToken(token);
          sessionStorage.setItem("token", token);
          commit("auth_success", {token, user: tokenData.user});
        } else {
          commit("auth_error");
          sessionStorage.removeItem("token");
        }
        resolve(result);
      });
    }),
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit("logout");
        sessionStorage.removeItem("token");
        RequestManager.resetToken();
        resolve(true);
      });
    },
  },
  getters: {
    isLoggedIn: (state) => state.userRole !== UserRole.USER_ANONYMOUS,
    authStatus: (state) => state.status,
    errorMessage: (state) => state.errorMessage,
    user: (state) => state.user,
    userRole: (state) => state.userRole,
  },
});
