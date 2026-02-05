import logoimage from "../../assets/new-logoo.png"
function Header() {
    return (
        <div className="main-header">
        <div className="header">
            <div className="buy-sell-skins">
                <img src={logoimage} alt="" className="main-logo" />
                <button className="button-header">Купить скины</button>
                <button className="button-header">Продать скины</button>
            </div>
            <div className="main-buttons">
                <button className="main-backet">Коpзина</button>
                <button className="profile">0.00$ ˅</button>
            </div>
        </div>
        <div className="filter">
                <button className="filter-text-button">Главная  </button>
                <button className="filter-text-button">Купить скины  </button>
                <button className="filter-text-button">CS2</button>
        </div>
        </div>

    )
}
export default Header 