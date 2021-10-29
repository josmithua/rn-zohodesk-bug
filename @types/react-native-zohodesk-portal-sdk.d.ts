declare module 'react-native-zohodesk-portal-sdk' {
  module ZohoDeskPortalSDK {
    function enableLogs(): void;
    function disableLogs(): void;
    function initialise(organizationId: string, appId: string, dataCenter: string);
    function isUserSignedIn(callback: (isSignedIn: boolean) => void);
    function setUserToken(
      userToken: string,
      successCallback: (msg: string) => void,
      errorCallback: (msg: string) => void
    );
    function logout(successCallback: (msg: string) => void, errorCallback: (msg: string) => void);
  }
  module ZDPortalHome {
    function show(): void;
  }

  module ZDPortalTickets {
    function show(): void;
  }

  module ZDPortalCommunity {
    function show(): void;
  }

  module ZDPortalKB {
    function show(): void;
  }

  module ZDPortalSubmitTicket {
    function show(): void;
  }

  module ZDPortalChat {
    function show(): void;
  }
}
