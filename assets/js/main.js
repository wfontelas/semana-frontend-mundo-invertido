import { getHellfireClubSubscription, subscribeToHellfireClub } from './firebase/hellfire-club.js';


const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log('Inscrito com sucesso: ${subscriptionId}')

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = '' 
})

async function loadData() {
    const subscriptions = await getHellfireClubSubscription()
    console.log(subscriptions)
}

loadData()
           