// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {secret}=context.app.get('stripe');console.log(secret);
    // Set your secret key. Remember to switch to your live secret key in production.
    // See your keys here: https://dashboard.stripe.com/apikeys
    const stripe = require('stripe')(secret);

    const {id} = await stripe.accounts.create({
      type: 'express',
    });

    context.data.stripeAccountId=id;

    return null;

    //return context;
  };
};
