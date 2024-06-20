import { OneSignal } from "react-native-onesignal";

// caso queira adicionar uma email tag
// export function tagUserEmailCreate(email : string) {
//     OneSignal.User.addTag("user_email", email)
// }

// caso queira adicionar uma email tag
export function tagUserEmailRemove(email : string) {
    OneSignal.User.removeTag("user_email")
}