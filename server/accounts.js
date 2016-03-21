// first, remove configuration entry in case service is already configured
Meteor.startup(function () {
Accounts.loginServiceConfiguration.remove({
  service: "facebook"
});
Accounts.loginServiceConfiguration.insert({
  service: "facebook",
  appId: "",
  secret: ""
});

// first, remove configuration entry in case service is already configured
/*Accounts.loginServiceConfiguration.remove({
  service: "twitter"
});
Accounts.loginServiceConfiguration.insert({
  service: "twitter",
  consumerKey: "yourConsumerKey",
  secret: "yourSecret"
});*/

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "google"
});
Accounts.loginServiceConfiguration.insert({
  service: "",
  secret: ""
});
});
