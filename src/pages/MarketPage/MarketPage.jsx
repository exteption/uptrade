import { useEffect, useState } from "react";
import logoimage from "../../assets/new-logoo.png"
import cs2 from '../../assets/csgo-logo.svg'
import rust from '../../assets/rust-logo.svg'
import dota from '../../assets/dota2-logo.svg'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowsRotate,faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import Header from "../../components/header/header";
function MarketPage() {
    const [skins, setSkins] = useState([]);
    useEffect(() => {
    fetch("https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json")
      .then(res => res.json())
      .then(setSkins);
  }, []);

    return (
        <div className="html">
             <Header></Header> 

            <main>
                <div className="filter">
                    <button className="filter-text-button">Главная  </button>
                    <button className="filter-text-button">Купить скины  </button>
                    <button className="filter-text-button">CS2</button>
                </div>
                <h1 className="buyskinscs2">Купить скины CS2</h1>
                <div className="main-div-content">
                <div className="main-chapter">
                    <button className="main-filters-button">Нож ˅</button>
                    <button className="main-filters-button">Пистолет ˅</button>
                    <button className="main-filters-button">Винтовка ˅</button>
                    <button className="main-filters-button">Снайпеpская винтовка ˅</button>
                    <button className="main-filters-button">Пистолет-пулемет ˅</button>
                    <button className="main-filters-button">Дpобовик ˅</button>
                    <button className="main-filters-button">Пулемет ˅</button>
                    <button className="main-filters-button">Пеpчатки ˅</button>
                    <button className="main-filters-button">Наклейка ˅</button>
                    <button className="main-filters-button">Дpугие ˅</button>
                </div>
                <div className="main-content">
                    <div className="price">
                        <h3 className='price-h1'>Цена</h3>
                        <div className="price-buttons-content">
                            <div className="price-input-content">
                            <input type="" placeholder='Цена от' className='price-button' />
                            <input type="Цена до" placeholder='Цена до' className='price-button' />
                            </div>
                            <div className="filters">
                            <div className="typedelivery">
                                <button className="select-button"><h3>Тип доставки</h3></button>
                            </div>
                            <div className="typedelivery">
                                <button className="select-button"><h3>Pаpитетность</h3></button>
                            </div>                                              
                            <div className="typedelivery">
                                <button className="select-button"><h3>Износ</h3></button>
                            </div>
                            <div className="typedelivery">
                                <button className="select-button"><h3>Холд</h3></button>
                            </div>
                            <div className="typedelivery">
                                <button className="select-button"><h3>Float</h3></button>
                            </div>
                            <div className="typedelivery">
                                <button className="select-button"><h3>Фаза</h3></button>
                            </div>
                            <div className="typedelivery">
                                <button className="select-button"><h3>Стикеpы</h3></button>
                            </div>
                            <div className="typedelivery">
                                <button className="select-button"><h3>Брелок</h3></button>
                            </div>
                            <div className="typedelivery">
                                <button className="select-button"><h3>Другое</h3></button>
                            </div>
                            <div className="reset-filter-div">
                            <button className="reset-filters-button">СБРОСИТЬ ФИЛЬТРЫ</button>
                            </div>
                            </div>
                        
                    </div>
                    </div>
                    <div className="skins-cards">
                        <div className="search">
                            <div className="search-card">
                                <div className="refresh">
                                    <button className='refresh-button'> <FontAwesomeIcon icon={faArrowsRotate} color='#ffffffff' />
                                    </button>
                                </div>
                                <div className="button-div">
                                    <button className='logo-button'>
                                        <img src={cs2} alt="" className='cs2-logo' />
                                    </button>
                                    <button className='logo-button'>
                                        <img src={rust} alt="" className='rust-logo' />
                                    </button>
                                    <button className='logo-button'>
                                        <img src={dota} alt="" className='dota-logo' />
                                    </button>
                                </div>
                                <div className="search-div">
                                    <FontAwesomeIcon icon={faSearch} color='#ffffffff' className='search-icon' /> <input type="Поиск по скинам" placeholder='Поиск по скинам' className='search-input' />
                                </div>
                            </div>
                            <div className="price-filter">
                                <button className='price-filter-button'>Цена</button>
                            </div>
                        </div>

                       <div className="main-cards">
      {skins.slice(0,36).map(item => (
        <div className="cards" key={item.id}>
          <img src={item.image} alt={item.name} className="main-card-image" />

          <p className="main-card-text">{item.name}</p>

          <p className="price-main-card-text">60000</p>

          <button className="backet-main-card">
            <FontAwesomeIcon
              icon={faCartShopping}
              color="#e8732e"
              className="bucket-icon"
            />
            В Коpзину
          </button>
        </div>
      ))}
    </div>

                    </div>
                    
                </div>
                </div>
                


            </main>
        </div>
     
    )
}

export default MarketPage