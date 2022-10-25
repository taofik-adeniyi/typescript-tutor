type StringOrNum = string | number;

type greetParams = {
    uid: StringOrNum,
    name: string
}

type logDetailsParams = {
    uid: StringOrNum,
    item: string
}
const logDetails = (uid: StringOrNum, item: string):void => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetMe = (user: greetParams):void => {
    console.log(`${user.name} says hello`)
}