import './MainContent.css';

export function Pagination() {
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}


function MainContent() {
    var styles = {
        maxWidth: '18rem',
        margin: '5px',
        padding: '10px',

    }
    const cardData = [
        {
            header: 'Bank of America',
            title: 'Bank of America - Traveller Card',
            text: 'Bank of America offers 0% interest for new customers'
        },
        {
            header: 'Chase Bank',
            title: 'Chase Bank - Traveller Card',
            text: 'Chase Bank offers 0% interest for new customers'
        },
        {
            header: 'Bank of America',
            title: 'Bank of America - Traveller Card',
            text: 'Bank of America offers 0% interest for new customers'
        },
        {
            header: 'Chase Bank',
            title: 'Chase Bank - Traveller Card',
            text: 'Chase Bank offers 0% interest for new customers'
        },
        {
            header: 'Bank of America',
            title: 'Bank of America - Traveller Card',
            text: 'Bank of America offers 0% interest for new customers'
        },
        {
            header: 'Chase Bank',
            title: 'Chase Bank - Traveller Card',
            text: 'Chase Bank offers 0% interest for new customers'
        }
    ];

    const SearchBar = (props) => {
        return (
            <div>
                <p class={props.bgColor}>Search Results Bar</p>
                <button onClick={props.onClick}>Click</button>
            </div>
        )
    }

    const handleEvent = () => {
        console.log('Parent Component - Event Handler');
    }

    const childEventHandler = () => {
        console.log("Child Event Handler");
    }
    return (
        <div className="main">
            <button onClick={childEventHandler}>Click</button>
            <SearchBar bgColor="bg-warning" onClick={handleEvent} />
            <div className='content'>
            {cardData.map((card, index) => {
                return (<div class="card text-bg-primary mb-3" style={styles}>
                    <div class="card-header">{card.header}</div>
                    <div class="card-body bg-secondary">
                        <h5 class="card-title">{card.title}</h5>
                        <p class="card-text">{card.text}</p>
                    </div>
                </div>)
            })}
            </div>
            <Pagination/>
        </div>
    )
}

export default MainContent;