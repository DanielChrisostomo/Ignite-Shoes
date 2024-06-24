import { OneSignal } from "react-native-onesignal";

// caso queira adicionar uma email tag
// export function tagUserEmailCreate(email : string) {
//     OneSignal.User.addTag("user_email", email)
// }

// caso queira adicionar uma email tag
// export function tagUserEmailRemove(email : string) {
//     OneSignal.User.removeTag("user_email")
// }

// mensagem personalizada dinamica
export function tagUserInfoCreate() {
     OneSignal.User.addTags({
        user_name: "Rodrigo",
        user_email: "rodrigo.goncalces@rocketseat.team",
     })
  } 

  // adicionando e removendo itens no carrinho e enviando info para OneSignal User Tags
  export function tagCartUpdate(itemsCount: string){
   OneSignal.User.addTag("cart_items_count", itemsCount)
  }