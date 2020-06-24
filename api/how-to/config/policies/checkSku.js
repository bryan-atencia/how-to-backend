module.exports = async (ctx, next) => {
  await next();

 // The code below will be executed after the controller's action.
 if (ctx.status === 200) {
   console.log(ctx, 'the ctx variable')
   ctx.body = 'We cannot find the resource.';
 }
};
