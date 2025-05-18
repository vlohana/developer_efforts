import { observable } from "mobx";



let person = observable({
  firstName: "Vinod",
  lastName: "Chachwani"

})



console.log('====== conventional mobx syntax ======')

console.log('Our Person: ',person)

//@ts-ignore
person = {
  firstName: 'Vikki'
}

console.log('Our updated Person: ',person)



export { }