import store from "./store";
import {RolesAllowedPermissions} from "./rolesPermissions";
import {Permission} from "./permissions";

export enum Role {
  USER_ANONYMOUS = "USER_ANONYMOUS",
  USER_STUDENT = "USER_STUDENT",
  USER_TEACHER = "USER_TEACHER",
  USER_RESPONSIBLE_TEACHER = "USER_RESPONSIBLE_TEACHER",
  USER_PCPROFI = "USER_PCPROFI",
}

//todo: reécrire la fonction avec les bonnes perms + roles + mettre les perms et roles au routes
export default class AclManager {
  public static hasUserAccessToPermission(
    routeRequiredPermission: string
  ): {
    isAllowed: boolean;
    redirectionRoute: string | undefined;
  } {
    let hasPermission = false;
    let redirectionRoute: string | undefined = "";
    const userRole: string = store.getters.user.role;
    // Les routes spéciales sont gérées à part
    if (
      routeRequiredPermission &&
      routeRequiredPermission.includes("specialState.")
    ) {
      switch (routeRequiredPermission) {
        case Permission.specialState.redirectToHome:
          hasPermission = false;
          switch (userRole) {
            case Role.USER_ANONYMOUS:
              redirectionRoute = "/ictvs/login";
              break;
            case Role.USER_STUDENT:
              redirectionRoute = "/ictvs/remote-desktop";
              break;
            case Role.USER_PCPROFI:
            case Role.USER_TEACHER:
            case Role.USER_RESPONSIBLE_TEACHER:
              redirectionRoute = "/ictvs/students";
              break;
            default:
              Error("Unknown role " + userRole + "detected, please specify it");
          }

          break;
        case Permission.specialState.allowAll:
          hasPermission = true;
          break;
        case Permission.specialState.userLoggedIn:
          if (store.getters.isLoggedIn) {
            hasPermission = true;
          } else {
            redirectionRoute = "/login";
          }
          break;
        case Permission.specialState.userLoggedOff:
          if (!store.getters.isLoggedIn) {
            hasPermission = true;
          } else {
            redirectionRoute = "/redirect";
          }
          break;
        default:
          Error("Unkwown special permission, please specify it");
      }
    } else {
      // Toutes les permissions
      if (Object.prototype.hasOwnProperty.call(RolesAllowedPermissions, userRole)) {
        const userPermissions: Array<string | object> =
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          RolesAllowedPermissions[userRole];

        userPermissions.forEach(userPermission => {
          if (typeof userPermission === "object") {
            if (
              Object.values(userPermission).includes(routeRequiredPermission)
            ) {
              hasPermission = true;
            }
          } else {
            if (userPermission === routeRequiredPermission) {
              hasPermission = true;
            }
          }
        });
      } else {
        Error("This role must be declared in permissions");
      }
    }
    return {
      isAllowed: hasPermission,
      redirectionRoute
    };
  }

  public static checkPermission(permission: string) {
    const {isAllowed} = AclManager.hasUserAccessToPermission(permission);
    return isAllowed;
  }
}
