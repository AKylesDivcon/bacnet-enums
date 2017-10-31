"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServicesSupported;
(function (ServicesSupported) {
    ServicesSupported[ServicesSupported["acknowledgeAlarm"] = 0] = "acknowledgeAlarm";
    ServicesSupported[ServicesSupported["confirmedCovNotification"] = 1] = "confirmedCovNotification";
    ServicesSupported[ServicesSupported["confirmedEventNotification"] = 2] = "confirmedEventNotification";
    ServicesSupported[ServicesSupported["getAlarmSummary"] = 3] = "getAlarmSummary";
    ServicesSupported[ServicesSupported["getEnrollmentSummary"] = 4] = "getEnrollmentSummary";
    ServicesSupported[ServicesSupported["getEventInformation"] = 39] = "getEventInformation";
    ServicesSupported[ServicesSupported["subscribeCov"] = 5] = "subscribeCov";
    ServicesSupported[ServicesSupported["subscribeCovProperty"] = 38] = "subscribeCovProperty";
    ServicesSupported[ServicesSupported["lifeSafetyOperation"] = 37] = "lifeSafetyOperation";
    ServicesSupported[ServicesSupported["atomicReadFile"] = 6] = "atomicReadFile";
    ServicesSupported[ServicesSupported["atomicWriteFile"] = 7] = "atomicWriteFile";
    ServicesSupported[ServicesSupported["addListElement"] = 8] = "addListElement";
    ServicesSupported[ServicesSupported["removeListElement"] = 9] = "removeListElement";
    ServicesSupported[ServicesSupported["createObject"] = 10] = "createObject";
    ServicesSupported[ServicesSupported["deleteObject"] = 11] = "deleteObject";
    ServicesSupported[ServicesSupported["readProperty"] = 12] = "readProperty";
    ServicesSupported[ServicesSupported["readPropConditional"] = 13] = "readPropConditional";
    ServicesSupported[ServicesSupported["readPropMultiple"] = 14] = "readPropMultiple";
    ServicesSupported[ServicesSupported["readRange"] = 35] = "readRange";
    ServicesSupported[ServicesSupported["writeProperty"] = 15] = "writeProperty";
    ServicesSupported[ServicesSupported["writePropMultiple"] = 16] = "writePropMultiple";
    ServicesSupported[ServicesSupported["writeGroup"] = 40] = "writeGroup";
    ServicesSupported[ServicesSupported["deviceCommunicationControl"] = 17] = "deviceCommunicationControl";
    ServicesSupported[ServicesSupported["privateTransfer"] = 18] = "privateTransfer";
    ServicesSupported[ServicesSupported["textMessage"] = 19] = "textMessage";
    ServicesSupported[ServicesSupported["reinitializeDevice"] = 20] = "reinitializeDevice";
    ServicesSupported[ServicesSupported["vtOpen"] = 21] = "vtOpen";
    ServicesSupported[ServicesSupported["vtClose"] = 22] = "vtClose";
    ServicesSupported[ServicesSupported["vtData"] = 23] = "vtData";
    ServicesSupported[ServicesSupported["authenticate"] = 24] = "authenticate";
    ServicesSupported[ServicesSupported["requestKey"] = 25] = "requestKey";
    ServicesSupported[ServicesSupported["iAm"] = 26] = "iAm";
    ServicesSupported[ServicesSupported["iHave"] = 27] = "iHave";
    ServicesSupported[ServicesSupported["unconfirmedCovNotification"] = 28] = "unconfirmedCovNotification";
    ServicesSupported[ServicesSupported["unconfirmedEventNotification"] = 29] = "unconfirmedEventNotification";
    ServicesSupported[ServicesSupported["unconfirmedPrivateTransfer"] = 30] = "unconfirmedPrivateTransfer";
    ServicesSupported[ServicesSupported["unconfirmedTextMessage"] = 31] = "unconfirmedTextMessage";
    ServicesSupported[ServicesSupported["timeSynchronization"] = 32] = "timeSynchronization";
    ServicesSupported[ServicesSupported["utcTimeSynchronization"] = 36] = "utcTimeSynchronization";
    ServicesSupported[ServicesSupported["whoHas"] = 33] = "whoHas";
    ServicesSupported[ServicesSupported["whoIs"] = 34] = "whoIs";
})(ServicesSupported || (ServicesSupported = {}));
;
exports.default = ServicesSupported;
//# sourceMappingURL=services-supported.js.map