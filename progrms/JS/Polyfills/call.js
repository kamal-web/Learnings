Function.prototype.myCall = function(context={},  ...args){
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}


const logger ={
    log(messge){
        console.log(`${this.module} ${messge}`);
    }
}

const dashboard = {
    module: "dashboard"
}

const product = {
    module: "product"
}

logger.log.myCall(dashboard, "successfully navigated to dashboard");
logger.log.myCall(product, "successfully navigated to product page");
