const envrionment={}

environment.staging={
    port:2020,
    envName:"staging"
}
environment.production={
    port:1010,
    envName:"production"
}

const currentEnvionment=typeof(process.env.NODE_ENV)==='string'?process.env.NODE_ENV:'staging'

const exportEnvionment=typeof(enviornment[currentEnvionment])==='object'?enviornment[currentEnvionment]:envrionment.staging

module.exports=exportEnvionment