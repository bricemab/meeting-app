//todo: creation des permissions
export const Permission = {
  specialState: {
    redirectToHome: "specialState.redirectToHome",
    allowAll: "specialState.allowAll",
    userLoggedIn: "specialState.userLoggedIn",
    userLoggedOff: "specialState.userLoggedOff"
  },
  matchesManager: {
    viewList: "matches.viewList"
  },
  examsManager: {
    viewList: "exams.viewList",
    edit: "exams.edit",
    delete: "exams.delete",
    create: "exams.create",
    process: "exams.process",
    examsBlocked: "exams.examsBlocked",
    versions: "exams.versions"
  },
};
