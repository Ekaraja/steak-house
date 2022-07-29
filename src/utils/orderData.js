import huawei from "../assets/icons/huawei.svg"
import appStore from "../assets/icons/app_store.svg"
import playStore from "../assets/icons/play_store.svg"


export const orderData = [
    {
        id: 1,
        title: "Zestaw dla 3 osób",
        description: <p>Razem smakuje lepiej! Zamów zestawy obiadowy dla  3 osób już od <span className="--black-highlight">39 zł</span> </p>,
        className:"--card-offer"
    },

    {
        id: 2,
        title: "UberEats ",
        description: <p>Zamawiaj w aplikacji <span className="--black-highlight">10% taniej.</span>Pobierz aplikację UberEats już dziś. </p>,
        icon: true,
        icon1: playStore,
        icon2: appStore,
        icon3: huawei,
        image: huawei,
        className:"order --card-uber"
    }
]


