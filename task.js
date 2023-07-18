//1.Alış veriş sifarişinin pulsuz göndərmə üçün uyğun olub olmadığını müəyyən edən funksiya yaradın.
//Satın alınan əşyaların ümumi dəyəri  $50 000 dən çox olarsa,sifariş pulsuz çatdırılma üçün uyğundur.
//let product = [
 //   shampoo: 5.99 ,
   // rubber ducks: 15.99,
//]

//function freeShopping(arr) {
  //  sum = 0
    //for (let i =0, i < arr.length, i++)
    //sum += arr[i]

    //if(sum > 50 000) {
     //   return "Pulsuz çatdırılma"
   //}else {
     //   return "Ödənişli çatdırılma"
  // }
//}  

//console.log(freeShopping(product))

//2.İstənilən vaxt 14 gün evdə qalmalı ola biləcəyiniz bir dünya təsəvvür etməyə
//çalışın. Sağ qalmaq üçün kifayət qədər su ehtiyatınız varmı? Hər Adamın
//gündə ortalama 3 litr su istifadə etdiyini fərz edəcəyik.
//İki açar/dəyəri olan arqumentində obyekti qəbul edəcək funksiya yaradın:
//● insanlar - Evdəki insanların sayı.
//● su - su ehtiyatının həcmi (litr).
//Istifadəçiyə daha çox su almaq lazım olub-olmadığını bildirən və su ehtiyatının
//neçə gün bəs edəcəyini bəyan edən string qaytarın!

const waterPerPerson = 3;

function waterChecker({ personCount, waterCount }) {
    const waterPerDay = personCount * waterCount
    const result = parseInt( waterCount / waterPerDay);
    
    if (result) {
        console.log("Sizin su ehtiyatiniz `${result}` günə tükənəcək.Su alin!") 
    }
        console.log("Sizin su ehtiyatiniz 1 günə tükənəcək.Su alin!")
   
}
console.log(waterChecker({ personCount: 4, waterCount: 12 }) )

//3.Arqumentində x rəqəmi və y simvolu (kişi üçün "m", qadın üçün "f") qəbul edən və
//əcdadın (m/f) və ya nəslin (m/f) adını qaytaran funksiya yaradın.
//Rəqəm mənfi olarsa, əlaqəli əcdadı qaytarın.
// Müsbət olarsa, əlaqəli nəslini qaytarın.
//Siz 0 nəsilsiniz. 0 (kişi və ya qadın) vəziyyətində "me!" qaytarın.

const generation = ( x ,'y')

switch(generation) {
    case -3, 'm':
        console.log('great grandfather');
    case -3, 'f':
        console.log('great grandmother');
    case -2, 'm':
        console.log('grandfather');  
    case -2, 'f':
        console.log('grandmother');
    case -1, 'm':
        console.log('father');
    case -1, 'f':
        console.log('mother') ;
    case 0, 'm':
        console.log('me!') ;
    case 0, 'f':
        console.log('me!');
    case 1, 'm':
        console.log('son');
    case 1, 'f':
        console.log('daughter');
    case 2, 'm':
        console.log('grandson');
    case 2, 'f':
        console.log('granddaughter');
    case 3, 'm':
        console.log('great grandson');
    case 3, 'f':
        console.log('great granddaughter');
}

generation(2, 'f')