const { ONE_SIGNAL_CONFIG } = require("../../config/app-config");
const pushNotificationsService = require("./push-notifications-service");
const viewReminder = require("../Reminder/viewReminders-service");

exports.sendNotifications = ( req, res, next ) => { 
  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    contents :  { "en": "Test Push Notification "},
    included_segments: ["All"],
    content_available: true,
    small_icon: "ic_notification_icon",
    data: {
      PushTitle: "CUSTOM NOTIFICATION",
    } 
  };

  pushNotificationsService.sendNotifications(message , (error, results) => {
    if(error) { 
      return next(error);
    }
    return res.status(200).send({
      message: "Successfully sent!",
      data: results,
    });
  });

}

exports.sendNotificationsToDevice = ( req, res, next ) => { 
  const reminder = new Reminder();

  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    contents :  { "en": "Test Push Notification "},
    included_segments: ["included_players_ids"],
    included_players_ids: req.body.devices ,
    content_available: true,
    small_icon: "ic_notification_icon",
    data: {
      PushTitle: "CUSTOM NOTIFICATION",
    } 
  };

  pushNotificationsService.sendNotifications(message , (error, results) => {
    if(error) { 
      return next(error);
    }
    return res.status(200).send({
      message: "Successfully sent!",
      data: results,
    });
  });

}