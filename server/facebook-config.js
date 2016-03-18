// first, remove configuration entry in case service is already configured

Accounts.loginServiceConfiguration.remove({
  	service: "facebook"
});

Accounts.loginServiceConfiguration.insert({
  	service: "facebook",
  	appId: "153360715055453",
  	secret: "4e7e2e7d83713753838fc4a02a29984a"
});
