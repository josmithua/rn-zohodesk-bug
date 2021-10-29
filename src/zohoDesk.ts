import {
  ZDPortalHome,
  ZohoDeskPortalSDK,
} from "react-native-zohodesk-portal-sdk";

export async function setZohoDeskUserToken(userToken: string) {
  return await new Promise<string>((resolve, reject) => {
    ZohoDeskPortalSDK.setUserToken(userToken, resolve, reject);
  });
}

export async function logoutZohoDeskUser() {
  return await new Promise<string>((resolve, reject) => {
    ZohoDeskPortalSDK.logout(resolve, reject);
  });
}

export async function isZohoDeskUserSignedIn() {
  return await new Promise<boolean>((resolve) => {
    ZohoDeskPortalSDK.isUserSignedIn(resolve);
  });
}

export function init({
  enableLogs = false,
  orgId,
  appId,
  dataCenter,
}: {
  enableLogs?: boolean;
  orgId: string;
  appId: string;
  dataCenter: string;
}) {
  if (enableLogs) {
    ZohoDeskPortalSDK.enableLogs();
  }
  ZohoDeskPortalSDK.initialise(orgId, appId, dataCenter);
}

export function showZohoDeskPortalHome() {
  ZDPortalHome.show();
}
