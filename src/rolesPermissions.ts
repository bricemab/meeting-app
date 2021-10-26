//todo: creation des permissions + roles
import { Permission } from "./permissions";

export const RolesAllowedPermissions = {
  USER_ANONYMOUS: [],
  USER_NORMAL: [
    Permission.matchesManager.viewList
  ],
  USER_GOLD: [

  ],
  USER_PLATINUM: [

  ],
  USER_ADMIN: [

  ]
  // USER_RESPONSIBLE_TEACHER: [
  //   Permission.firewallPolicesManager,
  //   Permission.groupsManager,
  //   Permission.classesManager,
  //   Permission.teachersManager,
  //   Permission.studentsManager.viewList,
  //   Permission.studentsManager.create,
  //   Permission.studentsManager.changePassword,
  //   Permission.studentsManager.changeLogin,
  //   Permission.studentsManager.edit,
  //   Permission.studentsManager.delete,
  //   Permission.studentsManager.deleteSeveral,
  //   Permission.studentsManager.createMail,
  //   Permission.studentsManager.export,
  //   Permission.studentsManager.manageGroup,
  //   Permission.examsManager.viewList,
  //   Permission.examsManager.create,
  //   Permission.examsManager.delete,
  //   Permission.examsManager.process,
  //   Permission.examsManager.edit,
  //   Permission.remoteDesktopManager,
  //   Permission.helpAndSupportManager
  // ],
};
