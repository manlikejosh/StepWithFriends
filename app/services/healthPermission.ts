import AppleHealthKit, {
    HealthInputOptions,
    HealthKitPermissions,
    HealthUnit,
  } from "react-native-health";
  
  const { Permissions } = AppleHealthKit.Constants;
  
  const permissions: HealthKitPermissions = {
    permissions: {
      read: [
        Permissions.Steps,
        Permissions.FlightsClimbed,
        Permissions.DistanceWalkingRunning,
      ],
      write: [],
    },
  };